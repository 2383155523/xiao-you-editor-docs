# 类型支持

## 示例

```vue
<script setup>
import type { styles, utilItem, renderer } from 'xiao-you-editor'
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

interface styles {
  containerStyle?: containerStyle
  editBoxStyle?: editBoxStyle
  previewBoxStyle?: previewBoxStyle
  placeholderStyle?: placeholderStyle
  headerBoxStyle?: headerBoxStyle
}
interface hooks {
  beforeInsert?: (template: string) => string
  inserted?: (template: string) => void
}
interface utilItem {
  template: string
  icon: string
  hooks?: hooks
}
//only markdown
interface renderer {
  code?: (
    code: string,
    language: string | undefined,
    isEscaped: boolean
  ) => string
  blockquote?: (quote: string) => string
  html?: (html: string) => string
  heading?: (
    text: string,
    level: 1 | 2 | 3 | 4 | 5 | 6,
    raw: string,
    slugger: any
  ) => string
  hr?: () => string
  list?: (body: string, ordered: boolean, start: number) => string
  listitem?: (text: string, task: boolean, checked: boolean) => string
  checkbox?: (checked: boolean) => string
  paragraph?: (text: string) => string
  table?: (header: string, body: string) => string
  tablerow?: (content: string) => string
  tablecell?: (
    content: string,
    flags: {
      header: boolean
      align: 'center' | 'left' | 'right' | null
    }
  ) => string
  strong?: (text: string) => string
  em?: (text: string) => string
  codespan?: (code: string) => string
  br?: () => string
  del?: (text: string) => string
  link?: (href: string | null, title: string | null, text: string) => string
  image?: (href: string | null, title: string | null, text: string) => string
  text?: (text: string) => string
}
```
