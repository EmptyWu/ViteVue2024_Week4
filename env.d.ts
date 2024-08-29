/// <reference types="vite/client" />

interface ImportMetaEnv{
    readonly VITE_API_URL:string;
    readonly VITE_USERS_CHECKOUT:string;
    readonly VITE_USERS_SIGNUP:string;
    readonly VITE_USERS_SIGNIN:string;
    readonly VITE_USERS_SIGNOUT:string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
  }