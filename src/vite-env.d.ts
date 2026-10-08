/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PHONE?: string;
  readonly VITE_BIRTH?: string;
  /** 서명 이미지 경로 — resume/signature.png 가 있을 때만 설정 (vite.config 의 localSignature) */
  readonly VITE_SIGNATURE?: string;
}
