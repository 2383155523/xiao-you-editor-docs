# 快速开始 {#quick-start}

接下来就跟随作者的介绍,将插件运行在您的项目中吧！

## 将插件安装到项目

使用 npm

```bash
npm install xiao-you-editor
```

使用 yarn

```bash
yarn add xiao-you-editor
```

使用 pnpm

```bash
pnpm add xiao-you-editor
```

## 引入使用插件

> 在项目入口文件引入使用插件

```js
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import xiaoYouEditor from 'xiao-you-editor'

createApp(App).use(xiaoYouEditor).mount('#app')
```

引入使用完成后 您的项目中就会多出一个全局组件 `<xy-editor></xy-editor>`,您可以在项目中的任意地方使用此组件且无需引入
