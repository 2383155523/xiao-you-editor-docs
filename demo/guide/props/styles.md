# Styles

## containerStyle

全局容器样式配置

- **类型：** `object`

- **详细信息**

  全局容器样式配置

  > 属性 ↓

  ### borderRadius

  圆角设置

  - **类型：** `string`

  - **默认：** `10px`

  - **详细信息**

  圆角设置

  ### scrollBarColor

  滚动条主题色设置

  - **类型：** `string`

  - **详细信息**

  滚动条主题色设置

<hr>

### background

背景设置对象

- **类型：** `object`

- **详细信息**

背景设置对象

> 属性 ↓

#### url

背景图片地址

- **类型：** `string`

- **示例：** `url(https://w.wallhaven.cc/full/y8/wallhaven-y8622k.jpg)`

- **详细信息**

背景图片地址，等同于`background:url()` ,一定要用`url()`包裹起来

#### size

背景图片显示的格式

- **类型：** `string`

- **示例：** `cover`

- **详细信息**

背景图片显示的格式，等同于 `background-size:cover;`

#### repeat

背景图片是否允许重复平铺

- **类型：** `string`

- **示例：** `no-repeat`

- **详细信息**

背景图片是否允许重复平铺，等同于 `background-repeat:no-repeat;`

#### color

背景色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

背景色，等同于 `background-color:red;`,设置了背景色属性后,背景图将失效，两者只存其一

<hr/>

### font

字体设置对象

- **类型：** `object`

- **详细信息**

字体设置对象

> 属性 ↓

#### color

字体颜色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

字体颜色，等同于 `color:red;`

#### size

字体大小

- **类型：** `string`

- **示例：** `16px`

- **详细信息**

字体颜色，等同于 `font-size:16px;`

#### weight

字体加粗

- **类型：** `string`

- **示例：** `bold`

- **详细信息**

字体加粗，等同于 `font-weight:bold;`

#### family

字体文件

- **类型：** `string`

- **示例：** `xxx`

- **详细信息**

字体文件，等同于 `font-family:xxx;`

<hr/>

### border

> 属性 ↓

#### width

边框宽度

- **类型：** `string`

- **示例：** `2px`

- **默认：**`2px`

- **详细信息**

边框宽度，等同于 `border-width:2px;`

#### style

边框样式

- **类型：** `string`

- **示例：** `solid`

- **默认：**`solid`

- **详细信息**

边框样式，等同于 `border-style:solid;`

#### color

边框颜色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

边框颜色，等同于 `border-color:red;`

## placeholderStyle

placeholder 字体设置对象

- **类型：** `object`

- **详细信息**

placeholder 字体设置对象

> 属性 ↓

### color

字体颜色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

字体颜色，等同于 `color:red;`

### size

字体大小

- **类型：** `string`

- **示例：** `16px`

- **详细信息**

字体颜色，等同于 `font-size:16px;`

### weight

字体加粗

- **类型：** `string`

- **示例：** `bold`

- **详细信息**

字体加粗，等同于 `font-weight:bold;`

### family

字体文件

- **类型：** `string`

- **示例：** `xxx`

- **详细信息**

字体文件，等同于 `font-family:xxx;`

## editBoxStyle

编辑区样式对象

- **类型：** `object`

- **详细信息**

编辑区样式对象

> 属性 ↓

### background

背景设置对象

- **类型：** `object`

- **详细信息**

背景设置对象

> 属性 ↓

#### url

背景图片地址

- **类型：** `string`

- **示例：** `url(https://w.wallhaven.cc/full/y8/wallhaven-y8622k.jpg)`

- **详细信息**

背景图片地址，等同于`background:url()` ,一定要用`url()`包裹起来

#### size

背景图片显示的格式

- **类型：** `string`

- **示例：** `cover`

- **详细信息**

背景图片显示的格式，等同于 `background-size:cover;`

#### repeat

背景图片是否允许重复平铺

- **类型：** `string`

- **示例：** `no-repeat`

- **详细信息**

背景图片是否允许重复平铺，等同于 `background-repeat:no-repeat;`

#### color

背景色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

背景色，等同于 `background-color:red;`,设置了背景色属性后,背景图将失效，两者只存其一

<hr/>

### font

字体设置对象

- **类型：** `object`

- **详细信息**

字体设置对象

> 属性 ↓

#### color

字体颜色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

字体颜色，等同于 `color:red;`

#### size

字体大小

- **类型：** `string`

- **示例：** `16px`

- **详细信息**

字体颜色，等同于 `font-size:16px;`

#### weight

字体加粗

- **类型：** `string`

- **示例：** `bold`

- **详细信息**

字体加粗，等同于 `font-weight:bold;`

#### family

字体文件

- **类型：** `string`

- **示例：** `xxx`

- **详细信息**

字体文件，等同于 `font-family:xxx;`

## previewBoxStyle

展示区样式对象

