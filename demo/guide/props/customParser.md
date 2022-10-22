# Custom Parser

自定义解析器

- **类型：** `Array<(template: string) => string>`

- **详细信息**

自定义语法解析器

## 配置示例

```ts
//自定义解析器
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
        let code = arg[3] ?? ''
        if (code) {
          code = code.replaceAll(`"`, `亻`)
        }
        return `<my-code lang="${lang}" code="${code}"></my-code>`
      })
    }
    return templateReplaceContent
  }
]
```
