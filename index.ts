import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("compute-e2e-happy: ok"));
app.get("/health", (c) => c.json({ ok: true }));

export default {
  port: Number(process.env.PORT ?? 8080),
  fetch: app.fetch,
};
