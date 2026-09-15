import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).notNull().default("admin"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const siteSettings = pgTable("site_settings", {
  key: varchar("key", { length: 100 }).primaryKey(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 500 }).notNull(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  featuredImage: varchar("featured_image", { length: 500 }),
  category: varchar("category", { length: 100 }),
  author: varchar("author", { length: 255 }),
  status: varchar("status", { length: 20 }).notNull().default("draft"),
  publishedAt: timestamp("published_at"),
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: text("meta_description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 500 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  categoryColor: varchar("category_color", { length: 100 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  year: integer("year").notNull(),
  industry: varchar("industry", { length: 100 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image", { length: 500 }).notNull(),
  featured: boolean("featured").default(false),
  contractType: varchar("contract_type", { length: 100 }),
  value: varchar("value", { length: 100 }),
  duration: varchar("duration", { length: 100 }),
  durationRange: varchar("duration_range", { length: 255 }),
  client: varchar("client", { length: 255 }),
  area: varchar("area", { length: 100 }),
  structureType: varchar("structure_type", { length: 255 }),
  overviewHtml: text("overview_html"),
  scopeJson: text("scope_json"),
  highlightsJson: text("highlights_json"),
  galleryJson: text("gallery_json"),
  documentsJson: text("documents_json"),
  status: varchar("status", { length: 20 }).notNull().default("published"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const supplierRegistrations = pgTable("supplier_registrations", {
  id: serial("id").primaryKey(),
  data: text("data").notNull(),
  status: varchar("status", { length: 50 }).notNull().default("new"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  data: text("data").notNull(),
  status: varchar("status", { length: 50 }).notNull().default("new"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type Blog = typeof blogs.$inferSelect;
export type DbProject = typeof projects.$inferSelect;
export type SupplierRegistration = typeof supplierRegistrations.$inferSelect;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
