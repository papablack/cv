/// <reference types="bun-types" />

import { readFileSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const template = readFileSync(join(__dirname, '../public/index.html'), 'utf-8');

const getContentType = (pathname: string): string => {
  if (pathname.endsWith('.js')) return 'application/javascript';
  if (pathname.endsWith('.css')) return 'text/css';
  if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'image/jpeg';
  if (pathname.endsWith('.png')) return 'image/png';
  if (pathname.endsWith('.gif')) return 'image/gif';
  if (pathname.endsWith('.webp')) return 'image/webp';
  return 'application/octet-stream';
};

const server = Bun.serve({
  port: 1337,
  development: true, // Enable development mode for hot reloading
  async fetch(req: Request) {    
    const url = new URL(req.url);
    const filePath = join(__dirname, '../public', url.pathname);

    // Check if this is a request for a static file
    if (existsSync(filePath)) {
      // Check if the path is a directory
      const stats = statSync(filePath);
      if (stats.isDirectory()) {
        // Serve index.html for directory requests
        return new Response(template, {
          headers: {
            "Content-Type": "text/html",
            "Cache-Control": "no-cache",
          },
        });
      }

      const file = Bun.file(filePath);
      return new Response(file, {
        headers: {
          "Content-Type": getContentType(url.pathname),
          "Cache-Control": "no-cache", // Disable caching in development
        },
      });
    }

    // Serve index.html for all other routes
    return new Response(template, {
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-cache", // Disable caching in development
      },
    });
  },
});

console.log(`Listening on http://localhost:${server.port} (development mode with hot reloading)`);
