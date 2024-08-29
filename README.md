## 使用docker 設定一個空白的node 進行vite 操作
```docker
    # 建立 image
    docker build -t node20-dev .
    # 建立 container 並且進入終端模式
    docker run -it -v E:\docker\ViteVue2024_Week4:/app/week4 --name node20-container node20-dev
```

## Vite 建立 Vue
```js
    //使用 vite 建立vue
    npm create vite@latest
    /*
    ✔ Add TypeScript? … No / Yes
    ✔ Add JSX Support? … No / Yes
    ✔ Add Vue Router for Single Page Application development? … No / Yes
    ✔ Add Pinia for state management? … No / Yes
    ✔ Add Vitest for Unit Testing? … No / Yes
    ✔ Add an End-to-End Testing Solution? › No
    ✔ Add ESLint for code quality? … No / Yes
    ✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes
    */
```
See [Vite Configuration Reference](https://vitejs.dev/config/).

## 運行
```
    # 運行並編譯
    docker compose up --build -d 
    #進入終端
    docker exec -it vitevue-week4 /bin/bash
```
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
vue
```js
```