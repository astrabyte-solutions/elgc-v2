export const ADMIN_PATH = process.env.ADMIN_PATH || "cms-7f9a3b";

export function getAdminBasePath() {
  return `/admin/${ADMIN_PATH}`;
}

export function getAdminUrl(segment = "") {
  const base = getAdminBasePath();
  return segment ? `${base}/${segment.replace(/^\//, "")}` : base;
}

export function isValidAdminPath(segment: string) {
  return segment === ADMIN_PATH;
}
