import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const serverDir = join(process.cwd(), 'dist', 'server');
const workerFile = join(serverDir, 'index.js');

const workerSource = `function withHeaders(response, pathname) {
  const headers = new Headers(response.headers);

  if (!headers.has('cache-control')) {
    const isCacheable = pathname.startsWith('/assets/');
    headers.set('cache-control', isCacheable ? 'public, max-age=31536000, immutable' : 'no-cache');
  }

  headers.set('x-content-type-options', 'nosniff');
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return withHeaders(response, url.pathname);
    }

    if (request.method === 'GET') {
      const fallback = new Request(new URL('/index.html', request.url), request);
      return withHeaders(await env.ASSETS.fetch(fallback), '/index.html');
    }

    return response;
  },
};
`;

await mkdir(serverDir, { recursive: true });
await writeFile(workerFile, workerSource);
