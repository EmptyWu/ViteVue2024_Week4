/// <reference types="vite/client" />

interface BaseMetaEnv{
    readonly VITE_API_URL:string;
}

interface ImportMetaEnv extends BaseMetaEnv{    
    readonly VITE_USERS_CHECKOUT:string;
    readonly VITE_USERS_SIGNUP:string;
    readonly VITE_USERS_SIGNIN:string;
    readonly VITE_USERS_SIGNOUT:string;
}

interface TodoMetaEnv extends BaseMetaEnv{
    readonly VITE_TODOS_GET:string;
    readonly VITE_TODOS_POST:string;
    readonly VITE_TODOS_PUT:string;
    readonly VITE_TODOS_DELTE:string;
    readonly VITE_TODOS_PATH:string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
  }