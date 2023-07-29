# XiaoYouEditor

# Description

一个适用于 Vue3 的内容编辑器插件

## 下载插件

> 执行以下命令下载插件

<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;">npm i xiao-you-editor</span></span></code></pre></div>

## 引入安装插件

```js
import { createApp } from "vue"
import App from "./App.vue"
import xiaoYouEditor from "xiao-you-editor"

createApp(App).use(xiaoYouEditor).mount("#app")
```

> 安装完成后将会在注册一个全局组件 `<xy-editor></xy-editor>`

> 更多的使用方法请前往官方使用文档查看 https://xiao-you-editor-docs.netlify.app/
