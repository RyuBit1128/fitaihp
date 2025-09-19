import type { IncomingMessage, ServerResponse } from 'http';
import path from 'node:path';
import { createRequestListener } from '@react-router/node';

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
    const listener = createRequestListener({ build, mode: process.env.NODE_ENV });
    return listener(req, res);
  } catch (err) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}


