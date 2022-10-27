import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.2f75be1e.js";
const __pageData = '{"title":"\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 XiaoYouEditor?","slug":"\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-xiaoyoueditor"},{"level":2,"title":"\u5982\u4F55\u4F7F\u7528 XiaoYouEditor?","slug":"\u5982\u4F55\u4F7F\u7528-xiaoyoueditor"},{"level":2,"title":"Playground Online","slug":"playground-online"}],"relativePath":"guide/introduction.md","lastUpdated":1666592297804}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u4F7F\u7528\u672C\u63D2\u4EF6\u5EFA\u8BAE\u62E5\u6709\u7684\u77E5\u8BC6\u50A8\u5907</p><ul><li>\u56E0\u4E3A\u672C\u63D2\u4EF6\u662F\u57FA\u4E8E <a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3</a> \u6784\u5EFA \u6240\u4EE5\u5EFA\u8BAE\u60A8\u6700\u597D\u62E5\u6709 <a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3</a> \u7684\u4F7F\u7528\u7ECF\u9A8C\u3002</li></ul></div><h2 id="\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-xiaoyoueditor" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 XiaoYouEditor? <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-xiaoyoueditor" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u6709\u6253\u7B97\u81EA\u5DF1\u624B\u5199\u4E00\u4E2A\u82B1\u91CC\u80E1\u54E8\u7684\u535A\u5BA2\u7CFB\u7EDF\u7684\u6253\u7B97,\u90A3\u4E48\u60A8\u9996\u5148\u9700\u8981\u8003\u8651\u5230\u7684\u4E00\u4E2A\u95EE\u9898\u5C31\u662F</p><p>\u201C\u5982\u4F55\u5728\u81EA\u5DF1\u7684\u535A\u5BA2\u540E\u53F0\u751F\u6210\u597D\u770B\u7684\u535A\u5BA2\u5185\u5BB9?\u201D</p><p>\u5728\u6B64\u4E4B\u524D\uFF0C\u76F8\u4FE1\u5927\u591A\u6570\u4EBA\u7684\u9009\u62E9\u4F1A\u662F \u5BCC\u6587\u672C\u7F16\u8F91\u5668 \u6216\u8005 Markdown \u7F16\u8F91\u5668,\u5BF9\u4E8E\u751F\u6210\u4E00\u4E9B\u7B80\u5355\u6734\u7D20\u7684\u5185\u5BB9\u800C\u8A00,\u5B83\u4EEC\u90FD\u662F\u5F88\u597D\u7684\u9009\u62E9\u3002</p><p>\u4F46\u968F\u7740\u4E2A\u4EBA\u5BF9\u535A\u5BA2\u7F8E\u89C2\u7A0B\u5EA6\u7684\u8981\u6C42\u63D0\u9AD8,\u5B83\u4EEC\u6216\u8BB8\u5F88\u96BE\u6EE1\u8DB3\u535A\u53CB\u4EEC\u7684\u9700\u6C42,\u81F3\u5C11\u5BF9\u4E8E\u4F5C\u8005\u6765\u8BF4\u8FD9\u662F\u4FC3\u4F7F\u6211\u5199\u8FD9\u4E2A\u63D2\u4EF6\u7684\u539F\u56E0</p><p>\u73B0\u5982\u4ECA,\u60A8\u6709\u4E86\u53E6\u4E00\u4E2A\u66F4\u597D\u7684\u9009\u62E9\u2014\u2014<b style="color:#42b883;">xiaoYouEditor</b></p><h2 id="\u5982\u4F55\u4F7F\u7528-xiaoyoueditor" tabindex="-1">\u5982\u4F55\u4F7F\u7528 XiaoYouEditor? <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528-xiaoyoueditor" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u53EA\u60F3\u6E32\u67D3\u4E00\u4E9B\u6587\u5B57\u7684\u8BDD\u90A3\u4E48\u5176\u5B9E\u8FD9\u4E2A\u63D2\u4EF6\u5C31\u662F\u5F00\u7BB1\u5373\u7528\u7684\u3002</p><p>\u5982\u679C\u4F60\u60F3\u6E32\u67D3\u4E00\u4E9B\u82B1\u91CC\u80E1\u54E8\u7684\u5185\u5BB9,\u90A3\u5C31\u4E0D\u5F97\u4E0D\u501F\u52A9 Vue \u7EC4\u4EF6\u6765\u5B9E\u73B0\u3002</p><p>\u5B9A\u4E49\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u6E32\u67D3\u7EC4\u4EF6\u5F88\u7B80\u5355,\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u7136\u540E\u6CE8\u518C\u4E3A\u5168\u5C40\u7EC4\u4EF6\u5373\u53EF,\u770B\u5427\u662F\u4E0D\u662F\u975E\u5E38\u7684\u7B80\u5355\u6613\u4E0A\u624B\u3002</p><p>\u6B64\u65F6\u80AF\u5B9A\u6709\u4EBA\u4F1A\u8BF4</p><p>\u201D\u4E0D\u5C31\u662F\u628A\u4E00\u5806\u5185\u5BB9\u5168\u90E8\u96C6\u4E2D\u5728\u4E00\u4E2A\u7EC4\u4EF6\u91CC\u4E86,\u603B\u4E0D\u80FD\u8BA9\u7EC4\u4EF6\u4E00\u76F4\u663E\u793A\u9759\u6001\u7684\u6587\u5B57\u5185\u5BB9\u5427?\u201C</p><p>\u4F5C\u8005\u7B54</p><p>\u201C\u53EF\u66FE\u542C\u95FB props \u4F20\u53C2?\u6B63\u597D\u7F16\u8F91\u5668\u4E5F\u652F\u6301\u4F7F\u7528 props \u52A8\u6001\u4F20\u5165\u53C2\u6570,\u6839\u636E\u4F20\u5165\u7684 props \u60A8\u53EF\u4EE5\u52A8\u6001\u63A7\u5236\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E32\u67D3\u5185\u5BB9!\u201D</p><p>\u6B64\u65F6\u4E00\u4F4D\u8DEF\u8FC7\u7684\u61D2\u764C\u60A3\u8005\u8BF4</p><p>\u201C\u8FD8\u8981\u81EA\u5DF1\u5199\u7EC4\u4EF6\u6E32\u67D3?\u7B97\u4E86\u7B97\u4E86\u201D</p><p>\u4F5C\u8005\u7B54</p><p>\u201C\u5927\u54E5\u5148\u522B \u4E14\u542C\u5C0F\u5F1F\u4E00\u8A00\u3002\u201D</p><p>\u201C\u5C0F\u5F1F\u8D34\u5FC3\u7684\u4E3A\u5404\u4F4D\u5927\u54E5\u63D0\u4F9B\u4E86\u4E00\u5806\u73B0\u6210\u7684\u5B9E\u7528\u529F\u80FD\u7EC4\u4EF6\u201D</p><p>\u8FD9\u4E9B<a href="https://fuyouplus.cn" target="_blank" rel="noopener noreferrer">\u5C0F\u7EC4\u4EF6</a>\u53EF\u90FD\u662F\u4F5C\u8005\u591A\u5E74\u79EF\u6512\u7684\u7CBE\u534E\u54DF ~\u3002~</p><p>\u8BF4\u5230\u8FD9\u513F \u60A8\u662F\u4E0D\u662F\u4EE5\u4E3A\u8FD9\u5C31\u662F\u672C\u63D2\u4EF6\u9A9A\u64CD\u4F5C\u7684\u6781\u9650\u4E86\u5417\uFF1F</p><p>\u8FD8\u771F\u662F \u770B\u4EBA\u771F\u51C6</p><p>\u5478\u5478\u5478</p><p>\u63A5\u4E0B\u6765\u9686\u91CD\u6709\u8BF7\u672C\u63D2\u4EF6 \u6700\u5E05\u7684 \u6700\u9A9A\u7684 \u6700\u5177\u521B\u9020\u6027\u7684 \u7279\u6027\u2014\u2014Custom Parse(\u81EA\u5B9A\u4E49\u89E3\u6790\u5668)</p><p>\u5728\u6B64\u7279\u6027\u7684\u52A0\u6301\u4E0B \u60A8\u751A\u81F3\u53EF\u4EE5\u81EA\u5DF1\u521B\u5EFA\u4E00\u4E2A\u81EA\u5DF1\u4E66\u5199\u5185\u5BB9\u7684\u8BED\u6CD5</p><p>\u6709\u4EBA\u8BF4</p><p>\u201C\u6211\u4E60\u60EF\u4E86 Markdown \u7684\u4E66\u5199\u8BED\u6CD5\u201D</p><p>\u4F5C\u8005\u7B54</p><p>\u201C\u6CA1\u5173\u7CFB \u53EA\u8981\u4F60\u8DB3\u591F\u5F3A \u4F60\u5C31\u53EF\u4EE5\u5229\u7528\u81EA\u5B9A\u4E49\u89E3\u6790\u5668\u53BB\u5B9E\u73B0 Markdown \u7684\u4E66\u5199\u8BED\u6CD5\u201D</p><p>\u5982\u679C\u60F3\u4E86\u89E3\u8BE5\u7279\u6027\u66F4\u591A\u7684\u7EC6\u8282\u8BF7\u79FB\u6B65\u81F3\u8FDB\u9636\u7BC7</p><h2 id="playground-online" tabindex="-1">Playground Online <a class="header-anchor" href="#playground-online" aria-hidden="true">#</a></h2><p><a href="https://fuyouplus.gitee.io/xiao-you-editor/#/index" target="_blank" rel="noopener noreferrer">\u70B9\u6211\u5728\u7EBF\u4F53\u9A8C</a></p>', 34);
const _hoisted_35 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_35);
}
var introduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, introduction as default };