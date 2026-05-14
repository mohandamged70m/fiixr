import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Load from .env.local (has precedence) then .env
config({ path: ".env.local", override: true });
config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL ?? "postgresql://localhost:5432/fiixr",
  },
});
