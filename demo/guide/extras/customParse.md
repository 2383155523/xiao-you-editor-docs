# 自定义解释器

## 前言

首先 先说说为什么设计出这个 Api 吧

一开始觉得渲染自定义 Vue 组件就已经足够开放了,而且上手也比较容易

但是作者又想了想,一个编辑器如果就仅有一些简单易上手的功能的话似乎有点不够帅

继而结合了程序员对 Markdown 语法的钟爱程度,作者决定还是开放出了解析层面的 Api

## 使用

传给 customParse Props 的类型是一个数组,数组中的每一项是一个解析替换内容的函数,这个函数内容大概如下 ↓

```ts
function parseCode(template: string) {
  //<my-code> 组件语法解析
  let templateReplaceContent: string = template
  //Parse code RegExp
  const reg =
    / {0,3}\n*(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/g
  if (reg.test(template)) {
    templateReplaceContent = template.replace(reg, (...arg) => {
      const lang = arg[2].trim()
      let code = arg[3] ?? ""
      if (code) {
        code = code.replaceAll(`"`, `亻`)
      }
      return `<my-code lang="${lang}" code="${code}"></my-code>`
    })
  }
  return templateReplaceContent
}
```

每个解析函数的形参将实时接收到您在编辑器内输入的内容模板

```ts
let templateReplaceContent: string = template
```

在这里作者推荐您先将实时获取到的内容模板先 copy 存一份

```ts
const reg =
  / {0,3}\n*(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/g
```

解析您所定义语法的正则表达式(这是该函数的核心),通过解析语法的正则表达式全局查找您所定义的语法内容

```ts
if (reg.test(template)) {
  templateReplaceContent = template.replace(reg, (...arg) => {
    const lang = arg[2].trim()
    let code = arg[3] ?? ""
    if (code) {
      code = code.replaceAll(`"`, `亻`)
    }
    return `<my-code lang="${lang}" code="${code}"></my-code>`
  })
}
```

通过解析语法的正则表达式所查找到的信息,全局替换您所要渲染的自定义组件

最后将您替换后的内容模板返回出去,交由插件的渲染器进行渲染就行了,您可以定义多个解析函数来替换您所预设的语法,解析函数的执行顺序即是在数组中所处的顺序

:::warning
请注意,每个解析函数都应返回解析后的内容,如未解析成功也应返回形参所接收到的原始的内容模板,如未正确返回内容,可能会影响后续解析函数的执行或是间接导致渲染器出现 BUG
:::

## 示例

这是一个解析 Markdown 代码块语法的解析函数

```ts
const customParser = [
  (template: string) => {
    //<my-code> 组件语法解析
    //Parse code RegExp
    let templateReplaceContent = template
    const reg =
      / {0,3}\n*(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/g
    if (reg.test(template)) {
      templateReplaceContent = template.replace(reg, (...arg) => {
        const lang = arg[2].trim()
        let code = arg[3] ?? ""
        if (code) {
          code = code.replaceAll(`"`, `亻`)
        }
        return `<my-code lang="${lang}" code="${code}"></my-code>`
      })
    }
    return templateReplaceContent
  },
]
```

通过此解析函数的运行,您可以在编辑区使用 Markdown 代码块的语法来渲染自定义的`<my-code></my-code>`组件来创建代码片段
