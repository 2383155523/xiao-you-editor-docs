# 简介 {#introduction}

:::tip 使用本插件建议拥有的知识储备

- 因为本插件是基于 [Vue3](https://staging-cn.vuejs.org/) 构建 所以建议您最好拥有 [Vue3](https://staging-cn.vuejs.org/) 的使用经验。
- 因为本插件的高度定制化依赖于 [WebComponent](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 所以建议您最好有了解过 [WebComponent](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)的概念或者了解过 [Vue3](https://staging-cn.vuejs.org/) 的 [defineCustomElement](https://staging-cn.vuejs.org/guide/extras/web-components.html) API 。
  :::

## 为什么要使用 xiaoYouEditor? {#why-use-xiao-you-edit}

如果您有打算自己手写一个花里胡哨的博客系统的打算,那么您首先需要考虑到的一个问题就是

“如何在自己的博客后台生成好看的博客内容?”

在此之前，相信大多数人的选择会是 富文本编辑器 或者 Markdown 编辑器,对于生成一些简单朴素的内容而言,它们都是很好的选择。

但随着个人对博客美观程度的要求提高,它们或许很难满足博友们的需求,至少对于作者来说这是促使我写这个插件的原因

现如今,您有了另一个更好的选择——<b style="color:#42b883;">xiaoYouEditor</b>

## 如何使用 xiaoYouEditor? {#how-to-use-xiao-you-edit}

### 首先

您需要创建好自己所需的 WebComponents,如果是使用原生的 WebComponent 创建方法,那属实很麻烦的,不过值得庆幸的是我们有 [Vue3](https://staging-cn.vuejs.org/)。

[Vue3](https://staging-cn.vuejs.org/) 的 [defineCustomElement](https://staging-cn.vuejs.org/guide/extras/web-components.html) API 帮助我们能以写 Vue 单文件组件的形式去创建 WebComponent，毫不夸张的说你只要会写 Vue 单文件组件，那就能很轻松的创建出 WebComponent

不过更值得庆幸的是,作者提供了一些自用的 WebComponent,如果这些[小组件](https://fuyouplus.cn)能够刚好满足博友们的需求,那就会省下更多的时间,这也是作者所期望的。

### 其次

您需要选择编辑器的版本。

如果您钟爱 Markdown 的写法,可以选择 Markdown 版的编辑器。

如果您想追求极致的美观和定制能力,可以选择 Custom 版的编辑器。

## Custom Vs Markdown {#custom-vs-markdown}

### Markdown

Markdown 版编辑器由 [marked](https://github.com/markedjs/marked) 驱动,它所能解析渲染的组件是由 [marked](https://github.com/markedjs/marked) 的 renderer API 决定。

其实 Markdown 版编辑器也能完成 WebComponent 渲染,在一定程度上功能与 Custom 版编辑器有耦合的地方,但是 Markdown 版编辑器无法解析带有 slot(插槽) 的 WebComponent,这也是 Custom 版编辑器出现的原因。

### Custom

Custom 版编辑器利用浏览器原生的 WebComponent 解析能力全面支持所有 WebComponent 的渲染,理论上可以做到所有您能想到的任何功能!

但缺陷是,会增加浏览器的渲染开销,毕竟相比于解析几个普通的 HTML 标签 ,解析一个受封装的 WebComponent 会更加复杂些，不过在有虚拟 DOM 的加持下,进行局部更新,其实这种渲染开销问题几乎可以忽略不计。

由于 WebComponent 样式隔离机制的存在,导致 书写的 WebComponent 并不能适用全局的 css 样式,不过这个问题也有解法,在后续的章节中会专门讲解到。

### 对比

其实这两个版本的选择说到底就是 “普通花哨” 和 “更花哨” , "Markdown 写法" 和 "HTML 代码式写法" 之间的喜好问题

## 在线体验 {#use-demo}

[点我在线体验](https://fuyouplus.cn)
