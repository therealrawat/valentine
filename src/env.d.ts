/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ALLOWED_NAME_1: string
  readonly VITE_ALLOWED_NAME_2: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

