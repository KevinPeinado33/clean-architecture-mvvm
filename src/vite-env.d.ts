/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_ENDPOINT_BASE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

