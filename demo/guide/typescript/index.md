# 类型支持

## 引入类型

```vue
<script setup>
import type {
  Templates,
  Styles,
  Theme,
  BorderRadius,
  TransitionMode,
  FontFamily,
  CustomParser
} from 'xiao-you-editor'
</script>
```

## 全部类型

```ts
interface Font {
  color?: string
  size?: string
  weight?: string
}
interface Border {
  color?: string
  style?: string
  width?: string
}
interface Background {
  url?: string
  repeat?: string
  size?: string
  color?: string
}
interface Placeholder extends Font {
  content?: string
}

interface Light {
  border: Border
  placeholder: Placeholder
  background: Background
  font: Font
  scrollBarColor?: string
}
interface Dark {
  border: Border
  placeholder: Placeholder
  background: Background
  font: Font
  scrollBarColor?: string
}
export interface Styles {
  light: Light
  dark: Dark
}
export type Theme = 'light' | 'dark'
export type BorderRadius = string
export type Templates = Array<{
  template: string
  light: { icon: string }
  dark: { icon: string }
}>
export type TransitionMode = string
export type FontFamily = string
export type CustomParser = Array<(template: string) => string>
```
