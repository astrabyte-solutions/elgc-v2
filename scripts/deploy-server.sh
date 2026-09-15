#!/bin/bash
set -e

sudo -u postgres psql -c "CREATE DATABASE elgc_v2;" 2>/dev/null || true
sudo -u postgres psql -c "CREATE USER elgc_cms WITH PASSWORD 'ElgcDb2026!';" 2>/dev/null || true
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE elgc_v2 TO elgc_cms;"
sudo -u postgres psql -d elgc_v2 -c "GRANT ALL ON SCHEMA public TO elgc_cms;"

mkdir -p /var/www/elgc-v2
tar -xzf /tmp/elgc-v2-deploy.tgz -C /var/www/elgc-v2
cd /var/www/elgc-v2

SECRET=$(openssl rand -hex 24)
cat > .env.local <<EOF
DATABASE_URL=postgresql://elgc_cms:ElgcDb2026!@localhost:5432/elgc_v2
ADMIN_PATH=cms-7f9a3b
SESSION_SECRET=elgc-v2-session-${SECRET}
ADMIN_EMAIL=admin@elgc.com
ADMIN_PASSWORD=ElgcAdmin2026!
EOF

mkdir -p public/uploads
chmod 755 public/uploads

npm ci --legacy-peer-deps

export DATABASE_URL="postgresql://elgc_cms:ElgcDb2026!@localhost:5432/elgc_v2"
export ADMIN_EMAIL="admin@elgc.com"
export ADMIN_PASSWORD="ElgcAdmin2026!"
npm run db:push
# Seed before build so generateStaticParams sees current CMS content
npm run db:seed
npm run build

if pm2 describe elgc-v2 >/dev/null 2>&1; then
  pm2 restart elgc-v2
else
  pm2 start npm --name elgc-v2 -- start -- -p 9801
fi
pm2 save

echo DEPLOY_OK
