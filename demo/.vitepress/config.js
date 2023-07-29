const getBase = require("../../src/vitepress/config/baseConfig")
const path = require("path")
const { resolve } = require("path")
const nav = [
  {
    text: "文档",
    activeMatch: `^/(guide)/`,
    items: [
      {
        text: "开始",
        items: [
          { text: "简介", link: "/guide/introduction" },
          {
            text: "快速开始",
            link: "/guide/quick-start",
          },
        ],
      },
      {
        text: "Props配置",
        items: [
          {
            text: "v-model",
            link: "/guide/props/v-model",
          },
          {
            text: "theme",
            link: "/guide/props/theme",
          },
          {
            text: "borderRadius",
            link: "/guide/props/borderRadius",
          },
          {
            text: "fontFamily",
            link: "/guide/props/fontFamily",
          },
          {
            text: "transitionMode",
            link: "/guide/props/transitionMode",
          },
          {
            text: "styles",
            link: "/guide/props/styles",
          },
          {
            text: "templates",
            link: "/guide/props/templates",
          },
          {
            text: "customParser",
            link: "/guide/props/customParser",
          },
        ],
      },
      {
        text: "ts",
        items: [{ text: "类型支持", link: "/guide/typescript/index" }],
      },
      {
        text: "进阶",
        items: [{ text: "customParse", link: "/guide/extras/customParse" }],
      },
    ],
  },
  {
    text: "小组件",
    activeMatch: `^/(customComponents)/`,
    items: [
      { text: "前言", link: "/customComponents/intro" },
      {
        text: "音乐组件",
        link: "/customComponents/music",
      },
    ],
  },
  {
    text: "关于",
    activeMatch: `^/about/`,
    items: [
      // { text: "版本发布", link: "/about/releases" },
      { text: "作者", link: "/about/creator" },
    ],
  },
  {
    text: "Playground",
    activeMatch: `^/Playground/`,
    link: "https://xiao-you-editor.netlify.app",
  },
]
const sidebar = {
  "/guide/": [
    {
      text: "开始",
      items: [
        { text: "简介", link: "/guide/introduction" },
        {
          text: "快速开始",
          link: "/guide/quick-start",
        },
      ],
    },
    {
      text: "Props配置",
      items: [
        {
          text: "v-model",
          link: "/guide/props/v-model",
        },
        {
          text: "theme",
          link: "/guide/props/theme",
        },
        {
          text: "borderRadius",
          link: "/guide/props/borderRadius",
        },
        {
          text: "fontFamily",
          link: "/guide/props/fontFamily",
        },
        {
          text: "transitionMode",
          link: "/guide/props/transitionMode",
        },
        {
          text: "styles",
          link: "/guide/props/styles",
        },
        {
          text: "templates",
          link: "/guide/props/templates",
        },
        {
          text: "customParser",
          link: "/guide/props/customParser",
        },
      ],
    },
    {
      text: "TypeScript",
      items: [{ text: "类型支持", link: "/guide/typescript/index" }],
    },
    {
      text: "进阶",
      items: [{ text: "customParse", link: "/guide/extras/customParse" }],
    },
  ],
  "/customComponents/": [
    {
      text: "CustomComponents",
      items: [
        { text: "前言", link: "/customComponents/intro" },
        {
          text: "音乐组件",
          link: "/customComponents/music",
        },
      ],
    },
  ],
}
module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,
    vite: {
      ...base.vite,
      build: {
        minify: false,
      },
      resolve: {
        alias: {
          "@vue/theme": path.join(__dirname, "../../src"),
        },
      },
    },
    // base: "/xiao-you-editor-docs/",
    lastUpdated: true,
    lang: "zh-CN",
    title: "XiaoYouEditor",
    description: "XiaoYouEditor - 一款用于生成花里胡哨博客内容的编辑器",
    themeConfig: {
      lastUpdatedText: "Updated Date",
      footer: {
        license: {
          text: "MIT License",
          link: "https://opensource.org/licenses/MIT",
        },
        copyright: `Copyright © 2022-至今 微若蜉蝣`,
      },
      logo: {
        src: "https://fuyouplus.gitee.io/xiao-you-editor/assets/logo.21907c32.png",
      },
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/2383155523/xiao-you-editor",
        },
        {
          icon: "gitee",
          link: "https://gitee.com/fuyouplus/xiao-you-editor",
        },
      ],
      nav,
      sidebar,
    },
  }
})()
