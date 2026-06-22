import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("compute-e2e-happy: ok"));
app.get("/health", (c) => c.json({ ok: true }));

// Serve over node:http so it binds regardless of whether Compute runs the app
// under Node or Bun (Bun.serve / the default-export form only bind under Bun).
const port = Number(process.env.PORT ?? 8080);
serve({ fetch: app.fetch, port });
console.info(`compute-e2e-happy listening on :${port}`);
