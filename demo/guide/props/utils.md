# Utils

## template

点击图标所要插入的模板

- **类型：** `string`

- **详细信息**

  点击图标快捷生成指定组件模板的内容。

## icon

图标地址

- **类型：** `string`

- **详细信息**

  点击图标的地址。

## hooks

插入事件的钩子对象

- **类型：** `object`

- **详细信息**

  插入事件的钩子对象

> 属性 ↓

### beforeInsert

插入前钩子

- **类型：** `(template:string) => string`

- **详细信息**

  该钩子执行在插入前,参数中可以拿到即将要插入的模板内容,如果返回字符内容，那么它将替换即将要插入的模板内容,如果无返回值则不会替换即将要插入的模板内容

  ### inserted

插入后钩子

- **类型：** `(template:string) => void`

- **详细信息**

  该钩子执行在插入完成后,参数中可以拿到插入的模板内容

## 配置示例

```ts
interface hooks {
  beforeInsert?: (template: string) => string
  inserted?: (template: string) => void
}
interface utilItem {
  template: string
  icon: string
  hooks?: hooks
}

const Utils: Array<utilItem> = [
  {
    template: '',
    icon: '',
    hooks: {
      beforeInsert() {

      },
      inserted() {
        
      }
    }
  }
]
```
