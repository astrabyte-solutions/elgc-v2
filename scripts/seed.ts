import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import bcrypt from "bcryptjs";
import { blogs, projects, users } from "../src/db/schema";
import { PROJECTS } from "../src/lib/data/projects";
import { IMAGES } from "../src/lib/images";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const client = postgres(connectionString, { max: 1 });
const db = drizzle(client);

const SAMPLE_BLOGS = [
  {
    slug: "major-rolling-mill-revamp",
    title: "Project Story: Major Rolling Mill Revamp — Field Notes from a Live Steel Plant",
    excerpt:
      "How ELGC managed multi-discipline revamp works inside an operating steel rolling mill — coordinating mechanical, structural and E&I scopes within a fixed outage window.",
    content: `<p>Revamp works inside an operating rolling mill present a specific set of challenges: the outage window is fixed, production resumes on a set date, and every delay compounds against a programme that cannot flex.</p><p>On a recent rolling mill revamp for an Abu Dhabi-based steel producer, ELGC was engaged as the main works contractor covering structural modifications, equipment replacement, piping re-routing and E&I tie-ins across multiple bays.</p><h3>Pre-shutdown preparation</h3><p>Scope freeze was completed six weeks before the outage. Method statements, risk assessments and material staging plans were submitted and approved before any site mobilisation. Workfront assignments were confirmed across all disciplines to avoid interface conflicts during execution.</p><h3>Managing concurrent workfronts</h3><p>With the outage window confirmed, ELGC ran parallel workfronts across three bays simultaneously. Daily progress was tracked at activity level and reported to the client's operations team each morning. Constraints were escalated within the same day to prevent schedule slippage.</p><h3>Handback</h3><p>Works were handed back within the agreed window. Quality records, as-built mark-ups and test dossiers were compiled and submitted at close-out. The client's commissioning team completed electrical energisation and mechanical run-up checks before production restart.</p>`,
    featuredImage: IMAGES.projects.shears[0],
    category: "Project Stories",
    author: "ELGC Site Team",
    status: "published" as const,
  },
  {
    slug: "when-the-shutdown-window-compresses",
    title: "Field Notes: When the Shutdown Window Compresses",
    excerpt:
      "What happens when the available outage window shortens after scope is agreed — and how pre-planned workfront management determines whether delivery holds.",
    content: `<p>A compressed outage window is one of the most common challenges in industrial shutdown contracting. The plant schedule changes, the client needs early production restart, and the contractor is asked to deliver the same scope in less time.</p><p>The difference between projects that hold schedule and those that don't is almost always decided before the shutdown begins — in how thoroughly the pre-shutdown planning was done.</p><h3>What pre-planning actually covers</h3><p>Effective pre-shutdown planning is not just a programme on paper. It involves scope freeze with no late additions, material and equipment staged to point of use, workfront assignments agreed with no gaps or overlaps between disciplines, and permit-to-work sequences pre-planned with the client's operations team.</p><p>When a window compresses, a well-planned workfront can absorb the reduction. An unplanned one cannot.</p><h3>What we have learned from live shutdowns</h3><p>The most productive outages ELGC has delivered were those where the first shift started with every operative knowing exactly where to go, what to do and what the constraints were. The least productive were those where that clarity came on day two or three.</p><p>Pre-shutdown planning is not overhead — it is how the window is protected.</p>`,
    featuredImage: IMAGES.projects.shears[2],
    category: "Field Notes",
    author: "ELGC Project Management",
    status: "published" as const,
  },
  {
    slug: "verifying-site-conditions-before-commitment",
    title: "Technical Article: Verifying Site Conditions Before Commitment",
    excerpt:
      "Why condition surveys, interface identification and scope definition visits matter more than any subsequent planning step.",
    content: `<p>The most consequential decision in an industrial project is not the method statement — it is the scope commitment. And the most common source of scope errors is insufficient site verification before that commitment is made.</p><p>Operating industrial plants present conditions that do not appear in drawings. Existing structural members in different positions than shown. Access routes blocked by plant additions not captured in the latest layout. Interface points with live services at different elevations than expected.</p><h3>What a proper site condition survey covers</h3><p>ELGC conducts structured pre-bid and pre-execution site surveys that address physical access routes and working envelope dimensions, existing structure and support conditions, interface points with live plant and operating systems, permit-to-work requirements and client-imposed constraints, and laydown and staging areas available within the plant fence.</p><h3>Why this changes the scope</h3><p>On a recent equipment erection scope, a pre-execution survey identified that the access route for the main equipment lift had been partially blocked by a new secondary structure installed after the original drawings were issued. The discovery during survey — not during execution — meant the lift sequence could be re-planned before mobilisation.</p><p>The cost of a thorough site survey is measured in days. The cost of discovering the same issues on site is measured in weeks.</p>`,
    featuredImage: IMAGES.hero.erection,
    category: "Technical Articles",
    author: "ELGC Engineering Team",
    status: "published" as const,
  },
];

