import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
    dbCredentials: {
    url: 'postgresql://neondb_owner:npg_5WaBzyelKEQ3@ep-rapid-bush-adhw8bcw-pooler.c-2.us-east-1.aws.neon.tech/ai-video-gnerator?sslmode=require&channel_binding=require' , // use .env for security
  },
});