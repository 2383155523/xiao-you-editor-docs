# Templates

预设内容模板

- **类型：** `Array<{ template: string; light: { icon: string }; dark: { icon: string } }>`

- **详细信息**

根据自己预设的模板 快捷生成内容

## 配置示例

```ts
const templates = [
  {
    template: '<my-h1>一级标题</my-h1>',
    dark: {
      icon: 'h1DarkIcon.png'
    },
    light: {
      icon: 'h1LightIcon.svg'
    }
  }
]
```