const PROJECT_SCOPE: Record<string, { title: string; iconName: string }[]> = {
  "major-rolling-mill-revamp": [
    { title: "Structural Modifications & Support Works", iconName: "Layers" },
    { title: "Equipment Replacement & Erection", iconName: "Wrench" },
    { title: "Piping Re-routing", iconName: "Pipette" },
    { title: "Electrical & Instrumentation Tie-ins", iconName: "Columns3" },
    { title: "Multi-workfront Shutdown Management", iconName: "Shovel" },
  ],
  "yogurt-processing-plant-dismantling": [
    { title: "Condition Assessment & Tagging", iconName: "Shovel" },
    { title: "Controlled Mechanical Dismantling", iconName: "Wrench" },
    { title: "Piping Isolation & Disconnection", iconName: "Pipette" },
    { title: "Transport Coordination", iconName: "Layers" },
    { title: "Receiving Site Preparation", iconName: "Columns3" },
  ],
  "roller-mill-replacement": [
    { title: "Existing Mill Removal & Disposal", iconName: "Shovel" },
    { title: "Foundation Preparation & Grouting", iconName: "Columns3" },
    { title: "New Mill Erection & Alignment", iconName: "Layers" },
    { title: "Mechanical Commissioning Support", iconName: "Wrench" },
    { title: "OEM Interface & Documentation", iconName: "Pipette" },
  ],
};

async function seed() {
  console.log("Seeding database...");

  const adminEmail = process.env.ADMIN_EMAIL || "admin@elgc.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "ElgcAdmin2026!";
  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await db
    .insert(users)
    .values({
      email: adminEmail,
      passwordHash,
      name: "Site Admin",
      role: "admin",
    })
    .onConflictDoNothing();

  const now = new Date();

  // Replace outdated dummy CMS content with current master-doc insights & projects
  await db.delete(blogs);
  await db.delete(projects);

  for (const blog of SAMPLE_BLOGS) {
    await db.insert(blogs).values({
      ...blog,
      publishedAt: now,
      updatedAt: now,
    });
  }

  const projectSeeds = PROJECTS.filter((p) =>
    ["major-rolling-mill-revamp", "yogurt-processing-plant-dismantling", "roller-mill-replacement"].includes(p.slug),
  );

  for (const p of projectSeeds) {
    await db.insert(projects).values({
      slug: p.slug,
      title: p.title,
      category: p.category,
      categoryColor: p.categoryColor,
      location: p.location,
      year: p.year,
      industry: p.industry,
      description: p.description,
      image: p.image,
      featured: p.featured ?? false,
      contractType: p.contractType ?? null,
      value: p.value ?? null,
      duration: p.duration ?? null,
      durationRange: p.durationRange ?? null,
      client: p.client ?? null,
      area: p.area ?? null,
      structureType: p.structureType ?? null,
      overviewHtml: p.overview
        ? `<p>${p.overview.join("</p><p>")}</p>`
        : `<p>${p.description}</p>`,
      scopeJson: JSON.stringify(
        PROJECT_SCOPE[p.slug] ?? [{ title: "General Works", iconName: "Wrench" }],
      ),
      highlightsJson: JSON.stringify(
        p.keyHighlights ?? [
          "Delivered within the agreed programme",
          "Method statements and ITPs approved before commencement",
          "Client-approved QA/QC documentation at handover",
        ],
      ),
      galleryJson: JSON.stringify(p.gallery ?? [{ image: p.image, caption: p.title }]),
      documentsJson: JSON.stringify([]),
      status: "published",
      updatedAt: now,
    });
  }

  console.log("Seed complete.");
  console.log(`Admin login: ${adminEmail}`);
  await client.end();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
