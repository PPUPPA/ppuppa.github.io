import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { resolve } from 'node:path';

const SIGNATURE = resolve(import.meta.dirname, 'resume/signature.png');

/**
 * 경력기술서 서명 이미지 — resume/signature.png 가 있을 때만 dev · preview · build 에 포함한다.
 * resume/ 는 git 제외 폴더라 CI(GitHub Actions) 배포 빌드에는 파일이 없어 들어가지 않는다.
 */
function localSignature(): Plugin {
  const serve = (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    if (req.url?.split('?')[0] !== '/signature.png' || !existsSync(SIGNATURE)) return next();
    res.setHeader('Content-Type', 'image/png');
    res.end(readFileSync(SIGNATURE));
  };
  return {
    name: 'local-signature',
    config() {
      if (existsSync(SIGNATURE)) process.env.VITE_SIGNATURE ??= './signature.png';
    },
    configureServer(server) {
      server.middlewares.use(serve);
    },
    generateBundle() {
      if (existsSync(SIGNATURE)) this.emitFile({ type: 'asset', fileName: 'signature.png', source: readFileSync(SIGNATURE) });
    },
  };
}

// 페이지별 HTML 엔트리 (SPA 라우팅 없이 어떤 정적 호스팅에서도 동작)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), localSignature()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        resume: resolve(import.meta.dirname, 'resume.html'),
        career: resolve(import.meta.dirname, 'career.html'),
      },
    },
  },
});
