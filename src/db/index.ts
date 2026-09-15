import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

declare global {
  // eslint-disable-next-line no-var
  var __elgcDbClient: ReturnType<typeof postgres> | undefined;
}

function createClient() {
  if (!connectionString) return null;
  const client =
    global.__elgcDbClient ?? postgres(connectionString, { max: 10, prepare: false });
  if (process.env.NODE_ENV !== "production") {
    global.__elgcDbClient = client;
  }
  return drizzle(client, { schema });
}

export const db = createClient();

export function isDbConfigured() {
  return Boolean(connectionString && db);
}
