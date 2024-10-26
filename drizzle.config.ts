// import "dotenv/config";
import type { Config } from "drizzle-kit";
import { settings } from "./lib/settings";

export default {
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dialect: 'sqlite',
  dbCredentials:{
    url: './pawzz.db'
  }
} satisfies Config;
