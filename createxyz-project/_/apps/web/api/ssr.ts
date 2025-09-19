import type { IncomingMessage, ServerResponse } from 'http';
import { Readable } from 'node:stream';
import path from 'node:path';
import { createRequestHandler } from '@react-router/node';

let buildPromise: Promise<any> | null = null;

function loadBuild() {
  if (!buildPromise) {
    buildPromise = import(path.join(process.cwd(), 'build/server/index.js'));
  }
  return buildPromise;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const build = await loadBuild();

    const proto = (req.headers['x-forwarded-proto'] as string) || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = new URL(req.url || '/', `${proto}://${host}`);
    const request = new Request(url, {
      method: req.method,
      headers: req.headers as any,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? (req as any) : undefined,
      duplex: 'half' as any,
    });

    const handleRequest = createRequestHandler({
      build,
      mode: process.env.NODE_ENV,
    });

    const response = await handleRequest(request);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    if (response.body) {
      const nodeStream = Readable.fromWeb(response.body as any);
      nodeStream.pipe(res);
      nodeStream.on('end', () => res.end());
      nodeStream.on('error', () => {
        try { res.end(); } catch {}
      });
    } else res.end();
  } catch (err) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}


