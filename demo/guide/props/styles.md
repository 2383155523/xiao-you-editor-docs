# Styles

深浅主题样式自定义

- **类型：** `Object`

- **详细信息**

自定义深浅主题样式细节

## 配置示例

```ts
import type { Styles } from 'xiao-you-editor'
const defaultStyles: Styles = {
  light: {
    //浅色主题样式细节设置
    scrollBarColor: 'red', //滚动条颜色
    border: {
      color: '#dddddd', //边框颜色
      style: 'solid', //边框样式
      width: '2px' //边框宽度
    },
    background: {
      url: '', //背景图url地址
      repeat: '', //背景图重复规则
      size: '', //背景图size展示规则
      color: '#fff' //背景色
    },
    placeholder: {
      color: '#333', //无内容提示语字体颜色
      content: '写点什么吧...', //无内容提示语
      size: '16px', //无内容提示语字体大小
      weight: '' //无内容提示语字体粗细
    },
    font: {
      color: '333', //编辑器字体颜色
      size: '16px', //编辑器字体大小
      weight: '' //编辑器字体粗细
    }
  },
  dark: {
    //深色主题样式细节设置
    scrollBarColor: 'purple', //滚动条颜色
    border: {
      color: '#575050', //边框颜色
      style: 'solid', //边框样式
      width: '2px' //边框宽度
    },
    background: {
      url: '', //背景图url地址
      repeat: '', //背景图重复规则
      size: '', //背景图size展示规则
      color: '#303133' //背景色
    },
    placeholder: {
      color: '#dfdbdb', //无内容提示语字体颜色
      content: '写点什么吧...', //无内容提示语
      size: '16px', //无内容提示语字体大小
      weight: '' //无内容提示语字体粗细
    },
    font: {
      color: '#dfdbdb', //编辑器字体颜色
      size: '16px', //编辑器字体大小
      weight: '' //编辑器字体粗细
    }
  }
}
```
