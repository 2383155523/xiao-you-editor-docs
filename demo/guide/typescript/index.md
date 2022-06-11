# 类型支持

## 示例

```vue
<script setup>
import type { styles, utilItem, hooks } from 'xiao-you-editor'
</script>
```

## 全部类型

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

interface hooks {
  beforeInsert?: (template: string) => string
  inserted?: (template: string) => void
}

interface styles {
  containerStyle?: containerStyle
  editBoxStyle?: editBoxStyle
  previewBoxStyle?: previewBoxStyle
  placeholderStyle?: placeholderStyle
  headerBoxStyle?: headerBoxStyle
}
interface utilItem {
  template: string
  icon: string
  hooks?: hooks
}
```
