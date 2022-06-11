# WebComponent

## 介绍

简单介绍下 [defineCustomElement](https://staging-cn.vuejs.org/guide/extras/web-components.html) API 的使用方法

```js
import { defineCustomElement } from 'vue'
import myH1 from './myH1.ce.vue'

window.customElements.define('my-h1', defineCustomElement(myH1))
```

## 首先

您需要在您的项目中创建一个专门用于存放 WebComponents 的文件夹,根据上方的代码示例，可以看到这个目录中的所有 vue 组件文件都应该以 `.ce.vue` 结尾,至于为什么 Vue3 官方文档中有详细解释，这里不做过多解释,照做就行了。

## 其次

您需要对项目做一些配置,以便让 Vue 区分 Vue 组件 和 WebComponent

### 跳过组件解析

默认情况下，Vue 会倾向于解析一个非原生的 HTML 标签为一个注册过的 Vue 组件，而将“渲染一个自定义元素”作为后备选项。这会在开发时导致 Vue 抛出一个“解析组件失败”的警告。要让 Vue 知晓特定元素应该被视为自定义元素并跳过组件解析，我们可以指定 [`compilerOptions.isCustomElement`这个选项](https://staging-cn.vuejs.org/api/application.html#app-config-compileroptions)
如果在开发 Vue 应用时进行了构建配置，则应该在构建配置中传递该选项，因为它是一个编译时选项。

#### 浏览器内编译时的示例配置

```js
// 将所有带 my- 的标签名都视为自定义元素
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('my-')
```

::: tip

- 以上配置仅在浏览器内编译时才会工作

- 如果使用了构建工具，请看下面的配置示例

:::

#### Vite 示例配置

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带 my- 的标签名都视为自定义元素
          isCustomElement: (tag) => tag.includes('my-')
        }
      }
    })
  ]
}
```

#### Vue CLI 示例配置

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // 将所有带 my- 的标签名都视为自定义元素
          isCustomElement: (tag) => tag.startsWith('my-')
        }
      }))
  }
}
```

## 完整示例

```js
import { defineCustomElement } from 'vue'

import MyA from './myA.ce.vue'
import myMusic from './myMusic.ce.vue'
import myVideo from './myVideo.ce.vue'
import myCode from './myCode.ce.vue'
import myTips from './myTips.ce.vue'
import myIframe from './myIframe.ce.vue'
import myImg from './myImg.ce.vue'
import myP from './myP.ce.vue'
import myH1 from './myH1.ce.vue'
import myH2 from './myH2.ce.vue'
import myList from './myList.ce.vue'
import myTable from './myTable.ce.vue'
import myTabs from './myTabs.ce.vue'
import myDel from './myDel.ce.vue'

const defineCustomElementsAll = () => {
  window.customElements.define('my-del', defineCustomElement(myDel))
  window.customElements.define('my-tabs', defineCustomElement(myTabs))
  window.customElements.define('my-table', defineCustomElement(myTable))
  window.customElements.define('my-list', defineCustomElement(myList))
  window.customElements.define('my-h2', defineCustomElement(myH2))
  window.customElements.define('my-h1', defineCustomElement(myH1))
  window.customElements.define('my-p', defineCustomElement(myP))
  window.customElements.define('my-a', defineCustomElement(MyA))
  window.customElements.define('my-music', defineCustomElement(myMusic))
  window.customElements.define('my-video', defineCustomElement(myVideo))
  window.customElements.define('my-code', defineCustomElement(myCode))
  window.customElements.define('my-tips', defineCustomElement(myTips))
  window.customElements.define('my-iframe', defineCustomElement(myIframe))
  window.customElements.define('my-img', defineCustomElement(myImg))
}

export default defineCustomElementsAll
```
