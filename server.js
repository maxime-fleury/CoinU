import { serve } from "bun";
import { join } from "path";

const PUBLIC_DIR = import.meta.dir;

serve({
  port: 3001,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Default to index.html
    if (path === "/") path = "/index.html";
    if (path === "/favicon.ico") return new Response(null, { status: 204 });

    const filePath = join(PUBLIC_DIR, path);

    try {
      const file = Bun.file(filePath);
      const exists = await file.exists();
      if (!exists) {
        // Try dist/ directory for bundled files
        const distPath = join(PUBLIC_DIR, "dist", path.replace(/^\//, ""));
        const distFile = Bun.file(distPath);
        const distExists = await distFile.exists();
        if (distExists) {
          return new Response(distFile, {
            headers: { "Content-Type": getContentType(distPath) },
          });
        }
        return new Response("Not Found", { status: 404 });
      }
      return new Response(file, {
        headers: withCacheHeaders(filePath, getContentType(filePath)),
      });
    } catch (e) {
      return new Response("Internal Server Error", { status: 500 });
    }
  },
});

// Add a no-cache policy to entries that change every build (`dist/*` and the
// top-level HTML) while keeping any future static assets cacheable.
function withCacheHeaders(path, contentType) {
  const isDist = /[\\/]dist[\\/]/.test(path) || /dist\.js$/.test(path);
  const isHtml = path.endsWith('.html');
  const headers = { "Content-Type": contentType };
  if (isDist || isHtml) {
    headers["Cache-Control"] = 'no-cache, no-store, must-revalidate';
    headers["Pragma"] = 'no-cache';
    headers["Expires"] = '0';
  } else {
    headers["Cache-Control"] = 'public, max-age=3600';
  }
  return headers;
}

function getContentType(path) {
  if (path.endsWith(".html")) return "text/html; charset=utf-8";
  if (path.endsWith(".css")) return "text/css; charset=utf-8";
  if (path.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (path.endsWith(".json")) return "application/json; charset=utf-8";
  if (path.endsWith(".glb") || path.endsWith(".gltf"))
    return "model/gltf-binary";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  if (path.endsWith(".svg")) return "image/svg+xml";
  return "application/octet-stream";
}

console.log("🚀 Coin Pusher 3D server running at http://localhost:3001");
