# xiaoYouEditor

# 快速开始

接下来就跟随作者的介绍,将插件运行在您的项目中吧！

## 下载插件

> 执行以下命令下载插件

<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;">npm i xiao-you-editor -S</span></span></code></pre></div>

## 引入安装插件

> 在 main.js | main.ts 引入安装插件

```js
//main.js | main.ts
import { createApp } from 'vue'
import App from './App.vue'
import xiaoYouEditor from 'xiao-you-editor'

createApp(App).use(xiaoYouEditor).mount('#app')
```

## 二次封装

> 在您项目里的 Components 文件夹中创建一个新的单文件组件,用来存放编辑器插件的二次封装

## Custom 版

```vue
<template>
  <div class="edit">
    <xy-editor-custom v-model="blogContent" :utils="utils" :styles="style" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const blogContent = ref('')
const utils = []

for (let i = 1; i <= 6; i++) {
  utils.push({
    template: `<h${i} style="color:red;">i am h${i}</h${i}>\n`,
    icon: 'https://cdn.icon-icons.com/icons2/1369/PNG/128/-title_90285.png',
    hooks: {
      beforeInsert(template) {
        console.log('插入前钩子', template)
      },
      inserted(template) {
        console.log('插入后钩子', template)
      }
    }
  })
}

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
      family: ''
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
    family: ''
  },
  editBoxStyle: {
    font: {
      size: '16px',
      color: '',
      weight: 'normal',
      family: ''
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
</script>

<style scoped>
.edit {
  width: 100%;
  height: 98vh;
  margin: 0 auto;
  overflow: hidden;
}
</style>
```

## Markdown 版

```vue
<template>
  <div class="edit">
    <xy-editor-md v-model="blogContent" :utils="utils" :styles="style" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const blogContent = ref('')
const utils = []
const createTitle = (count) => '#'.repeat(count)

for (let i = 1; i <= 6; i++) {
  utils.push({
    template: `${createTitle(i)} 我是标题${i}\n`,
    icon: 'https://cdn.icon-icons.com/icons2/1369/PNG/128/-title_90285.png',
    hooks: {
      beforeInsert(template: string) {
        console.log('插入前钩子', template)
      },
      inserted(template: string) {
        console.log('插入后钩子', template)
      }
    }
  })
}
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
</script>

<style scoped>
.edit {
  width: 100%;
  height: 98vh;
  margin: 0 auto;
  overflow: hidden;
}
</style>
```
