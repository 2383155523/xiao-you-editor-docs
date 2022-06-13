# renderer

## code

代码块

- **类型：**

```ts
function code(
  code: string,
  language: string | undefined,
  isEscaped: boolean
): string {
  return `<my-code>${code}</my-code>`
}
```

## blockquote

引用

- **类型：**

```ts
function blockquote(quote: string): string {
  return ` <div class="blockquote">${quote}</div>`
}
```

## html

HTML 标签

- **类型：**

```ts
function html(html: string): string {}
```

## heading

标题

- **类型：**

```ts
function heading(
  text: string,
  level: 1 | 2 | 3 | 4 | 5 | 6,
  raw: string,
  slugger: any
): string {
  return `<my-h${level}>${text}</h${level}>`
}
```

## hr

分割线

- **类型：**

```ts
function hr(): string {
  return `<my-hr></my-hr>`
}
```

## list

列表

- **类型：**

```ts
function list(body: string, ordered: boolean, start: number): string {}
```

## listitem

列表项

- **类型：**

```ts
function listitem(text: string, task: boolean, checked: boolean): string {}
```

## checkbox

checkbox

- **类型：**

```ts
function checkbox(checked: boolean): string {}
```

## paragraph

paragraph

- **类型：**

```ts
function paragraph(text: string): string {}
```

## table

表格

- **类型：**

```ts
function table(header: string, body: string): string {}
```

## tablerow

tablerow

- **类型：**

```ts
function tablerow(content: string): string {}
```

## tablecell

tablecell

- **类型：**

```ts
function tablecell(
  content: string,
  flags: {
    header: boolean
    align: 'center' | 'left' | 'right' | null
  }
): string {}
```

## strong

粗体

- **类型：**

```ts
function strong(text: string): string {
  return `<my-strong>${text}</my-strong>`
}
```

## em

em

- **类型：**

```ts
function em(text: string): string {
  return `<my-em>${text}</my-em>`
}
```

## codespan

codespan

- **类型：**

```ts
function codespan(code: string): string {
  return `<my-codespan>${text}</my-codespan>`
}
```

## br

br

- **类型：**

```ts
function br(): string {
  return `<my-br></my-br>`
}
```

## del

删除线

- **类型：**

```ts
function del(text: string): string {
  return `<my-del></my-del>`
}
```

## link

超链接

- **类型：**

```ts
function link(href: string | null, title: string | null, text: string): string {
  return `<my-link href="${href}" title="${title}">${text}</my-link>`
}
```

## image

图片

- **类型：**

```ts
function image(
  href: string | null,
  title: string | null,
  text: string
): string {
  return `<my-image href="${href}" title="${title}">${text}</my-image>`
}
```

## text

text

- **类型：**

```ts
function text(text: string): string {
  return `<my-text>${text}</my-text>`
}
```
