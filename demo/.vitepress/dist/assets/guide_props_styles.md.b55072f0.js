import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.96b2cf3f.js";
const __pageData = '{"title":"Styles","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u793A\u4F8B","slug":"\u914D\u7F6E\u793A\u4F8B"}],"relativePath":"guide/props/styles.md","lastUpdated":1690597329485}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="styles" tabindex="-1">Styles <a class="header-anchor" href="#styles" aria-hidden="true">#</a></h1><p>\u6DF1\u6D45\u4E3B\u9898\u6837\u5F0F\u81EA\u5B9A\u4E49</p><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> <code>Object</code></p></li><li><p><strong>\u8BE6\u7EC6\u4FE1\u606F</strong></p></li></ul><p>\u81EA\u5B9A\u4E49\u6DF1\u6D45\u4E3B\u9898\u6837\u5F0F\u7EC6\u8282</p><h2 id="\u914D\u7F6E\u793A\u4F8B" tabindex="-1">\u914D\u7F6E\u793A\u4F8B <a class="header-anchor" href="#\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">Styles</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;xiao-you-editor&#39;</span></span>\n<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">defaultStyles</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Styles</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">light</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">//\u6D45\u8272\u4E3B\u9898\u6837\u5F0F\u7EC6\u8282\u8BBE\u7F6E</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">scrollBarColor</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;red&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u6EDA\u52A8\u6761\u989C\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">border</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">color</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;#dddddd&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u8FB9\u6846\u989C\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">style</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;solid&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u8FB9\u6846\u6837\u5F0F</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">width</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;2px&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u8FB9\u6846\u5BBD\u5EA6</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">},</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">background</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">url</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u80CC\u666F\u56FEurl\u5730\u5740</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">repeat</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u80CC\u666F\u56FE\u91CD\u590D\u89C4\u5219</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">size</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u80CC\u666F\u56FEsize\u5C55\u793A\u89C4\u5219</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">color</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;#fff&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u80CC\u666F\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">},</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">placeholder</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">color</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;#333&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u65E0\u5185\u5BB9\u63D0\u793A\u8BED\u5B57\u4F53\u989C\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">content</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;\u5199\u70B9\u4EC0\u4E48\u5427...&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u65E0\u5185\u5BB9\u63D0\u793A\u8BED</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">size</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;16px&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u65E0\u5185\u5BB9\u63D0\u793A\u8BED\u5B57\u4F53\u5927\u5C0F</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">weight</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u65E0\u5185\u5BB9\u63D0\u793A\u8BED\u5B57\u4F53\u7C97\u7EC6</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">},</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">font</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">color</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;333&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u7F16\u8F91\u5668\u5B57\u4F53\u989C\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">size</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;16px&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u7F16\u8F91\u5668\u5B57\u4F53\u5927\u5C0F</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">weight</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u7F16\u8F91\u5668\u5B57\u4F53\u7C97\u7EC6</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">dark</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">//\u6DF1\u8272\u4E3B\u9898\u6837\u5F0F\u7EC6\u8282\u8BBE\u7F6E</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">scrollBarColor</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;purple&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u6EDA\u52A8\u6761\u989C\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">border</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">color</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;#575050&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u8FB9\u6846\u989C\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">style</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;solid&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u8FB9\u6846\u6837\u5F0F</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">width</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;2px&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u8FB9\u6846\u5BBD\u5EA6</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">},</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">background</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">url</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u80CC\u666F\u56FEurl\u5730\u5740</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">repeat</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u80CC\u666F\u56FE\u91CD\u590D\u89C4\u5219</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">size</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u80CC\u666F\u56FEsize\u5C55\u793A\u89C4\u5219</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">color</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;#303133&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u80CC\u666F\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">},</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">placeholder</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">color</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;#dfdbdb&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u65E0\u5185\u5BB9\u63D0\u793A\u8BED\u5B57\u4F53\u989C\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">content</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;\u5199\u70B9\u4EC0\u4E48\u5427...&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u65E0\u5185\u5BB9\u63D0\u793A\u8BED</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">size</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;16px&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u65E0\u5185\u5BB9\u63D0\u793A\u8BED\u5B57\u4F53\u5927\u5C0F</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">weight</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u65E0\u5185\u5BB9\u63D0\u793A\u8BED\u5B57\u4F53\u7C97\u7EC6</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">},</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">font</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">color</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;#dfdbdb&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u7F16\u8F91\u5668\u5B57\u4F53\u989C\u8272</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">size</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;16px&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u7F16\u8F91\u5668\u5B57\u4F53\u5927\u5C0F</span></span>\n<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#E0A569;">weight</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//\u7F16\u8F91\u5668\u5B57\u4F53\u7C97\u7EC6</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>\n<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>\n<span class="line"><span style="color:#858585;">}</span></span>\n<span class="line"></span></code></pre></div>', 6);
const _hoisted_7 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_7);
}
var styles = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, styles as default };