import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("compute-e2e-happy: ok"));
app.get("/health", (c) => c.json({ ok: true }));

// Bind explicitly (like the build-runner's server.ts) so the server starts when
// Compute runs this module — `export default { port, fetch }` only auto-serves
// when Bun runs the file directly as the entrypoint, not through Compute's build.
const port = Number(process.env.PORT ?? 8080);
Bun.serve({ port, fetch: app.fetch });
console.info(`compute-e2e-happy listening on :${port}`);
