import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.2f75be1e.js";
const __pageData = '{"title":"\u5FEB\u901F\u5F00\u59CB {#quick-start}","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C06\u63D2\u4EF6\u5B89\u88C5\u5230\u9879\u76EE","slug":"\u5C06\u63D2\u4EF6\u5B89\u88C5\u5230\u9879\u76EE"},{"level":2,"title":"\u5F15\u5165\u4F7F\u7528\u63D2\u4EF6","slug":"\u5F15\u5165\u4F7F\u7528\u63D2\u4EF6"}],"relativePath":"guide/quick-start.md","lastUpdated":1666450203639}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="quick-start" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h1><p>\u63A5\u4E0B\u6765\u5C31\u8DDF\u968F\u4F5C\u8005\u7684\u4ECB\u7ECD,\u5C06\u63D2\u4EF6\u8FD0\u884C\u5728\u60A8\u7684\u9879\u76EE\u4E2D\u5427\uFF01</p><h2 id="\u5C06\u63D2\u4EF6\u5B89\u88C5\u5230\u9879\u76EE" tabindex="-1">\u5C06\u63D2\u4EF6\u5B89\u88C5\u5230\u9879\u76EE <a class="header-anchor" href="#\u5C06\u63D2\u4EF6\u5B89\u88C5\u5230\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 npm</p><div class="language-bash"><pre><code><span class="line"><span style="color:#DBD7CA;">npm install xiao-you-editor</span></span>\n<span class="line"></span></code></pre></div><p>\u4F7F\u7528 yarn</p><div class="language-bash"><pre><code><span class="line"><span style="color:#DBD7CA;">yarn add xiao-you-editor</span></span>\n<span class="line"></span></code></pre></div><p>\u4F7F\u7528 pnpm</p><div class="language-bash"><pre><code><span class="line"><span style="color:#DBD7CA;">pnpm add xiao-you-editor</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u5F15\u5165\u4F7F\u7528\u63D2\u4EF6" tabindex="-1">\u5F15\u5165\u4F7F\u7528\u63D2\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u4F7F\u7528\u63D2\u4EF6" aria-hidden="true">#</a></h2><blockquote><p>\u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u5F15\u5165\u4F7F\u7528\u63D2\u4EF6</p></blockquote><div class="language-js"><pre><code><span class="line"><span style="color:#758575;">//main.ts</span></span>\n<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">createApp</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;vue&#39;</span></span>\n<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">App</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;./App.vue&#39;</span></span>\n<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">xiaoYouEditor</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;xiao-you-editor&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A1B567;">createApp</span><span style="color:#858585;">(</span><span style="color:#B8A965;">App</span><span style="color:#858585;">).</span><span style="color:#A1B567;">use</span><span style="color:#858585;">(</span><span style="color:#B8A965;">xiaoYouEditor</span><span style="color:#858585;">).</span><span style="color:#A1B567;">mount</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;#app&#39;</span><span style="color:#858585;">)</span></span>\n<span class="line"></span></code></pre></div><p>\u5F15\u5165\u4F7F\u7528\u5B8C\u6210\u540E \u60A8\u7684\u9879\u76EE\u4E2D\u5C31\u4F1A\u591A\u51FA\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6 <code>&lt;xy-editor&gt;&lt;/xy-editor&gt;</code>,\u60A8\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u7684\u4EFB\u610F\u5730\u65B9\u4F7F\u7528\u6B64\u7EC4\u4EF6\u4E14\u65E0\u9700\u5F15\u5165</p>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
var quickStart = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, quickStart as default };
