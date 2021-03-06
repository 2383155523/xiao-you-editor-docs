const getBase = require('../../src/vitepress/config/baseConfig')
const path = require('path')
const nav = [
  {
    text: '文档',
    activeMatch: `^/(guide)/`,
    items: [
      { text: '指南', link: '/guide/introduction' },
      { text: '快速开始', link: '/guide/quick-start' }
    ]
  },
  {
    text: 'Demo',
    activeMatch: `^/demo/`,
    link: 'https://2383155523.github.io/xiao-you-editor-example/#/editor-custom'
  },
  {
    text: '小组件',
    activeMatch: `^/components/`,
    link: '/components/'
  },
  {
    text: '关于',
    activeMatch: `^/about/`,
    items: [
      { text: '常见问题', link: '/about/faq' },
      { text: '版本发布', link: '/about/releases' },
      { text: '作者', link: '/about/creator' }
    ]
  }
]
const sidebar = {
  '/guide/': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/guide/introduction' },
        {
          text: '快速开始',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: 'Props配置',
      items: [
        {
          text: 'v-model(通用)',
          link: '/guide/props/v-model'
        },
        {
          text: 'utils(通用)',
          link: '/guide/props/utils'
        },
        {
          text: 'styles(通用)',
          link: '/guide/props/styles'
        },
        {
          text: 'renderer(MD)',
          link: '/guide/props/renderer'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [{ text: '类型支持', link: '/guide/typescript/index' }]
    },
    {
      text: '进阶',
      items: [{ text: 'webComponent', link: '/guide/extras/webComponent' }]
    }
  ]
}
module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,
    vite: {
      ...base.vite,
      build: {
        minify: false
      },
      resolve: {
        alias: {
          '@vue/theme': path.join(__dirname, '../../src')
        }
      }
    },
    base: '/xiao-you-editor-docs/',
    lastUpdated: true,
    lang: 'zh-CN',
    title: 'XiaoYouEditor',
    description: 'XiaoYouEditor - 一款用于生成花里胡哨博客内容的编辑器',
    themeConfig: {
      footer: {
        license: {
          text: 'MIT License',
          link: 'https://opensource.org/licenses/MIT'
        },
        copyright: `Copyright © 2022-至今 微若蜉蝣`
      },
      logo: '',

      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/2383155523/xiao-you-editor'
        }
      ],
      nav,
      sidebar
    }
  }
})()
