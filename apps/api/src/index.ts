import { serve } from "bun";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve({
  port: 8080,
  fetch: app.fetch,
});

console.log("api server running in port:8080");