- **类型：** `object`

- **详细信息**

展示区样式对象

> 属性 ↓

### background

背景设置对象

- **类型：** `object`

- **详细信息**

背景设置对象

> 属性 ↓

#### url

背景图片地址

- **类型：** `string`

- **示例：** `url(https://w.wallhaven.cc/full/y8/wallhaven-y8622k.jpg)`

- **详细信息**

背景图片地址，等同于`background:url()` ,一定要用`url()`包裹起来

#### size

背景图片显示的格式

- **类型：** `string`

- **示例：** `cover`

- **详细信息**

背景图片显示的格式，等同于 `background-size:cover;`

#### repeat

背景图片是否允许重复平铺

- **类型：** `string`

- **示例：** `no-repeat`

- **详细信息**

背景图片是否允许重复平铺，等同于 `background-repeat:no-repeat;`

#### color

背景色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

背景色，等同于 `background-color:red;`,设置了背景色属性后,背景图将失效，两者只存其一

<hr/>

### font

字体设置对象

- **类型：** `object`

- **详细信息**

字体设置对象

> 属性 ↓

#### color

字体颜色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

字体颜色，等同于 `color:red;`

#### size

字体大小

- **类型：** `string`

- **示例：** `16px`

- **详细信息**

字体颜色，等同于 `font-size:16px;`

#### weight

字体加粗

- **类型：** `string`

- **示例：** `bold`

- **详细信息**

字体加粗，等同于 `font-weight:bold;`

#### family

字体文件

- **类型：** `string`

- **示例：** `xxx`

- **详细信息**

字体文件，等同于 `font-family:xxx;`

## headerBoxStyle

头部工具区样式对象

- **类型：** `object`

- **详细信息**

头部工具区样式对象

> 属性 ↓

### background

背景设置对象

- **类型：** `object`

- **详细信息**

背景设置对象

> 属性 ↓

#### url

背景图片地址

- **类型：** `string`

- **示例：** `url(https://w.wallhaven.cc/full/y8/wallhaven-y8622k.jpg)`

- **详细信息**

背景图片地址，等同于`background:url()` ,一定要用`url()`包裹起来

#### size

背景图片显示的格式

- **类型：** `string`

- **示例：** `cover`

- **详细信息**

背景图片显示的格式，等同于 `background-size:cover;`

#### repeat

背景图片是否允许重复平铺

- **类型：** `string`

- **示例：** `no-repeat`

- **详细信息**

背景图片是否允许重复平铺，等同于 `background-repeat:no-repeat;`

#### color

背景色

- **类型：** `string`

- **示例：** `red`

- **详细信息**

背景色，等同于 `background-color:red;`,设置了背景色属性后,背景图将失效，两者只存其一

## 配置示例

### 类型

```ts
interface font {
  color?: string
  size?: string
  weight?: string
  family?: string
}
interface border {
  color?: string
  style?: string
  width?: string
}
interface background {
  color?: string
  url?: string
  size?: string
  repeat?: string
}
interface Style {
  font?: font
  border?: border
  background?: background
}

interface placeholderStyle extends font {}

interface containerStyle extends Style {
  borderRadius?: string
  scrollBarColor?: string
}

interface editBoxStyle {
  background?: background
  font?: font
}
interface previewBoxStyle extends editBoxStyle {}
interface headerBoxStyle {
  background?: background
}

interface styles {
  containerStyle?: containerStyle
  editBoxStyle?: editBoxStyle
  previewBoxStyle?: previewBoxStyle
  placeholderStyle?: placeholderStyle
  headerBoxStyle?: headerBoxStyle
}
```

### 示例

```js
const style = {
  containerStyle: {
    borderRadius: '10px',
    scrollBarColor: 'purple',
    background: {
      url: 'url(https://w.wallhaven.cc/full/y8/wallhaven-y8622k.jpg)',
      size: 'cover',
      repeat: 'no-repeat',
      color: ''
    },
    font: {
      size: '14px',
      color: '#fff',
      weight: 'normal',
      family: 'oppo'
    },
    border: {
      width: '2px',
      style: 'solid',
      color: '#fff'
    }
  },
  placeholderStyle: {
    size: '16px',
    color: '#fff',
    weight: 'normal',
    family: 'oppo'
  },
  editBoxStyle: {
    font: {
      size: '16px',
      color: '',
      weight: 'normal',
      family: 'oppo'
    },
    background: {
      url: '',
      size: 'cover',
      repeat: 'no-repeat',
      color: ''
    }
  },
  previewBoxStyle: {
    font: {
      size: '14px',
      color: '',
      weight: 'normal',
      family: 'oppo'
    },
    background: {
      url: '',
      size: 'cover',
      repeat: 'no-repeat',
      color: ''
    }
  },
  headerBoxStyle: {
    background: {
      url: '',
      size: 'cover',
      repeat: 'no-repeat',
      color: ''
    }
  }
}
```
