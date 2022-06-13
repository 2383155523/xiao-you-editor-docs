var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const scriptRel = "modulepreload";
const seen = {};
const base = "/xiao-you-editor-docs/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link2 = document.createElement("link");
    link2.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link2.as = "script";
      link2.crossOrigin = "";
    }
    link2.href = dep;
    document.head.appendChild(link2);
    if (isCss) {
      return new Promise((res, rej) => {
        link2.addEventListener("load", res);
        link2.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index2) {
  if (!isArray(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index2 + 1 : index2)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen2, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen2, parentJob);
  }
}
function flushPostFlushCbs(seen2) {
  flushPreFlushCbs();
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  flushPreFlushCbs(seen2);
  queue.sort((a, b) => getId(a) - getId(b));
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen2);
    }
  }
}
function emit$1(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => a.trim());
    }
    if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  cache.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false)
        ;
      result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit
      } : { attrs, slots, emit }) : render2(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root.transition = vnode.transition;
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else
      ;
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(effect, null, { flush: "post" });
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => queuePreFlushCb(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, seen2);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen2);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen2);
    }
  }
  return value;
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        for (const c of children) {
          if (c.type !== Comment) {
            child = c;
            break;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    timeout,
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(err, instance, 13, !errorComponent);
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(`Async component timed out after ${timeout}ms.`);
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, { vnode: { ref: ref2, props, children, shapeFlag }, parent }) {
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (isFunction(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache && cache[index2];
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index2] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => i.props,
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
  $refs: (i) => i.refs,
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: (i) => instanceWatch.bind(i)
});
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base2 = instance.type;
  const { mixins, extends: extendsOptions } = base2;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base2, optionMergeStrategies);
  }
  cache.set(base2, resolved);
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const { mt: mountComponent, p: patch, o: { patchProp: patchProp2, createText, nextSibling, parentNode, remove: remove2, insert, createComment } } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
    if (hasMismatch && true) {
      console.error(`Hydration completed but contains mismatches.`);
    }
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    const { type, ref: ref2, shapeFlag, patchFlag } = vnode;
    const domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (domType !== 1 && domType !== 3) {
          nextNode = onMismatch();
        } else {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return nextNode;
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
        break;
      default:
        if (shapeFlag & 1) {
          if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
            nextNode = nextSibling(nextNode);
          }
          if (isAsyncWrapper(vnode)) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else
          ;
    }
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs } = vnode;
    const forcePatchValue = type === "input" && dirs || type === "option";
    if (forcePatchValue || patchFlag !== -1) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
          for (const key in props) {
            if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
              patchProp2(el, key, null, props[key], false, void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(el, "onClick", null, props.onClick, false, void 0, parentComponent);
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
      if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        while (next) {
          hasMismatch = true;
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
          el.textContent = vnode.children;
        }
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;
        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      hasMismatch = true;
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    hasMismatch = true;
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAsyncAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };
  const locateClosingAsyncAnchor = (node) => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === "[")
          match++;
        if (node.data === "]") {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  return [hydrate, hydrateNode];
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
    if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
      el = vnode.el = hostCloneNode(vnode.el);
    } else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope);
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style: style2 } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style2)) {
      if (isProxy(style2) && !isArray(style2)) {
        style2 = extend({}, style2);
      }
      props.style = normalizeStyle(style2);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(Fragment, null, child.slice());
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      track(instance, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version = "3.2.37";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style2 = el.style;
  const isCssString = isString(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style2, key, next[key]);
    }
    if (prev && !isString(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style2, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style2.display;
    if (isCssString) {
      if (prev !== next) {
        style2.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style2.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style2, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style2, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style2.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style2, name);
      if (importantRE.test(val)) {
        style2.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style2[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style2, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style2) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style2) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(key);
}
const [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
  let _getNow2 = Date.now;
  let skipTimestampCheck2 = false;
  if (typeof window !== "undefined") {
    if (Date.now() > document.createEvent("Event").timeStamp) {
      _getNow2 = performance.now.bind(performance);
    }
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }
  return [_getNow2, skipTimestampCheck2];
})();
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    const timeStamp = e.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };
  return app;
};
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
var serializedSiteData = '{"lang":"zh-CN","title":"XiaoYouEditor","description":"XiaoYouEditor - \u4E00\u6B3E\u7528\u4E8E\u751F\u6210\u82B1\u91CC\u80E1\u54E8\u535A\u5BA2\u5185\u5BB9\u7684\u7F16\u8F91\u5668","base":"/xiao-you-editor-docs/","head":[],"themeConfig":{"footer":{"license":{"text":"MIT License","link":"https://opensource.org/licenses/MIT"},"copyright":"Copyright \xA9 2022-\u81F3\u4ECA \u5FAE\u82E5\u8709\u8763"},"logo":"","socialLinks":[{"icon":"github","link":"https://github.com/2383155523/xiao-you-editor"}],"nav":[{"text":"\u6587\u6863","activeMatch":"^/(guide)/","items":[{"text":"\u6307\u5357","link":"/guide/introduction"},{"text":"\u5FEB\u901F\u5F00\u59CB","link":"/guide/quick-start"}]},{"text":"Demo","activeMatch":"^/demo/","link":"https://2383155523.github.io/xiao-you-editor-example/#/editor-custom"},{"text":"\u5C0F\u7EC4\u4EF6","activeMatch":"^/components/","link":"/components/"},{"text":"\u5173\u4E8E","activeMatch":"^/about/","items":[{"text":"\u5E38\u89C1\u95EE\u9898","link":"/about/faq"},{"text":"\u7248\u672C\u53D1\u5E03","link":"/about/releases"},{"text":"\u4F5C\u8005","link":"/about/creator"}]}],"sidebar":{"/guide/":[{"text":"\u5F00\u59CB","items":[{"text":"\u7B80\u4ECB","link":"/guide/introduction"},{"text":"\u5FEB\u901F\u5F00\u59CB","link":"/guide/quick-start"}]},{"text":"Props\u914D\u7F6E","items":[{"text":"v-model(\u901A\u7528)","link":"/guide/props/v-model"},{"text":"utils(\u901A\u7528)","link":"/guide/props/utils"},{"text":"styles(\u901A\u7528)","link":"/guide/props/styles"},{"text":"renderer(MD)","link":"/guide/props/renderer"}]},{"text":"TypeScript","items":[{"text":"\u7C7B\u578B\u652F\u6301","link":"/guide/typescript/index"}]},{"text":"\u8FDB\u9636","items":[{"text":"webComponent","link":"/guide/extras/webComponent"}]}]}},"locales":{},"langs":{},"scrollOffset":90}';
const EXTERNAL_URL_RE = /^https?:/i;
const inBrowser$1 = typeof window !== "undefined";
function findMatchRoot(route, roots) {
  roots.sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    } else {
      return b.length - a.length;
    }
  });
  for (const r of roots) {
    if (route.startsWith(r))
      return r;
  }
}
function resolveLocales(locales, route) {
  const localeRoot = findMatchRoot(route, Object.keys(locales));
  return localeRoot ? locales[localeRoot] : void 0;
}
function createLangDictionary(siteData) {
  const { locales } = siteData.themeConfig || {};
  const siteLocales = siteData.locales;
  return locales && siteLocales ? Object.keys(locales).reduce((langs, path) => {
    langs[path] = {
      label: locales[path].label,
      lang: siteLocales[path].lang
    };
    return langs;
  }, {}) : {};
}
function resolveSiteDataByRoute(siteData, route) {
  route = cleanRoute(siteData, route);
  const localeData = resolveLocales(siteData.locales || {}, route);
  const localeThemeConfig = resolveLocales(siteData.themeConfig.locales || {}, route);
  return Object.assign({}, siteData, localeData, {
    themeConfig: Object.assign({}, siteData.themeConfig, localeThemeConfig, {
      locales: {}
    }),
    lang: (localeData || siteData).lang,
    locales: {},
    langs: createLangDictionary(siteData)
  });
}
function cleanRoute(siteData, route) {
  if (!inBrowser$1) {
    return route;
  }
  const base2 = siteData.base;
  const baseWithoutSuffix = base2.endsWith("/") ? base2.slice(0, -1) : base2;
  return route.slice(baseWithoutSuffix.length);
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(parse(serializedSiteData));
function parse(data) {
  const parsed = JSON.parse(data);
  return parsed;
}
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.path));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    lang: computed(() => site.value.lang),
    localePath: computed(() => {
      const { langs, lang } = site.value;
      const path = Object.keys(langs).find((langPath) => langs[langPath].lang === lang);
      return withBase(path || "/");
    }),
    title: computed(() => {
      return route.data.title ? route.data.title + " | " + site.value.title : site.value.title;
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    })
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  if (pagePath.endsWith("/")) {
    pagePath += "index";
  }
  {
    if (inBrowser$1) {
      const base2 = "/xiao-you-editor-docs/";
      pagePath = pagePath.slice(base2.length).replace(/\//g, "_") + ".md";
      const pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${pagePath.slice(1).replace(/\//g, "_")}.md.js`;
    }
  }
  return pagePath;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const notFoundPageData = {
  relativePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: {},
  lastUpdated: 0
};
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  function go(href = inBrowser$1 ? location.href : "/") {
    const url = new URL(href, fakeHost);
    if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
      url.pathname += ".html";
      href = url.pathname + url.search + url.hash;
    }
    if (inBrowser$1) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    return loadPage(href);
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = loadPageModule(pendingPath);
      if ("then" in page && typeof page.then === "function") {
        page = await page;
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = pendingPath;
        route.component = markRaw(comp);
        route.data = true ? markRaw(JSON.parse(__pageData)) : readonly(JSON.parse(__pageData));
        if (inBrowser$1) {
          nextTick(() => {
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!err.message.match(/fetch/)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = pendingPath;
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      const link2 = e.target.closest("a");
      if (link2) {
        const { href, protocol, hostname, pathname, hash, target } = link2;
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && protocol === currentUrl.protocol && hostname === currentUrl.hostname && !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return {
    route,
    go
  };
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let offset = siteDataRef.value.scrollOffset;
    if (typeof offset === "string") {
      offset = document.querySelector(offset).getBoundingClientRect().bottom + 24;
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    const newEls = [];
    const commonLength = Math.min(managedHeadTags.length, newTags.length);
    for (let i = 0; i < commonLength; i++) {
      let el = managedHeadTags[i];
      const [tag, attrs, innerHTML = ""] = newTags[i];
      if (el.tagName.toLocaleLowerCase() === tag) {
        for (const key in attrs) {
          if (el.getAttribute(key) !== attrs[key]) {
            el.setAttribute(key, attrs[key]);
          }
        }
        for (let i2 = 0; i2 < el.attributes.length; i2++) {
          const name = el.attributes[i2].name;
          if (!(name in attrs)) {
            el.removeAttribute(name);
          }
        }
        if (el.innerHTML !== innerHTML) {
          el.innerHTML = innerHTML;
        }
      } else {
        document.head.removeChild(el);
        el = createHeadElement(newTags[i]);
        document.head.append(el);
      }
      newEls.push(el);
    }
    managedHeadTags.slice(commonLength).forEach((el) => document.head.removeChild(el));
    newTags.slice(commonLength).forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      newEls.push(el);
    });
    managedHeadTags = newEls;
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageTitle = pageData && pageData.title;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head;
    document.title = (pageTitle ? pageTitle + ` | ` : ``) + siteData.title;
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData.description);
    updateHeadTags([
      ...[],
      ...frontmatterHead ? filterOutHeadDescription(frontmatterHead) : []
    ]);
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$_ = {};
const _hoisted_1$N = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$D = /* @__PURE__ */ createBaseVNode("path", { d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z" }, null, -1);
const _hoisted_3$t = /* @__PURE__ */ createBaseVNode("path", { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" }, null, -1);
const _hoisted_4$b = /* @__PURE__ */ createBaseVNode("path", { d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z" }, null, -1);
const _hoisted_5$8 = /* @__PURE__ */ createBaseVNode("path", { d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z" }, null, -1);
const _hoisted_6$4 = [
  _hoisted_2$D,
  _hoisted_3$t,
  _hoisted_4$b,
  _hoisted_5$8
];
function _sfc_render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$N, _hoisted_6$4);
}
var VTIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$i]]);
const _sfc_main$Z = {};
const _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$C = /* @__PURE__ */ createBaseVNode("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" }, null, -1);
const _hoisted_3$s = [
  _hoisted_2$C
];
function _sfc_render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_3$s);
}
var VTIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$h]]);
const _sfc_main$Y = {};
const _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$B = /* @__PURE__ */ createBaseVNode("path", { d: "M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z" }, null, -1);
const _hoisted_3$r = [
  _hoisted_2$B
];
function _sfc_render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_3$r);
}
var VTIconChevronLeft = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$g]]);
const _sfc_main$X = {};
const _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$A = /* @__PURE__ */ createBaseVNode("path", { d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z" }, null, -1);
const _hoisted_3$q = [
  _hoisted_2$A
];
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_3$q);
}
var VTIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$f]]);
const _sfc_main$W = {};
const _hoisted_1$J = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$z = /* @__PURE__ */ createBaseVNode("path", { d: "M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" }, null, -1);
const _hoisted_3$p = [
  _hoisted_2$z
];
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_3$p);
}
var VTIconDiscord = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$e]]);
const _sfc_main$V = {};
const _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px"
};
const _hoisted_2$y = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1);
const _hoisted_3$o = /* @__PURE__ */ createBaseVNode("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }, null, -1);
const _hoisted_4$a = [
  _hoisted_2$y,
  _hoisted_3$o
];
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_4$a);
}
var VTIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$d]]);
const _sfc_main$U = {};
const _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$x = /* @__PURE__ */ createBaseVNode("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }, null, -1);
const _hoisted_3$n = [
  _hoisted_2$x
];
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_3$n);
}
var VTIconFacebook = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$c]]);
const _sfc_main$T = {};
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$w = /* @__PURE__ */ createBaseVNode("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, null, -1);
const _hoisted_3$m = [
  _hoisted_2$w
];
function _sfc_render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_3$m);
}
var VTIconGitHub = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$b]]);
const _sfc_main$S = {};
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$v = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$l = /* @__PURE__ */ createBaseVNode("path", {
  d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
  class: "css-c4d79v"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_2$v,
  _hoisted_3$l
];
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, _hoisted_4$9);
}
var VTIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$a]]);
const _sfc_main$R = {};
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$u = /* @__PURE__ */ createBaseVNode("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }, null, -1);
const _hoisted_3$k = [
  _hoisted_2$u
];
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_3$k);
}
var VTIconLinkedIn = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$9]]);
const _sfc_main$Q = {};
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$t = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_3$j = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "19",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_4$8 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "5",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_5$7 = [
  _hoisted_2$t,
  _hoisted_3$j,
  _hoisted_4$8
];
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_5$7);
}
var VTIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$8]]);
const _sfc_main$P = {};
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$s = /* @__PURE__ */ createBaseVNode("path", { d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z" }, null, -1);
const _hoisted_3$i = [
  _hoisted_2$s
];
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, _hoisted_3$i);
}
var VTIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$7]]);
const _sfc_main$O = {};
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$r = /* @__PURE__ */ createBaseVNode("path", { d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z" }, null, -1);
const _hoisted_3$h = [
  _hoisted_2$r
];
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_3$h);
}
var VTIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$6]]);
const _sfc_main$N = {};
const _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$q = /* @__PURE__ */ createBaseVNode("path", { d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" }, null, -1);
const _hoisted_3$g = [
  _hoisted_2$q
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_3$g);
}
var VTIconSlack = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$5]]);
const _sfc_main$M = {};
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$p = /* @__PURE__ */ createStaticVNode('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9);
const _hoisted_11 = [
  _hoisted_2$p
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_11);
}
var VTIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$4]]);
const _sfc_main$L = {};
const _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$o = /* @__PURE__ */ createBaseVNode("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }, null, -1);
const _hoisted_3$f = [
  _hoisted_2$o
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_3$f);
}
var VTIconTwitter = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$3]]);
const _sfc_main$K = {};
const _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_2$n = /* @__PURE__ */ createBaseVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$n
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$e);
}
var VTIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$2]]);
const _hoisted_1$w = {
  key: 0,
  class: "vt-backdrop"
};
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VTBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", _hoisted_1$w)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFocusContainer(options) {
  const containsFocus = ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a2, _b2, _c;
      if (el === options.elRef.value || ((_a2 = options.elRef.value) == null ? void 0 : _a2.contains(el))) {
        containsFocus.value = true;
        (_b2 = options.onFocus) == null ? void 0 : _b2.call(options);
      } else {
        containsFocus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(containsFocus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VTLink",
  props: {
    href: null,
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(() => props.href && /^[a-z]+:/i.test(props.href));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.href ? "a" : "span"), {
        class: normalizeClass(["vt-link", { link: __props.href }]),
        href: __props.href,
        target: unref(isExternal2) ? "_blank" : void 0,
        rel: unref(isExternal2) ? "noopener noreferrer" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default"),
          unref(isExternal2) && !__props.noIcon ? (openBlock(), createBlock(VTIconExternalLink, {
            key: 0,
            class: "vt-link-icon"
          })) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VTMenuLink",
  props: {
    item: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$I, {
        class: "vt-menu-link",
        href: __props.item.link
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.item.text), 1)
        ]),
        _: 1
      }, 8, ["href"]);
    };
  }
});
const _hoisted_1$v = { class: "vt-menu-group" };
const _hoisted_2$m = {
  key: 0,
  class: "vt-menu-group-title"
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VTMenuGroup",
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$v, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$m, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(_sfc_main$H, {
              key: 0,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const _hoisted_1$u = { class: "vt-menu" };
const _hoisted_2$l = {
  key: 0,
  class: "vt-menu-items"
};
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VTMenu",
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        __props.items ? (openBlock(), createElementBlock("div", _hoisted_2$l, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createBlock(_sfc_main$H, {
                key: 0,
                item
              }, null, 8, ["item"])) : (openBlock(), createBlock(_sfc_main$G, {
                key: 1,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$t = ["aria-expanded", "aria-label"];
const _hoisted_2$k = {
  key: 0,
  class: "vt-flyout-button-text"
};
const _hoisted_3$d = { class: "vt-flyout-menu" };
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VTFlyout",
  props: {
    button: null,
    items: null,
    label: null
  },
  setup(__props) {
    const props = __props;
    const open = ref(false);
    const elRef = ref();
    const onBlur = () => {
      open.value = false;
    };
    useFocusContainer({
      elRef,
      onBlur
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vt-flyout",
        ref_key: "elRef",
        ref: elRef,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "vt-flyout-button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": __props.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          props.button ? (openBlock(), createElementBlock("span", _hoisted_2$k, [
            createTextVNode(toDisplayString(props.button) + " ", 1),
            createVNode(VTIconChevronDown, { class: "vt-flyout-button-text-icon" })
          ])) : (openBlock(), createBlock(VTIconMoreHorizontal, {
            key: 1,
            class: "vt-flyout-button-icon"
          }))
        ], 8, _hoisted_1$t),
        createBaseVNode("div", _hoisted_3$d, [
          createVNode(_sfc_main$F, { items: __props.items }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
const _hoisted_1$s = ["aria-expanded"];
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("span", { class: "vt-hamburger-container" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "vt-hamburger-top" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "vt-hamburger-middle" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "vt-hamburger-bottom" })
], -1);
const _hoisted_3$c = [
  _hoisted_2$j
];
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VTHamburger",
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["vt-hamburger", { "is-active": __props.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen"
      }, _hoisted_3$c, 10, _hoisted_1$s);
    };
  }
});
const _hoisted_1$r = ["href", "title", "target"];
const _hoisted_2$i = { class: "visually-hidden" };
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VTSocialLink",
  props: {
    size: null,
    icon: null,
    link: null
  },
  setup(__props) {
    const props = __props;
    const target = /^[a-z]+:/i.test(props.link) ? `_blank` : void 0;
    const icons = {
      discord: VTIconDiscord,
      facebook: VTIconFacebook,
      github: VTIconGitHub,
      linkedin: VTIconLinkedIn,
      slack: VTIconSlack,
      twitter: VTIconTwitter,
      languages: VTIconLanguages
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["vt-social-link", {
          "is-small": __props.size === "small",
          "is-medium": __props.size === "medium"
        }]),
        href: __props.link,
        title: __props.icon,
        target: unref(target),
        rel: "noopener noreferrer"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(icons[__props.icon]), { class: "vt-social-link-icon" })),
        createBaseVNode("span", _hoisted_2$i, toDisplayString(__props.icon), 1)
      ], 10, _hoisted_1$r);
    };
  }
});
const _hoisted_1$q = { class: "vt-social-links" };
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VTSocialLinks",
  props: {
    size: null,
    links: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, ({ link: link2, icon }) => {
          return openBlock(), createBlock(_sfc_main$C, {
            key: link2,
            size: __props.size,
            icon,
            link: link2
          }, null, 8, ["size", "icon", "link"]);
        }), 128))
      ]);
    };
  }
});
const _sfc_main$A = {};
const _hoisted_1$p = {
  class: "vt-switch",
  type: "button",
  role: "switch"
};
const _hoisted_2$h = { class: "vt-switch-check" };
const _hoisted_3$b = {
  key: 0,
  class: "vt-switch-icon"
};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$p, [
    createBaseVNode("span", _hoisted_2$h, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$b, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("", true)
    ])
  ]);
}
var VTSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$1]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VTSwitchAppearance",
  setup(__props) {
    const storageKey = "vue-theme-appearance";
    const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    function useAppearance() {
      let userPreference = localStorage.getItem(storageKey) || "auto";
      const query = window.matchMedia(`(prefers-color-scheme: dark)`);
      const classList = document.documentElement.classList;
      let isDark = userPreference === "auto" ? query.matches : userPreference === "dark";
      const setClass = (dark) => classList[dark ? "add" : "remove"]("dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark = e.matches);
        }
      };
      const toggle2 = () => {
        setClass(isDark = !isDark);
        localStorage.setItem(storageKey, userPreference = isDark ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto");
      };
      return toggle2;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VTSwitch, {
        class: "vt-switch-appearance",
        "aria-label": "toggle dark mode",
        onClick: unref(toggle)
      }, {
        default: withCtx(() => [
          createVNode(VTIconSun, { class: "vt-switch-appearance-sun" }),
          createVNode(VTIconMoon, { class: "vt-switch-appearance-moon" })
        ]),
        _: 1
      }, 8, ["onClick"]);
    };
  }
});
var index = /* @__PURE__ */ (() => `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}

/**
 * Colors Base
 *
 * These are the pure base color presets. Most of the time, you should not be
 * using these colors directly in the theme but rather use "Colors Theme"
 * instead because those are "Theme (light or dark)" dependant.
 * -------------------------------------------------------------------------- */

:root {
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f9f9f9;
  --vt-c-white-mute: #f1f1f1;

  --vt-c-black: #1a1a1a;
  --vt-c-black-pure: #000000;
  --vt-c-black-soft: #242424;
  --vt-c-black-mute: #2f2f2f;

  --vt-c-indigo: #213547;
  --vt-c-indigo-soft: #476582;
  --vt-c-indigo-light: #aac8e4;

  --vt-c-gray: #8e8e8e;
  --vt-c-gray-light-1: #aeaeae;
  --vt-c-gray-light-2: #c7c7c7;
  --vt-c-gray-light-3: #d1d1d1;
  --vt-c-gray-light-4: #e5e5e5;
  --vt-c-gray-light-5: #f2f2f2;
  --vt-c-gray-dark-1: #636363;
  --vt-c-gray-dark-2: #484848;
  --vt-c-gray-dark-3: #3a3a3a;
  --vt-c-gray-dark-4: #282828;
  --vt-c-gray-dark-5: #202020;

  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, 0.70);
  --vt-c-text-light-3: rgba(60, 60, 60, 0.33);
  --vt-c-text-light-4: rgba(60, 60, 60, 0.18);
  --vt-c-text-light-code: var(--vt-c-indigo-soft);

  --vt-c-text-dark-1: rgba(255, 255, 255, 0.87);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.60);
  --vt-c-text-dark-3: rgba(235, 235, 235, 0.38);
  --vt-c-text-dark-4: rgba(235, 235, 235, 0.18);
  --vt-c-text-dark-code: var(--vt-c-indigo-light);

  --vt-c-green: #42b883;
  --vt-c-green-light: #42d392;
  --vt-c-green-lighter: #35eb9a;
  --vt-c-green-dark: #33a06f;
  --vt-c-green-darker: #155f3e;

  --vt-c-blue: #3b8eed;
  --vt-c-blue-light: #549ced;
  --vt-c-blue-lighter: #50a2ff;
  --vt-c-blue-dark: #3468a3;
  --vt-c-blue-darker: #255489;

  --vt-c-yellow: #ffc517;
  --vt-c-yellow-light: #ffe417;
  --vt-c-yellow-lighter: #ffff17;
  --vt-c-yellow-dark: #e0ad15;
  --vt-c-yellow-darker: #bc9112;

  --vt-c-red: #ed3c50;
  --vt-c-red-light: #f43771;
  --vt-c-red-lighter: #fd1d7c;
  --vt-c-red-dark: #cd2d3f;
  --vt-c-red-darker: #ab2131;

  --vt-c-purple: #de41e0;
  --vt-c-purple-light: #e936eb;
  --vt-c-purple-lighter: #f616f8;
  --vt-c-purple-dark: #823c83;
  --vt-c-purple-darker: #602960;
}

/**
 * Colors Theme
 * -------------------------------------------------------------------------- */

:root {
  --vt-c-bg: var(--vt-c-white);
  --vt-c-bg-soft: var(--vt-c-white-soft);
  --vt-c-bg-mute: var(--vt-c-white-mute);

  --vt-c-divider: var(--vt-c-divider-light-1);
  --vt-c-divider-light: var(--vt-c-divider-light-2);

  --vt-c-divider-inverse: var(--vt-c-divider-dark-1);
  --vt-c-divider-inverse-light: var(--vt-c-divider-dark-2);

  --vt-c-text-1: var(--vt-c-text-light-1);
  --vt-c-text-2: var(--vt-c-text-light-2);
  --vt-c-text-3: var(--vt-c-text-light-3);
  --vt-c-text-4: var(--vt-c-text-light-4);
  --vt-c-text-code: var(--vt-c-text-light-code);

  --vt-c-text-inverse-1: var(--vt-c-text-dark-1);
  --vt-c-text-inverse-2: var(--vt-c-text-dark-2);
  --vt-c-text-inverse-3: var(--vt-c-text-dark-3);
  --vt-c-text-inverse-4: var(--vt-c-text-dark-4);

  --vt-c-brand: var(--vt-c-green);
  --vt-c-brand-light: var(--vt-c-green-light);
  --vt-c-brand-dark: var(--vt-c-green-dark);
  --vt-c-brand-highlight: var(--vt-c-brand-dark);
}

.dark {
  --vt-c-bg: var(--vt-c-black);
  --vt-c-bg-soft: var(--vt-c-black-soft);
  --vt-c-bg-mute: var(--vt-c-black-mute);

  --vt-c-divider: var(--vt-c-divider-dark-1);
  --vt-c-divider-light: var(--vt-c-divider-dark-2);

  --vt-c-divider-inverse: var(--vt-c-divider-light-1);
  --vt-c-divider-inverse-light: var(--vt-c-divider-light-2);

  --vt-c-text-1: var(--vt-c-text-dark-1);
  --vt-c-text-2: var(--vt-c-text-dark-2);
  --vt-c-text-3: var(--vt-c-text-dark-3);
  --vt-c-text-4: var(--vt-c-text-dark-4);
  --vt-c-text-code: var(--vt-c-text-dark-code);

  --vt-c-text-inverse-1: var(--vt-c-text-light-1);
  --vt-c-text-inverse-2: var(--vt-c-text-light-2);
  --vt-c-text-inverse-3: var(--vt-c-text-light-3);
  --vt-c-text-inverse-4: var(--vt-c-text-light-4);

  --vt-c-brand-highlight: var(--vt-c-brand-light);
}

/**
 * Typography
 * -------------------------------------------------------------------------- */

:root {
  --vt-font-family-base: Inter, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --vt-font-family-mono: Menlo, Monaco, Consolas, 'Courier New', monospace;
}

/**
 * Shadows
 * -------------------------------------------------------------------------- */

:root {
  --vt-shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  --vt-shadow-2: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
  --vt-shadow-3: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  --vt-shadow-4: 0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12);
  --vt-shadow-5: 0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16);
}

/**
 * Magic Numbers
 * -------------------------------------------------------------------------- */

:root {
  --vt-nav-height: 55px;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  font-family: var(--vt-font-family-base);
  letter-spacing: .2px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: var(--vt-c-text-1);
  background-color: var(--vt-c-bg);
  direction: ltr;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  transition: color .5s, background-color .5s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/**
 * Avoid 300ms click delay on touch devices that support the \`touch-action\`
 * CSS property.
 *
 * In particular, unlike most other browsers, IE11+Edge on Windows 10 on
 * touch devices and IE Mobile 10-11 DON'T remove the click delay when
 * \`<meta name="viewport" content="width=device-width">\` is present.
 * However, they DO support removing the click delay via
 * \`touch-action: manipulation\`.
 *
 * See:
 * - http://v4-alpha.getbootstrap.com/content/reboot/#click-delay-optimization-for-touch
 * - http://caniuse.com/#feat=css-touch-action
 * - http://patrickhlauke.github.io/touch/tests/results/#suppressing-300ms-delay
 */

a,
area,
button,
[role="button"],
input,
label,
select,
summary,
textarea {
  touch-action: manipulation;
}

a {
  color: inherit;
  text-decoration: inherit;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

pre,
code,
kbd,
samp {
  font-family: var(--vt-font-family-mono);
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

button,
input,
optgroup,
select,
textarea {
  border: 0;
  padding: 0;
  line-height: inherit;
  color: inherit;
}

button {
  padding: 0;
  background-color: transparent;
  background-image: none;
}

button,
[role="button"] {
  cursor: pointer;
}

button:focus, button:focus-visible {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

button:focus:not(:focus-visible) {
  outline: none !important;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

table {
  border-collapse: collapse;
}

input {
  background-color: transparent;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: var(--vt-c-text-3);
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: var(--vt-c-text-3);
}

input::placeholder,
textarea::placeholder {
  color: var(--vt-c-text-3);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

textarea {
  resize: vertical;
}

select {
  -webkit-appearance: none;
}

fieldset {
  margin: 0;
  padding: 0;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.vt-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  transition: opacity .5s;
}

.vt-backdrop.fade-enter-from,
.vt-backdrop.fade-leave-to {
  opacity: 0;
}

.vt-backdrop.fade-leave-active {
  transition-duration: .3s;
}

@media (min-width: 960px) {
  .vt-backdrop {
    display: none;
  }
}

.vt-code-group {
  display: flex;
  flex-direction: column;
}

.vt-code-group-contents .vt-code-group-content div[class*='language-'] {
  margin-top: 0;
  border-top-left-radius: 0;
}

.vt-code-group-tabs {
  display: flex;
  overflow: auto;
}

.vt-code-group-tab {
  white-space: pre;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vt-c-text-inverse-1);
  background: #292d3ef0;
  border-bottom-color: rgba(255,255,255,0.3);
  padding: 6px 24px;
  border-width: 2px;
  border-style: solid;
  border-top: transparent;
  border-right: transparent;
  border-left: transparent;
  cursor: pointer;
  transition: border, background-color .2s;
    transition-property: border, background-color;
    transition-duration: 0.2s, 0.2s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;
}

.vt-code-group-tab.vt-code-group-tab-active {
  background: #292d3e;
  border-bottom: 2px solid var(--vt-c-brand);
}

.vt-code-group-tab:first-child {
  border-top-left-radius: 8px;
}

.vt-code-group-tab:last-child {
  border-top-right-radius: 8px;
}

.dark .vt-code-group-tab {
  color: var(--vt-c-text-1);
}

.dark .vt-code-group-tab:not(.vt-code-group-tab-active) {
  border-bottom: 2px solid rgba(255,255,255,.2);
  background: var(--vt-c-black-mute);
}

.dark .vt-code-group-tab.vt-code-group-tab-active {
  background: var(--vt-c-black-soft);
}

@media (max-width: 639px) {
  .vt-code-group-tabs {
    margin: 0 -24px;
  }

  .vt-code-group-tab, .vt-code-group-tab:first-child, .vt-code-group-tab:last-child {
    flex-grow: 1;
    border-radius: 0;
  }
}

.vt-doc {
  font-size: 16px;
  line-height: 1.7;
}

.vt-doc h1,
.vt-doc h2,
.vt-doc h3,
.vt-doc h4,
.vt-doc h5,
.vt-doc h6 {
  position: relative;
  font-weight: 600;
  line-height: 1.5;
  outline: none;
}

.vt-doc h1 {
  margin: 0 0 3rem;
  font-size: 38px;
  line-height: 1.4;
  letter-spacing: -0.02em;
}

.vt-doc h2 {
  margin: 4rem 0 1.8rem;
  border-top: 1px solid var(--vt-c-divider-light);
  padding-top: 1.8rem;
  font-size: 24px;
  letter-spacing: -0.02em;
}

@media (max-width: 768px) {
  .vt-doc h1 {
    font-size: 32px;
    margin-bottom: 1.8rem;
  }
  .vt-doc h1 + h2 {
    margin-top: 36px;
  }
}

.vt-doc h3 {
  font-size: 19px;
  letter-spacing: -0.01em;
  margin: 3rem 0 1.25rem;
}

.vt-doc h2 + h3 {
  margin-top: 0;
}

.vt-doc h4 {
  font-size: 17px;
  margin: 1.8rem 0 1rem;
}

.vt-doc .header-anchor {
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  font-weight: 500;
  opacity: 0;
  transition: color 0.25s, opacity 0.25s;
}

.vt-doc h1:hover .header-anchor,
.vt-doc h1 .header-anchor:focus,
.vt-doc h2:hover .header-anchor,
.vt-doc h2 .header-anchor:focus,
.vt-doc h3:hover .header-anchor,
.vt-doc h3 .header-anchor:focus,
.vt-doc h4:hover .header-anchor,
.vt-doc h4 .header-anchor:focus,
.vt-doc h5:hover .header-anchor,
.vt-doc h5 .header-anchor:focus,
.vt-doc h6:hover .header-anchor,
.vt-doc h6 .header-anchor:focus {
  opacity: 1;
}

.vt-doc hr {
  border: none;
  border-top: 1px solid var(--vt-c-divider-light);
  margin: 1.8rem 0;
}

.vt-doc p,
.vt-doc ul,
.vt-doc ol,
.vt-doc summary {
  margin-bottom: 1.2em;
}

.vt-doc a {
  font-weight: 500;
  color: var(--vt-c-brand);
  transition: color 0.25s;
  text-decoration-style: dotted;
}

.vt-doc a:hover {
  color: var(--vt-c-brand-highlight);
}

.vt-doc strong {
  font-weight: 600;
}

.vt-doc table {
  display: block;
  border-collapse: collapse;
  margin: 1rem 0;
  overflow-x: auto;
}

.vt-doc tr {
  border-top: 1px solid var(--vt-c-divider);
  transition: background-color 0.5s;
}

.vt-doc tr:nth-child(2n) {
  background-color: var(--vt-c-bg-soft);
}

.vt-doc th,
.vt-doc td {
  border: 1px solid var(--vt-c-divider);
  padding: 0.6em 1em;
}

.vt-doc blockquote {
  margin: 1rem 0;
  border-left: 0.2rem solid var(--vt-c-divider);
  padding-left: 1rem;
  transition: border-color 0.5s;
}

.vt-doc blockquote > p {
  margin: 0;
  font-size: 16px;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
}

.vt-doc figure {
  margin: 0;
}

.vt-doc img {
  max-width: 100%;
}

.vt-doc p > img {
  margin: 28px auto;
}

.vt-doc ol {
  counter-reset: item;
}

.vt-doc ol[start='2'] {
  counter-reset: item 1;
}

.vt-doc ol[start='3'] {
  counter-reset: item 2;
}

.vt-doc ol[start='4'] {
  counter-reset: item 3;
}

.vt-doc ol[start='5'] {
  counter-reset: item 4;
}

.vt-doc ol[start='6'] {
  counter-reset: item 5;
}

.vt-doc ol[start='7'] {
  counter-reset: item 6;
}

.vt-doc ol[start='8'] {
  counter-reset: item 7;
}

.vt-doc ol[start='9'] {
  counter-reset: item 8;
}

.vt-doc ol[start='10'] {
  counter-reset: item 9;
}

.vt-doc ol > li {
  counter-increment: item;
  position: relative;
  padding-left: 1.5rem;
}

.vt-doc ol > li:before {
  position: absolute;
  left: 2px;
  top: 1px;
  font-weight: bold;
  font-size: 14px;
  color: var(--vt-c-text-3);
  content: counter(item) '.';
}

@media (min-width: 768px) {
  .vt-doc ol > li:before {
    top: 2px;
  }
}

.vt-doc li {
  position: relative;
  margin: 1px 0;
}

.vt-doc ul {
  padding-left: 1.25rem;
}

.vt-doc ul > li:before {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--vt-c-text-3);
  transition: background-color 0.5s;
  left: -1.25rem;
  top: 0.75rem;
}

.vt-doc .video::before {
  display: block;
  content: '';
  padding-top: 56.25%;
}

.vt-doc .video {
  overflow: hidden;
  width: calc(100% + 48px);
  min-width: 415px;
  position: relative;
  margin: 0 -24px 18px;
}

.vt-doc .video-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

@media (min-width: 640px) {
  .vt-doc .video {
    border-radius: 8px;
  }
}

@media (max-width: 463px) {
  .vt-doc .video {
    width: 100%;
    margin: 0 calc((100vw - 463px) / 2) 18px;
  }
}

.vt-doc {
  --vt-doc-code-font-size: 14px;
  --vt-doc-code-line-height: 1.5;
}

/* inline code */

.vt-doc :not(pre) > code {
  background-color: var(--vt-c-bg-mute);
  padding: 0.15em 0.5em;
  border-radius: 4px;
  color: var(--vt-c-text-code);
  transition: color 0.5s, background-color 0.5s;
}

.vt-doc a > code {
  color: var(--vt-c-brand-dark);
}

.vt-doc :not(pre, h1, h2, h3, h4, h5, h6) > code {
  font-size: var(--vt-doc-code-font-size);
}

@media (min-width: 768px) {
  .vt-doc :not(pre) > code {
    white-space: nowrap;
  }
}

.vt-doc div[class*='language-'] {
  position: relative;
  margin: 28px -24px;
  background-color: #292d3e;
  overflow-x: auto;
  transition: background-color 0.5s;
}

.dark .vt-doc div[class*='language-'] {
  background-color: var(--vt-c-bg-soft);
}

@media (min-width: 640px) {
  .vt-doc div[class*='language-'] {
    margin: 28px 0;
    border-radius: 8px;
  }
}

@media (max-width: 639px) {
  .vt-doc li div[class*='language-'] {
    border-radius: 8px 0 0 8px;
  }
}

.vt-doc div[class*='language-'] + div[class*='language-'],
.vt-doc div[class$='-api'] + div[class*='language-'],
.vt-doc div[class*='language-'] + div[class$='-api'] > div[class*='language-'] {
  margin-top: -16px;
}

.vt-doc [class*='language-'] pre,
.vt-doc [class*='language-'] code {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

.vt-doc [class*='language-'] pre {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 14px 24px;
  background: transparent;
  overflow-x: auto;
}

.vt-doc [class*='language-'] code {
  display: inline-block;
  padding: 0;
  line-height: var(--vt-doc-code-line-height);
  font-size: var(--vt-doc-code-font-size);
  color: #a6accd;
  transition: color 0.5s;
}

.vt-doc .highlight-lines {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 13px 0 11px;
  width: 100%;
  font-family: var(--vt-font-family-mono);
  line-height: var(--vt-doc-code-line-height);
  font-size: var(--vt-doc-code-font-size);
  user-select: none;
  overflow: hidden;
}

.vt-doc .highlight-lines .highlighted {
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.5s;
}

.dark .vt-doc .highlight-lines .highlighted {
  background-color: rgba(255, 255, 255, 0.05);
}

.vt-doc div[class*='language-'].line-numbers-mode {
  padding-left: 32px;
}

.vt-doc .line-numbers-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  border-right: 1px solid var(--vt-c-divider-light);
  padding: 13px 0 11px;
  width: 32px;
  text-align: center;
  font-family: var(--vt-font-family-mono);
  line-height: var(--vt-doc-code-line-height);
  font-size: var(--vt-doc-code-font-size);
  color: var(--vt-c-text-3);
  transition: border-color 0.5s, color 0.5s;
}

.vt-doc [class*='language-']:before {
  position: absolute;
  top: 4px;
  right: 10px;
  z-index: 2;
  font-size: 12px;
  font-weight: 500;
  color: var(--vt-c-text-dark-3);
  transition: color 0.5s;
}

@media (max-width: 480px) {
  .vt-doc [class*='language-']:before {
    top: 1px;
    right: 5px;
    font-size: 11px;
  }
  .vt-doc [class*='language-'] pre {
    padding: 18px 20px 12px;
  }
  .vt-doc .highlight-lines {
    padding-top: 17px;
  }
}

.vt-doc [class~='language-vue']:before {
  content: 'vue';
}

.vt-doc [class~='language-html']:before {
  content: 'html';
}

.vt-doc [class~='language-vue-html']:before {
  content: 'template';
}

.vt-doc [class~='language-css']:before {
  content: 'css';
}

.vt-doc [class~='language-js']:before {
  content: 'js';
}

.vt-doc [class~='language-jsx']:before {
  content: 'jsx';
}

.vt-doc [class~='language-ts']:before {
  content: 'ts';
}

.vt-doc [class~='language-tsx']:before {
  content: 'tsx';
}

.vt-doc [class~='language-json']:before {
  content: 'json';
}

.vt-doc [class~='language-sh']:before,
.vt-doc [class~='language-bash']:before {
  content: 'sh';
}

.vt-doc .custom-block {
  margin: 28px 0;
  padding: 20px 24px 4px 42px;
  border-radius: 8px;
  overflow-x: auto;
  transition: color 0.5s, background-color 0.5s;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.55);
  background-color: var(--vt-c-bg-soft);
}

.dark .vt-doc .custom-block {
  color: var(--vt-c-text-2);
}

.vt-doc .custom-block:before {
  content: '\u24D8';
  position: absolute;
  font-weight: 600;
  font-size: 15px;
  top: 20px;
  left: 17px;
}

.vt-doc .custom-block.warning:before,
.vt-doc .custom-block.danger:before {
  content: '\u26A0';
  font-size: 17px;
  top: 19px;
  left: 16ppx;
}

.vt-doc .custom-block .custom-block-title {
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
}

.vt-doc .custom-block.tip {
  border: 1px solid var(--vt-c-brand);
}

.vt-doc .custom-block.tip:before {
  color: var(--vt-c-brand);
}

.vt-doc .custom-block.warning {
  border: 1px solid var(--vt-c-yellow);
}

.vt-doc .custom-block.warning:before {
  color: var(--vt-c-yellow);
}

.vt-doc .custom-block.danger {
  border: 1px solid var(--vt-c-red);
}

.vt-doc .custom-block.danger .custom-block-title,
.vt-doc .custom-block.danger:before {
  color: var(--vt-c-red);
}

.vt-doc .custom-block ul li:before {
  top: 0.55rem;
}

.vt-doc .custom-block ol li:before {
  top: 1px;
  font-size: 13px;
}

.vt-doc .custom-block :not(pre) > code {
  font-size: 13px;
  background-color: rgba(27, 31, 35, 0.05);
}

.dark .vt-doc .custom-block :not(pre) > code {
  background-color: rgba(0, 0, 0, 0.2);
}

.vt-flyout {
  position: relative;
}

.vt-flyout:hover {
  color: var(--vt-c-bland);
  transition: color .25s;
}

.vt-flyout:hover .vt-flyout-button-text {
  color: var(--vt-c-text-2);
}

.vt-flyout:hover .vt-flyout-button-icon {
  fill: var(--vt-c-text-2);
}

.vt-flyout:hover .vt-flyout-menu,
.vt-flyout-button[aria-expanded="true"] + .vt-flyout-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.vt-flyout-button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: var(--vt-nav-height);
  color: var(--vt-c-text-1);
  transition: color .5s;
}

.vt-flyout-button-text {
  display: flex;
  align-items: center;
  line-height: var(--vt-nav-height);
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color .25s;
}

.vt-flyout-button-text-icon {
  margin-left: 4px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.vt-flyout-button-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: fill .25s;
}

.vt-flyout-menu {
  position: absolute;
  top: calc(var(--vt-nav-height) / 2 + 15px);
  right: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity .25s, visibility .25s, transform .25s;
}

.vt-hamburger {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vt-hamburger:hover .vt-hamburger-top    { top: 0; left: 0; transform: translateX(4px); }

.vt-hamburger:hover .vt-hamburger-middle { top: 6; left: 0; transform: translateX(0); }

.vt-hamburger:hover .vt-hamburger-bottom { top: 12px; left: 0; transform: translateX(8px); }

.vt-hamburger.is-active .vt-hamburger-top    { top: 6px; transform: translateX(0) rotate(225deg); }

.vt-hamburger.is-active .vt-hamburger-middle { top: 6px; transform: translateX(16px); }

.vt-hamburger.is-active .vt-hamburger-bottom { top: 6px; transform: translateX(0) rotate(135deg); }

.vt-hamburger.is-active:hover .vt-hamburger-top,
.vt-hamburger.is-active:hover .vt-hamburger-middle,
.vt-hamburger.is-active:hover .vt-hamburger-bottom {
  background-color: var(--vt-c-text-2);
  transition: top .25s, background-color .25s, transform .25s;
}

.vt-hamburger-container {
  position: relative;
  width: 16px;
  height: 14px;
  overflow: hidden;
}

.vt-hamburger-top,
.vt-hamburger-middle,
.vt-hamburger-bottom {
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: var(--vt-c-text-1);
  transition: top .25s, background-color .5s, transform .25s;
}

.vt-hamburger-top    { top: 0; left: 0; transform: translateX(0); }

.vt-hamburger-middle { top: 6px; left: 0; transform: translateX(8px); }

.vt-hamburger-bottom { top: 12px; left: 0; transform: translateX(4px); }

.vt-link-icon {
  display: inline-block;
  margin-top: -2px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  fill: var(--vt-c-text-3);
  transition: fill 0.25s;
}

.vt-menu {
  border-radius: 8px;
  padding: 12px 0;
  min-width: 192px;
  border: 1px solid transparent;
  background: var(--vt-c-bg);
  box-shadow: var(--vt-shadow-3);
  transition: background-color .5s;
}

.dark .vt-menu {
  background: var(--vt-c-bg);
  box-shadow: var(--vt-shadow-1);
  border: 1px solid var(--vt-c-divider-light);
}

.vt-menu-items {
  transition: border-color .5s;
}

.vt-menu .vt-menu-group {
  padding: 0 0 12px;
}

.vt-menu .vt-menu-group + .vt-menu-group {
  border-top: 1px solid var(--vt-c-divider-light);
  padding: 11px 0 12px;
}

.vt-menu .vt-menu-group:last-child {
  padding-bottom: 0;
}

.vt-menu .vt-menu-group + .vt-menu-item-item {
  border-top: 1px solid var(--vt-c-divider-light);
  padding: 11px 16px 0;
}

.vt-menu .vt-menu-item {
  padding: 0 16px;
  white-space: nowrap;
}

.vt-menu-label {
  flex-grow: 1;
  line-height: 28px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color .5s;
}

.vt-menu-action {
  padding-left: 24px;
}

.vt-menu-group-title {
  padding: 0 18px;
  line-height: 28px;
  font-size: 10px;
  font-weight: 600;
  color: var(--vt-c-text-3);
  text-transform: uppercase;
  transition: color .25s;
}

.vt-menu-link {
  display: block;
  padding: 0 18px;
  line-height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vt-c-text-1);
  white-space: nowrap;
  transition: color .25s;
}

.vt-menu-link:hover {
  color: var(--vt-c-brand);
}

.vt-social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vt-c-text-2);
  transition: color .5s;
}

.vt-social-link.is-small {
  width: 36px;
  height: 36px;
}

.vt-social-link.is-small .vt-social-link-icon {
  width: 20px;
  height: 20px;
}

.vt-social-link.is-medium {
  width: 48px;
  height: 48px;
}

.vt-social-link.is-medium .vt-social-link-icon {
  width: 24px;
  height: 24px;
}

.vt-social-link:hover {
  color: var(--vt-c-text-1);
  transition: color .25s;
}

.vt-social-link-icon {
  fill: currentColor;
}

.vt-social-links {
  display: flex;
  justify-content: center;
}

.vt-switch {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--vt-c-divider);
  background-color: var(--vt-c-bg-mute);
  transition: border-color 0.25s, background-color 0.25s;
}

.vt-switch:hover {
  border-color: var(--vt-c-gray);
}

.vt-switch-check {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--vt-c-white);
  box-shadow: var(--vt-shadow-1);
  transition: background-color 0.25s, transform 0.25s;
}

.dark .vt-switch-check {
  background-color: var(--vt-c-black);
}

.vt-switch-icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
}

.vt-switch-icon svg {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: var(--vt-c-text-2);
}

.dark .vt-switch-icon svg {
  fill: var(--vt-c-text-1);
  transition: opacity 0.25s;
}

.vt-switch-appearance-sun {
  opacity: 1;
}

.vt-switch-appearance-moon {
  opacity: 0;
}

.dark .vt-switch-appearance-sun {
  opacity: 0;
}

.dark .vt-switch-appearance-moon {
  opacity: 1;
}

.dark .vt-switch-appearance .vt-switch-check {
  transform: translateX(18px);
}

.vt-box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.vt-box-container .vt-box {
  background-color: var(--vt-c-bg-soft);
  transition: color 0.5s, background-color 0.5s;
  padding: 28px 36px;
  border-radius: 8px;
  flex: 0 32%; /* default 3 column */
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .vt-box-container .vt-box {
    flex: 0 100%;
    margin-bottom: 20px;
  }
}

.vt-badge {
  display: inline-block;
  border-radius: 6px;
  font-size: 0.65em;
  line-height: 1;
  font-weight: 600;
  padding: 0.35em 0.4em 0.3em;
  position: relative;
  top: -0.65em;
  margin-left: 0.5em;
  color: var(--vt-c-bg);
  transition: color 0.5s;
  background-color: var(--vt-c-brand);
}

.vt-badge.warning {
  color: var(--vt-c-text-light-1);
  background-color: var(--vt-c-yellow);
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(/xiao-you-editor-docs/assets/inter-latin.7b37fe23.woff2) format('woff2');
  unicode-range: U+00??, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da,
    U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+feff, U+fffd;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/xiao-you-editor-docs/assets/inter-latin-ext.65457fee.woff2) format('woff2');
  unicode-range: U+0100-024f, U+0259, U+1e??, U+2020, U+20a0-20ab, U+20ad-20cf,
    U+2113, U+2c60-2c7f, U+a720-a7ff;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/xiao-you-editor-docs/assets/inter-cyrillic.5af0208d.woff2) format('woff2');
  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/xiao-you-editor-docs/assets/inter-cyrillic-ext.dae818a0.woff2) format('woff2');
  unicode-range: U+0460-052f, U+1c80-1c88, U+20b4, U+2de0-2dff, U+a640-a69f,
    U+fe2e-fe2f;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/xiao-you-editor-docs/assets/inter-greek.c347ae24.woff2) format('woff2');
  unicode-range: U+0370-03ff;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/xiao-you-editor-docs/assets/inter-greek-ext.311d9dee.woff2) format('woff2');
  unicode-range: U+1f??;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/xiao-you-editor-docs/assets/inter-vietnamese.38390954.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01a0-01a1,
    U+01af-01b0, U+1ea0-1ef9, U+20ab;
}

/**
 * Layouts
 * -------------------------------------------------------------------------- */

:root {
  /* Z Indexes */
  --vp-z-index-local-nav: 10;
  --vp-z-index-nav: 20;
  --vp-z-index-banner: 30;
  --vp-z-index-backdrop: 40;
  --vp-z-index-sidebar: 50;

  /* Screen Size */
  --vp-screen-max-width: 1376px;
}

/**
 * Component: Sidebar
 * -------------------------------------------------------------------------- */

:root {
  --vp-sidebar-width-mobile: 320px;
  --vp-sidebar-width-small: 272px;
}

html.dark {
  color-scheme: dark;
}
`)();
const Content = defineComponent({
  name: "VitePressContent",
  setup() {
    const route = useRoute();
    return () => h("div", { style: { position: "relative" } }, [
      route.component ? h(route.component) : null
    ]);
  }
});
var Debug_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.debug[data-v-bf835584] {\n  box-sizing: border-box;\n  position: fixed;\n  right: 8px;\n  bottom: 8px;\n  z-index: 9999;\n  border-radius: 4px;\n  width: 74px;\n  height: 32px;\n  color: #eeeeee;\n  overflow: hidden;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.85);\n  transition: all 0.15s ease;\n}\n.debug[data-v-bf835584]:hover {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.debug.open[data-v-bf835584] {\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  margin-top: 0;\n  border-radius: 0;\n  padding: 0 0;\n  overflow: scroll;\n}\n@media (min-width: 512px) {\n.debug.open[data-v-bf835584] {\n    width: 512px;\n}\n}\n.debug.open[data-v-bf835584]:hover {\n  background-color: rgba(0, 0, 0, 0.85);\n}\n.title[data-v-bf835584] {\n  margin: 0;\n  padding: 6px 16px 6px;\n  line-height: 20px;\n  font-size: 13px;\n}\n.block[data-v-bf835584] {\n  margin: 2px 0 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.16);\n  padding: 8px 16px;\n  font-family: Hack, monospace;\n  font-size: 13px;\n}\n.block + .block[data-v-bf835584] {\n  margin-top: 8px;\n}\n")();
const hashRE = /#.*$/;
const extRE = /(index)?\.(md|html)$/;
const outboundRE = /^[a-z]+:/i;
function isExternal(path) {
  return outboundRE.test(path);
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://vuejs.org");
  return withBase(pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`);
}
const inBrowser = typeof window !== "undefined";
const hashRef = ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  } else {
    if (normalize(matchPath) !== currentPath) {
      return false;
    }
    const hashMatch = matchPath.match(hashRE);
    if (hashMatch) {
      return hashRef.value === hashMatch[0];
    }
    return true;
  }
}
function normalize(path) {
  return decodeURI(path).replace(hashRE, "").replace(extRE, "");
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
const configSymbol = Symbol("config");
function withConfigProvider(App) {
  return defineComponent({
    name: "VPConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = computed(() => resolveConfig(theme.value));
      provide(configSymbol, config);
      return () => h(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: inject(configSymbol)
  };
}
function resolveConfig(config) {
  var _a2;
  return Object.assign({
    appearance: true
  }, config, {
    nav: (_a2 = config.nav) == null ? void 0 : _a2.map(normalizeMenuItem),
    sidebar: config.sidebar && normalizeSideBar(config.sidebar)
  });
}
function normalizeMenuItem(item) {
  if ("link" in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    });
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) });
  }
}
function normalizeSideBar(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem);
  } else {
    const ret = {};
    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key]);
    }
    return ret;
  }
}
function useSidebar() {
  const route = useRoute();
  const { config } = useConfig();
  const { frontmatter } = useData();
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = config.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(() => frontmatter.value.sidebar !== false && sidebar.value.length > 0);
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle
  };
}
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
var VPNavBarTitle_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarTitle[data-v-5181046c] {\n  display: flex;\n  align-items: center;\n  padding-top: 1px;\n  height: var(--vt-nav-height);\n  transition: opacity 0.25s;\n}\n.VPNavBarTitle[data-v-5181046c]:hover {\n  opacity: 0.6;\n}\n.logo[data-v-5181046c] {\n  position: relative;\n}\n.logo + .text[data-v-5181046c] {\n  padding-left: 8px;\n}\n.text[data-v-5181046c] {\n  font-size: 16px;\n  font-weight: 500;\n}\n")();
const _withScopeId$7 = (n) => (pushScopeId("data-v-5181046c"), n = n(), popScopeId(), n);
const _hoisted_1$o = ["href"];
const _hoisted_2$g = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "logo",
  viewBox: "0 0 128 128",
  width: "24",
  height: "24"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#42b883",
    d: "M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#35495e",
    d: "M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
  })
], -1));
const _hoisted_3$a = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("span", { class: "text" }, "xiaoYouEditor", -1));
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const href = ref("https://2383155523.github.io/xiao-you-editor-docs/");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: "VPNavBarTitle",
        href: href.value
      }, [
        renderSlot(_ctx.$slots, "navbar-title", {}, () => [
          _hoisted_2$g,
          _hoisted_3$a
        ], true)
      ], 8, _hoisted_1$o);
    };
  }
});
var VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-5181046c"]]);
var style = /* @__PURE__ */ (() => '/*! @docsearch/css 3.1.0 | MIT License | \xA9 Algolia, Inc. and contributors | https://docsearch.algolia.com */\n:root{--docsearch-primary-color:#5468ff;--docsearch-text-color:#1c1e21;--docsearch-spacing:12px;--docsearch-icon-stroke-width:1.4;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-muted-color:#969faf;--docsearch-container-background:rgba(101,108,133,0.8);--docsearch-logo-color:#5468ff;--docsearch-modal-width:560px;--docsearch-modal-height:600px;--docsearch-modal-background:#f5f6f7;--docsearch-modal-shadow:inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 #555a64;--docsearch-searchbox-height:56px;--docsearch-searchbox-background:#ebedf0;--docsearch-searchbox-focus-background:#fff;--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-hit-height:56px;--docsearch-hit-color:#444950;--docsearch-hit-active-color:#fff;--docsearch-hit-background:#fff;--docsearch-hit-shadow:0 1px 3px 0 #d4d9e1;--docsearch-key-gradient:linear-gradient(-225deg,#d5dbe4,#f8f8f8);--docsearch-key-shadow:inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);--docsearch-footer-height:44px;--docsearch-footer-background:#fff;--docsearch-footer-shadow:0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,0.12)}html[data-theme=dark]{--docsearch-text-color:#f5f6f7;--docsearch-container-background:rgba(9,10,17,0.8);--docsearch-modal-background:#15172a;--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--docsearch-searchbox-background:#090a11;--docsearch-searchbox-focus-background:#000;--docsearch-hit-color:#bec3c9;--docsearch-hit-shadow:none;--docsearch-hit-background:#090a11;--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,0.3);--docsearch-footer-background:#1e2136;--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -4px 8px 0 rgba(0,0,0,0.2);--docsearch-logo-color:#fff;--docsearch-muted-color:#7f8497}.DocSearch-Button{align-items:center;background:var(--docsearch-searchbox-background);border:0;border-radius:40px;color:var(--docsearch-muted-color);cursor:pointer;display:flex;font-weight:500;height:36px;justify-content:space-between;margin:0 0 0 16px;padding:0 8px;user-select:none}.DocSearch-Button:active,.DocSearch-Button:focus,.DocSearch-Button:hover{background:var(--docsearch-searchbox-focus-background);box-shadow:var(--docsearch-searchbox-shadow);color:var(--docsearch-text-color);outline:none}.DocSearch-Button-Container{align-items:center;display:flex}.DocSearch-Search-Icon{stroke-width:1.6}.DocSearch-Button .DocSearch-Search-Icon{color:var(--docsearch-text-color)}.DocSearch-Button-Placeholder{font-size:1rem;padding:0 12px 0 6px}.DocSearch-Button-Keys{display:flex;min-width:calc(40px + .8em)}.DocSearch-Button-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:3px;box-shadow:var(--docsearch-key-shadow);color:var(--docsearch-muted-color);display:flex;height:18px;justify-content:center;margin-right:.4em;position:relative;padding:0 0 2px;border:0;top:-1px;width:20px}@media (max-width:750px){.DocSearch-Button-Keys,.DocSearch-Button-Placeholder{display:none}}.DocSearch--active{overflow:hidden!important}.DocSearch-Container,.DocSearch-Container *{box-sizing:border-box}.DocSearch-Container{background-color:var(--docsearch-container-background);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:200}.DocSearch-Container a{text-decoration:none}.DocSearch-Link{appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;font:inherit;margin:0;padding:0}.DocSearch-Modal{background:var(--docsearch-modal-background);border-radius:6px;box-shadow:var(--docsearch-modal-shadow);flex-direction:column;margin:60px auto auto;max-width:var(--docsearch-modal-width);position:relative}.DocSearch-SearchBar{display:flex;padding:var(--docsearch-spacing) var(--docsearch-spacing) 0}.DocSearch-Form{align-items:center;background:var(--docsearch-searchbox-focus-background);border-radius:4px;box-shadow:var(--docsearch-searchbox-shadow);display:flex;height:var(--docsearch-searchbox-height);margin:0;padding:0 var(--docsearch-spacing);position:relative;width:100%}.DocSearch-Input{appearance:none;background:transparent;border:0;color:var(--docsearch-text-color);flex:1;font:inherit;font-size:1.2em;height:100%;outline:none;padding:0 0 0 8px;width:80%}.DocSearch-Input::placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-webkit-search-cancel-button,.DocSearch-Input::-webkit-search-decoration,.DocSearch-Input::-webkit-search-results-button,.DocSearch-Input::-webkit-search-results-decoration{display:none}.DocSearch-LoadingIndicator,.DocSearch-MagnifierLabel,.DocSearch-Reset{margin:0;padding:0}.DocSearch-MagnifierLabel,.DocSearch-Reset{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}.DocSearch-Container--Stalled .DocSearch-MagnifierLabel,.DocSearch-LoadingIndicator{display:none}.DocSearch-Container--Stalled .DocSearch-LoadingIndicator{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Reset{animation:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;right:0;stroke-width:var(--docsearch-icon-stroke-width)}}.DocSearch-Reset{animation:fade-in .1s ease-in forwards;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;padding:2px;right:0;stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Reset[hidden]{display:none}.DocSearch-Reset:focus{outline:none}.DocSearch-Reset:hover{color:var(--docsearch-highlight-color)}.DocSearch-LoadingIndicator svg,.DocSearch-MagnifierLabel svg{height:24px;width:24px}.DocSearch-Cancel{display:none}.DocSearch-Dropdown{max-height:calc(var(--docsearch-modal-height) - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height));min-height:var(--docsearch-spacing);overflow-y:auto;overflow-y:overlay;padding:0 var(--docsearch-spacing);scrollbar-color:var(--docsearch-muted-color) var(--docsearch-modal-background);scrollbar-width:thin}.DocSearch-Dropdown::-webkit-scrollbar{width:12px}.DocSearch-Dropdown::-webkit-scrollbar-track{background:transparent}.DocSearch-Dropdown::-webkit-scrollbar-thumb{background-color:var(--docsearch-muted-color);border:3px solid var(--docsearch-modal-background);border-radius:20px}.DocSearch-Dropdown ul{list-style:none;margin:0;padding:0}.DocSearch-Label{font-size:.75em;line-height:1.6em}.DocSearch-Help,.DocSearch-Label{color:var(--docsearch-muted-color)}.DocSearch-Help{font-size:.9em;margin:0;user-select:none}.DocSearch-Title{font-size:1.2em}.DocSearch-Logo a{display:flex}.DocSearch-Logo svg{color:var(--docsearch-logo-color);margin-left:8px}.DocSearch-Hits:last-of-type{margin-bottom:24px}.DocSearch-Hits mark{background:none;color:var(--docsearch-highlight-color)}.DocSearch-HitsFooter{color:var(--docsearch-muted-color);display:flex;font-size:.85em;justify-content:center;margin-bottom:var(--docsearch-spacing);padding:var(--docsearch-spacing)}.DocSearch-HitsFooter a{border-bottom:1px solid;color:inherit}.DocSearch-Hit{border-radius:4px;display:flex;padding-bottom:4px;position:relative}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--deleting{transition:none}}.DocSearch-Hit--deleting{opacity:0;transition:all .25s linear}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--favoriting{transition:none}}.DocSearch-Hit--favoriting{transform:scale(0);transform-origin:top center;transition:all .25s linear;transition-delay:.25s}.DocSearch-Hit a{background:var(--docsearch-hit-background);border-radius:4px;box-shadow:var(--docsearch-hit-shadow);display:block;padding-left:var(--docsearch-spacing);width:100%}.DocSearch-Hit-source{background:var(--docsearch-modal-background);color:var(--docsearch-highlight-color);font-size:.85em;font-weight:600;line-height:32px;margin:0 -4px;padding:8px 4px 0;position:sticky;top:0;z-index:10}.DocSearch-Hit-Tree{color:var(--docsearch-muted-color);height:var(--docsearch-hit-height);opacity:.5;stroke-width:var(--docsearch-icon-stroke-width);width:24px}.DocSearch-Hit[aria-selected=true] a{background-color:var(--docsearch-highlight-color)}.DocSearch-Hit[aria-selected=true] mark{text-decoration:underline}.DocSearch-Hit-Container{align-items:center;color:var(--docsearch-hit-color);display:flex;flex-direction:row;height:var(--docsearch-hit-height);padding:0 var(--docsearch-spacing) 0 0}.DocSearch-Hit-icon{height:20px;width:20px}.DocSearch-Hit-action,.DocSearch-Hit-icon{color:var(--docsearch-muted-color);stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Hit-action{align-items:center;display:flex;height:22px;width:22px}.DocSearch-Hit-action svg{display:block;height:18px;width:18px}.DocSearch-Hit-action+.DocSearch-Hit-action{margin-left:6px}.DocSearch-Hit-action-button{appearance:none;background:none;border:0;border-radius:50%;color:inherit;cursor:pointer;padding:2px}svg.DocSearch-Hit-Select-Icon{display:none}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Select-Icon{display:block}.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:background-color .1s ease-in}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{transition:none}}.DocSearch-Hit-action-button:focus path,.DocSearch-Hit-action-button:hover path{fill:#fff}.DocSearch-Hit-content-wrapper{display:flex;flex:1 1 auto;flex-direction:column;font-weight:500;justify-content:center;line-height:1.2em;margin:0 8px;overflow-x:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;width:80%}.DocSearch-Hit-title{font-size:.9em}.DocSearch-Hit-path{color:var(--docsearch-muted-color);font-size:.75em}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-action,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-icon,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-path,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-text,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-title,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Tree,.DocSearch-Hit[aria-selected=true] mark{color:var(--docsearch-hit-active-color)!important}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:none}}.DocSearch-ErrorScreen,.DocSearch-NoResults,.DocSearch-StartScreen{font-size:.9em;margin:0 auto;padding:36px 0;text-align:center;width:80%}.DocSearch-Screen-Icon{color:var(--docsearch-muted-color);padding-bottom:12px}.DocSearch-NoResults-Prefill-List{display:inline-block;padding-bottom:24px;text-align:left}.DocSearch-NoResults-Prefill-List ul{display:inline-block;padding:8px 0 0}.DocSearch-NoResults-Prefill-List li{list-style-position:inside;list-style-type:"\xBB "}.DocSearch-Prefill{appearance:none;background:none;border:0;border-radius:1em;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;font-size:1em;font-weight:700;padding:0}.DocSearch-Prefill:focus,.DocSearch-Prefill:hover{outline:none;text-decoration:underline}.DocSearch-Footer{align-items:center;background:var(--docsearch-footer-background);border-radius:0 0 8px 8px;box-shadow:var(--docsearch-footer-shadow);display:flex;flex-direction:row-reverse;flex-shrink:0;height:var(--docsearch-footer-height);justify-content:space-between;padding:0 var(--docsearch-spacing);position:relative;user-select:none;width:100%;z-index:300}.DocSearch-Commands{color:var(--docsearch-muted-color);display:flex;list-style:none;margin:0;padding:0}.DocSearch-Commands li{align-items:center;display:flex}.DocSearch-Commands li:not(:last-of-type){margin-right:.8em}.DocSearch-Commands-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:2px;box-shadow:var(--docsearch-key-shadow);display:flex;height:18px;justify-content:center;margin-right:.4em;padding:0 0 1px;color:var(--docsearch-muted-color);border:0;width:20px}@media (max-width:750px){:root{--docsearch-spacing:10px;--docsearch-footer-height:40px}.DocSearch-Dropdown{height:100%}.DocSearch-Container{height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);position:absolute}.DocSearch-Footer{border-radius:0;bottom:0;position:absolute}.DocSearch-Hit-content-wrapper{display:flex;position:relative;width:80%}.DocSearch-Modal{border-radius:0;box-shadow:none;height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);margin:0;max-width:100%;width:100%}.DocSearch-Dropdown{max-height:calc(var(--docsearch-vh, 1vh)*100 - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height))}.DocSearch-Cancel{appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;flex:none;font:inherit;font-size:1em;font-weight:500;margin-left:var(--docsearch-spacing);outline:none;overflow:hidden;padding:0;user-select:none;white-space:nowrap}.DocSearch-Commands,.DocSearch-Hit-Tree{display:none}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}')();
var VPNavBarSearch_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n.VPNavBarSearch {\n  display: flex;\n  align-items: center;\n  padding-left: 16px;\n}\n@media (min-width: 768px) {\n.VPNavBarSearch {\n    flex-grow: 1;\n}\n}\n.DocSearch {\n  --docsearch-primary-color: var(--vt-c-brand);\n  --docsearch-highlight-color: var(--docsearch-primary-color);\n  --docsearch-text-color: var(--vt-c-text-1);\n  --docsearch-muted-color: var(--vt-c-text-2);\n  --docsearch-searchbox-shadow: none;\n  --docsearch-searchbox-focus-background: transparent;\n  --docsearch-key-gradient: transparent;\n  --docsearch-key-shadow: none;\n  --docsearch-modal-background: var(--vt-c-bg-soft);\n  --docsearch-footer-background: var(--vt-c-bg);\n}\n.dark .DocSearch {\n  --docsearch-modal-shadow: none;\n  --docsearch-footer-shadow: none;\n  --docsearch-logo-color: var(--vt-c-text-2);\n  --docsearch-hit-background: var(--vt-c-bg-mute);\n  --docsearch-hit-color: var(--vt-c-text-2);\n  --docsearch-hit-shadow: none;\n}\n.dark .DocSearch-Footer {\n  border-top: 1px solid var(--vt-c-divider);\n}\n.dark .DocSearch-Form {\n  background-color: var(--vt-c-bg-mute);\n}\n.DocSearch-Form {\n  background-color: white;\n  border: 1px solid var(--vt-c-brand);\n}\n.DocSearch-Button-Container {\n  align-items: center;\n  display: flex;\n}\n.DocSearch-Button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  width: 48px;\n  height: 55px;\n  background: transparent;\n}\n.DocSearch-Button:hover {\n  background: transparent;\n}\n.DocSearch-Button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.DocSearch-Button:focus:not(:focus-visible) {\n  outline: none !important;\n}\n@media (min-width: 768px) {\n.DocSearch-Button {\n    justify-content: flex-start;\n    width: 100%;\n}\n}\n.DocSearch-Button .DocSearch-Search-Icon {\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n  fill: currentColor;\n  width: 18px;\n  height: 18px;\n  position: relative;\n}\n@media (min-width: 768px) {\n.DocSearch-Button .DocSearch-Search-Icon {\n    top: 1px;\n    margin-right: 10px;\n    width: 15px;\n    height: 15px;\n}\n}\n.DocSearch-Button:hover .DocSearch-Search-Icon {\n  color: var(--vt-c-text-1);\n}\n.DocSearch-Button-Placeholder {\n  transition: color 0.5s;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  display: none;\n  padding: 0 10px 0 0;\n}\n@media (min-width: 960px) {\n.DocSearch-Button-Placeholder {\n    display: inline-block;\n}\n}\n.DocSearch-Button:hover .DocSearch-Button-Placeholder {\n  color: var(--vt-c-text-1);\n}\n.DocSearch-Button .DocSearch-Button-Key {\n  margin-top: 2px;\n  border: 1px solid var(--vt-c-divider);\n  border-right: none;\n  border-radius: 4px 0 0 4px;\n  display: none;\n  padding-left: 6px;\n  height: 22px;\n  line-height: 22px;\n  transition: color 0.5s, border-color 0.5s;\n  min-width: 0;\n}\n.DocSearch-Button .DocSearch-Button-Key + .DocSearch-Button-Key {\n  border-right: 1px solid var(--vt-c-divider);\n  border-left: none;\n  border-radius: 0 4px 4px 0;\n  padding-left: 2px;\n  padding-right: 6px;\n}\n.DocSearch-Button:hover .DocSearch-Button-Key {\n  border-color: var(--vt-c-brand-light);\n  color: var(--vt-c-brand-light);\n}\n@media (min-width: 768px) {\n.DocSearch-Button .DocSearch-Button-Key {\n    display: inline-block;\n}\n}\n.DocSearch-Button-Key {\n  font-size: 12px;\n  font-weight: 500;\n  height: 20px;\n  margin: 0;\n  width: auto;\n  color: var(--vt-c-text-3);\n  transition: color 0.5s;\n  display: inline-block;\n  padding: 0 1px;\n}\n")();
const _hoisted_1$n = {
  key: 0,
  class: "VPNavBarSearch"
};
const _hoisted_2$f = {
  type: "button",
  class: "DocSearch DocSearch-Button",
  "aria-label": "Search"
};
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Container" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    width: "20",
    height: "20",
    class: "DocSearch-Search-Icon",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
      stroke: "currentColor",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Placeholder" }, "Search")
], -1);
const _hoisted_4$7 = { class: "DocSearch-Button-Keys" };
const _hoisted_5$6 = /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Key" }, "K", -1);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  setup(__props) {
    const { theme } = useData();
    const VPAlgoliaSearchBox = defineAsyncComponent(() => __vitePreload(() => import("./chunks/VPAlgoliaSearchBox.a93cf4ef.js"), true ? [] : void 0));
    const loaded = ref(false);
    const metaKey = ref();
    onMounted(() => {
      if (!theme.value.algolia)
        return;
      metaKey.value.textContent = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "\u2318" : "Ctrl";
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove2();
        }
      };
      const remove2 = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      onUnmounted(remove2);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
      }
    }
    return (_ctx, _cache) => {
      return unref(theme).algolia ? (openBlock(), createElementBlock("div", _hoisted_1$n, [
        loaded.value ? (openBlock(), createBlock(unref(VPAlgoliaSearchBox), { key: 0 })) : (openBlock(), createElementBlock("div", {
          key: 1,
          id: "docsearch",
          onClick: load
        }, [
          createBaseVNode("button", _hoisted_2$f, [
            _hoisted_3$9,
            createBaseVNode("span", _hoisted_4$7, [
              createBaseVNode("span", {
                class: "DocSearch-Button-Key",
                ref_key: "metaKey",
                ref: metaKey
              }, "Meta", 512),
              _hoisted_5$6
            ])
          ])
        ]))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarMenuLink[data-v-4dd69db4] {\n  display: block;\n  padding: 0 12px;\n  line-height: calc(var(--vt-nav-height) - 1px);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n.VPNavBarMenuLink.active[data-v-4dd69db4] {\n  border-bottom: 1px solid var(--vt-c-brand);\n}\n.VPNavBarMenuLink[data-v-4dd69db4]:hover {\n  color: var(--vt-c-brand);\n}\n")();
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$I), {
        class: normalizeClass({
          VPNavBarMenuLink: true,
          active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch || __props.item.link, !!__props.item.activeMatch)
        }),
        href: __props.item.link,
        noIcon: true
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
});
var VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-4dd69db4"]]);
var VPNavBarMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarMenuGroup.active[data-v-fdb4a4c0] {\n  border-bottom: 1px solid var(--vt-c-brand);\n  height: var(--vt-nav-height);\n}\n")();
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$E), {
        class: normalizeClass({
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch, true)
        }),
        button: __props.item.text,
        items: __props.item.items
      }, null, 8, ["class", "button", "items"]);
    };
  }
});
var VPNavBarMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-fdb4a4c0"]]);
var VPNavBarMenu_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarMenu[data-v-6748bf24] {\n  display: none;\n}\n@media (min-width: 768px) {\n.VPNavBarMenu[data-v-6748bf24] {\n    display: flex;\n}\n}\n")();
const _withScopeId$6 = (n) => (pushScopeId("data-v-6748bf24"), n = n(), popScopeId(), n);
const _hoisted_1$m = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
};
const _hoisted_2$e = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "main-nav-aria-label",
  class: "visually-hidden"
}, "Main Navigation", -1));
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$m, [
        _hoisted_2$e,
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(config).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(VPNavBarMenuGroup, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-6748bf24"]]);
var VPNavBarAppearance_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarAppearance[data-v-4cb4d102] {\n  display: none;\n}\n@media (min-width: 1280px) {\n.VPNavBarAppearance[data-v-4cb4d102] {\n    display: block;\n}\n}\n")();
const _hoisted_1$l = {
  key: 0,
  class: "VPNavBarAppearance"
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$l, [
        createVNode(unref(_sfc_main$z))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-4cb4d102"]]);
var VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarSocialLinks[data-v-f49ff54e] {\n  display: none;\n  margin-right: -10px;\n}\n@media (min-width: 1280px) {\n.VPNavBarSocialLinks[data-v-f49ff54e] {\n    display: flex;\n}\n}\n")();
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).socialLinks ? (openBlock(), createBlock(unref(_sfc_main$B), {
        key: 0,
        class: "VPNavBarSocialLinks",
        size: "small",
        links: unref(config).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-f49ff54e"]]);
var VPNavBarExtra_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarExtra[data-v-6c512b7b] {\n  display: none;\n}\n@media (min-width: 768px) {\n.VPNavBarExtra[data-v-6c512b7b] {\n    display: block;\n}\n}\n@media (min-width: 1280px) {\n.VPNavBarExtra[data-v-6c512b7b] {\n    display: none;\n}\n}\n.item[data-v-6c512b7b] {\n  display: flex;\n  align-items: center;\n}\n.action[data-v-6c512b7b] {\n  margin-right: -2px;\n}\n.social-links[data-v-6c512b7b] {\n  margin: -4px -8px;\n}\n")();
const _withScopeId$5 = (n) => (pushScopeId("data-v-6c512b7b"), n = n(), popScopeId(), n);
const _hoisted_1$k = {
  key: 0,
  class: "vt-menu-group"
};
const _hoisted_2$d = { class: "vt-menu-item item" };
const _hoisted_3$8 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("p", { class: "vt-menu-label" }, "Appearance", -1));
const _hoisted_4$6 = { class: "vt-menu-action action" };
const _hoisted_5$5 = {
  key: 1,
  class: "vt-menu-group"
};
const _hoisted_6$3 = { class: "vt-menu-item item" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { config } = useConfig();
    const hasContent = computed(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _cache) => {
      return unref(hasContent) ? (openBlock(), createBlock(unref(_sfc_main$E), {
        key: 0,
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, {
        default: withCtx(() => [
          unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$k, [
            createBaseVNode("div", _hoisted_2$d, [
              _hoisted_3$8,
              createBaseVNode("div", _hoisted_4$6, [
                createVNode(unref(_sfc_main$z))
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(config).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
            createBaseVNode("div", _hoisted_6$3, [
              createVNode(unref(_sfc_main$B), {
                class: "social-links",
                size: "small",
                links: unref(config).socialLinks
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-6c512b7b"]]);
var VPNavBarHamburger_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarHamburger[data-v-5def386e] {\n  width: 40px;\n  height: var(--vt-nav-height);\n}\n@media (min-width: 768px) {\n.VPNavBarHamburger[data-v-5def386e] {\n    display: none;\n}\n}\n")();
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    const { config } = useConfig();
    const hasContent = computed(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _cache) => {
      return unref(hasContent) ? (openBlock(), createBlock(unref(_sfc_main$D), {
        key: 0,
        class: "VPNavBarHamburger",
        active: __props.active
      }, null, 8, ["active"])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-5def386e"]]);
var VPNavBar_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBar[data-v-49c99484] {\n  position: relative;\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  padding: 0 12px 0 24px;\n  height: var(--vt-nav-height);\n  background-color: var(--vt-c-bg);\n  white-space: nowrap;\n  transition: border-color 0.5s, background-color 0.5s;\n}\n@media (min-width: 768px) {\n.VPNavBar[data-v-49c99484] {\n    padding: 0 12px 0 32px;\n}\n}\n@media (min-width: 1280px) {\n.VPNavBar[data-v-49c99484] {\n    padding: 0 32px;\n}\n}\n.container[data-v-49c99484] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: var(--vp-screen-max-width);\n}\n.content[data-v-49c99484] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-grow: 1;\n}\n.menu + .appearance[data-v-49c99484] {\n  margin-left: 8px;\n}\n.menu + .social-links[data-v-49c99484] {\n  margin-left: 12px;\n}\n.appearance + .social-links[data-v-49c99484] {\n  margin-left: 12px;\n}\n")();
const _hoisted_1$j = { class: "VPNavBar" };
const _hoisted_2$c = { class: "container" };
const _hoisted_3$7 = { class: "content" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
        createBaseVNode("div", _hoisted_2$c, [
          createVNode(VPNavBarTitle, null, {
            "navbar-title": withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-title", {}, void 0, true)
            ]),
            _: 3
          }),
          createBaseVNode("div", _hoisted_3$7, [
            createVNode(_sfc_main$x, { class: "search" }),
            createVNode(VPNavBarMenu, { class: "menu" }),
            createVNode(VPNavBarAppearance, { class: "appearance" }),
            createVNode(VPNavBarSocialLinks, { class: "social-links" }),
            createVNode(VPNavBarExtra, { class: "extra" }),
            createVNode(VPNavBarHamburger, {
              class: "hamburger",
              active: __props.isScreenOpen,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
            }, null, 8, ["active"])
          ])
        ])
      ]);
    };
  }
});
var VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-49c99484"]]);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
var VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenMenuLink[data-v-98e9e1be] {\n  display: block;\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  padding: 12px 0 11px;\n  line-height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--vt-c-text-1);\n  transition: border-color 0.5s, color 0.25s;\n}\n.VPNavScreenMenuLink[data-v-98e9e1be]:hover {\n  color: var(--vt-c-brand);\n}\n")();
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$I), {
        class: "VPNavScreenMenuLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.text), 1)
        ]),
        _: 1
      }, 8, ["href", "onClick"]);
    };
  }
});
var VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-98e9e1be"]]);
var VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenMenuGroupLink[data-v-1895d962] {\n  display: block;\n  line-height: 32px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n  margin-left: 0.6em;\n}\n.VPNavScreenMenuGroupLink[data-v-1895d962]:hover {\n  color: var(--vt-c-brand);\n}\n")();
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$I), {
        class: "VPNavScreenMenuGroupLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.text), 1)
        ]),
        _: 1
      }, 8, ["href", "onClick"]);
    };
  }
});
var VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-1895d962"]]);
var VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenMenuGroupSection[data-v-def32876] {\n  display: block;\n}\n.title[data-v-def32876] {\n  line-height: 32px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--vt-c-text-2);\n  text-transform: uppercase;\n  transition: color 0.25s;\n}\n")();
const _hoisted_1$i = { class: "VPNavScreenMenuGroupSection" };
const _hoisted_2$b = {
  key: 0,
  class: "title"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$b, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createBlock(VPNavScreenMenuGroupLink, {
            key: item.text,
            text: item.text,
            link: item.link
          }, null, 8, ["text", "link"]);
        }), 128))
      ]);
    };
  }
});
var VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-def32876"]]);
var VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenMenuGroup[data-v-2fed6d44] {\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  height: 48px;\n  overflow: hidden;\n  transition: border-color 0.5s;\n}\n.VPNavScreenMenuGroup .items[data-v-2fed6d44] {\n  visibility: hidden;\n}\n.VPNavScreenMenuGroup.open .items[data-v-2fed6d44] {\n  visibility: visible;\n}\n.VPNavScreenMenuGroup.open[data-v-2fed6d44] {\n  padding-bottom: 10px;\n  height: auto;\n}\n.VPNavScreenMenuGroup.open .button[data-v-2fed6d44] {\n  padding-bottom: 6px;\n  color: var(--vt-c-brand);\n}\n.VPNavScreenMenuGroup.open .button-icon[data-v-2fed6d44] {\n  transform: rotate(45deg);\n}\n.button[data-v-2fed6d44] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 4px 11px 0;\n  width: 100%;\n  line-height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n.button[data-v-2fed6d44]:hover {\n  color: var(--vt-c-brand);\n}\n.button-icon[data-v-2fed6d44] {\n  width: 14px;\n  height: 14px;\n  fill: var(--vt-c-text-2);\n  transition: fill 0.5s, transform 0.25s;\n}\n.group[data-v-2fed6d44]:first-child {\n  padding-top: 4px;\n}\n.group + .group[data-v-2fed6d44] {\n  padding-top: 8px;\n}\n.group + .item[data-v-2fed6d44] {\n  padding-top: 8px;\n}\n")();
const _hoisted_1$h = ["aria-controls", "aria-expanded"];
const _hoisted_2$a = { class: "button-text" };
const _hoisted_3$6 = ["id"];
const _hoisted_4$5 = {
  key: 1,
  class: "group"
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(() => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavScreenMenuGroup", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "button",
          "aria-controls": unref(groupId),
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          createBaseVNode("span", _hoisted_2$a, toDisplayString(__props.text), 1),
          createVNode(unref(VTIconPlus), { class: "button-icon" })
        ], 8, _hoisted_1$h),
        createBaseVNode("div", {
          id: unref(groupId),
          class: "items"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createElementBlock("div", {
                key: item.text,
                class: "item"
              }, [
                createVNode(VPNavScreenMenuGroupLink, {
                  text: item.text,
                  link: item.link
                }, null, 8, ["text", "link"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_4$5, [
                createVNode(VPNavScreenMenuGroupSection, {
                  text: item.text,
                  items: item.items
                }, null, 8, ["text", "items"])
              ]))
            ], 64);
          }), 128))
        ], 8, _hoisted_3$6)
      ], 2);
    };
  }
});
var VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-2fed6d44"]]);
const _hoisted_1$g = {
  key: 0,
  class: "VPNavScreenMenu"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$g, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(config).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
              key: 0,
              text: item.text,
              link: item.link
            }, null, 8, ["text", "link"])) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
              key: 1,
              text: item.text || "",
              items: item.items
            }, null, 8, ["text", "items"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenAppearance[data-v-95197c88] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  padding: 12px 14px 12px 16px;\n  background-color: var(--vt-c-bg-soft);\n  transition: background-color 0.5s;\n}\n.text[data-v-95197c88] {\n  line-height: 24px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n}\n")();
const _withScopeId$4 = (n) => (pushScopeId("data-v-95197c88"), n = n(), popScopeId(), n);
const _hoisted_1$f = {
  key: 0,
  class: "VPNavScreenAppearance"
};
const _hoisted_2$9 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("p", { class: "text" }, "Appearance", -1));
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$f, [
        _hoisted_2$9,
        createVNode(unref(_sfc_main$z))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-95197c88"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).socialLinks ? (openBlock(), createBlock(unref(_sfc_main$B), {
        key: 0,
        class: "VPNavScreenSocialLinks",
        size: "medium",
        links: unref(config).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreen_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreen[data-v-1b8c13a9] {\n  position: fixed;\n  top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px));\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0 32px;\n  width: 100%;\n  background-color: var(--vt-c-bg);\n  transition: background-color 0.5s;\n  overflow-y: auto;\n}\n.VPNavScreen.fade-enter-active[data-v-1b8c13a9],\n.VPNavScreen.fade-leave-active[data-v-1b8c13a9] {\n  transition: opacity 0.25s;\n}\n.VPNavScreen.fade-enter-active .container[data-v-1b8c13a9],\n.VPNavScreen.fade-leave-active .container[data-v-1b8c13a9] {\n  transition: transform 0.25s ease;\n}\n.VPNavScreen.fade-enter-from[data-v-1b8c13a9],\n.VPNavScreen.fade-leave-to[data-v-1b8c13a9] {\n  opacity: 0;\n}\n.VPNavScreen.fade-enter-from .container[data-v-1b8c13a9],\n.VPNavScreen.fade-leave-to .container[data-v-1b8c13a9] {\n  transform: translateY(-8px);\n}\n@media (min-width: 768px) {\n.VPNavScreen[data-v-1b8c13a9] {\n    display: none;\n}\n}\n.container[data-v-1b8c13a9] {\n  margin: 0 auto;\n  padding: 24px 0 96px;\n  max-width: 288px;\n}\n.menu + .appearance[data-v-1b8c13a9] {\n  margin-top: 24px;\n}\n.menu + .social-links[data-v-1b8c13a9] {\n  margin-top: 16px;\n}\n.appearance + .social-links[data-v-1b8c13a9] {\n  margin-top: 12px;\n}\n")();
const _hoisted_1$e = { class: "container" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(screen.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: lockBodyScroll,
        onAfterLeave: unlockBodyScroll
      }, {
        default: withCtx(() => [
          __props.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "VPNavScreen",
            ref_key: "screen",
            ref: screen
          }, [
            createBaseVNode("div", _hoisted_1$e, [
              createVNode(_sfc_main$k, { class: "menu" }),
              createVNode(VPNavScreenAppearance, { class: "appearance" }),
              createVNode(_sfc_main$i, { class: "social-links" })
            ])
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-1b8c13a9"]]);
var VPNav_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNav[data-v-445b43d9] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: var(--vp-z-index-nav);\n}\n@media (min-width: 960px) {\n.VPNav[data-v-445b43d9] {\n    position: fixed;\n    top: var(--vt-banner-height, 0px);\n    width: 100%;\n}\n}\n")();
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { hasSidebar } = useSidebar();
    provide("close-screen", closeScreen);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["VPNav nav-bar", { stick: !unref(hasSidebar) }])
      }, [
        createVNode(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "navbar-title": withCtx(() => [
            renderSlot(_ctx.$slots, "navbar-title", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]),
        createVNode(VPNavScreen, { open: unref(isScreenOpen) }, null, 8, ["open"])
      ], 2);
    };
  }
});
var VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-445b43d9"]]);
var VPLocalNav_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPLocalNav[data-v-2efd797e] {\n  position: sticky;\n  top: var(--vt-banner-height, 0px);\n  left: 0;\n  z-index: var(--vp-z-index-local-nav);\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  background-color: var(--vt-c-bg);\n  transition: border-color 0.5s, background-color 0.5s;\n}\n@media (min-width: 960px) {\n.VPLocalNav[data-v-2efd797e] {\n    display: none;\n}\n}\n.menu[data-v-2efd797e] {\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  line-height: 47px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n}\n.menu[data-v-2efd797e]:hover {\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n@media (min-width: 768px) {\n.menu[data-v-2efd797e] {\n    padding: 0 32px;\n}\n}\n.menu-icon[data-v-2efd797e] {\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  fill: currentColor;\n}\n.top-link[data-v-2efd797e] {\n  padding: 0 24px;\n  line-height: 47px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n}\n.top-link[data-v-2efd797e]:hover {\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n@media (min-width: 768px) {\n.top-link[data-v-2efd797e] {\n    padding: 0 32px;\n}\n}\n")();
const _withScopeId$3 = (n) => (pushScopeId("data-v-2efd797e"), n = n(), popScopeId(), n);
const _hoisted_1$d = {
  key: 0,
  class: "VPLocalNav"
};
const _hoisted_2$8 = ["aria-expanded"];
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "menu-text" }, "Menu", -1));
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    function scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("div", _hoisted_1$d, [
        createBaseVNode("button", {
          class: "menu",
          "aria-expanded": __props.open,
          "aria-controls": "VPSidebarNav",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
        }, [
          createVNode(unref(VTIconAlignLeft), { class: "menu-icon" }),
          _hoisted_3$5
        ], 8, _hoisted_2$8),
        unref(frontmatter).returnToTop !== false ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "top-link",
          href: "#",
          onClick: scrollToTop
        }, "Return to top")) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
var VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-2efd797e"]]);
var VPSkipLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPSkipLink[data-v-76198844] {\n  top: 0.25rem;\n  left: 0.25rem;\n  padding: 0.65rem 1.5rem;\n  z-index: 999;\n  font-size: 0.9em;\n  font-weight: bold;\n  text-decoration: none;\n  color: var(--vt-c-green);\n  box-shadow: var(--vt-shadow-3);\n  background-color: var(--vt-c-bg);\n  border-radius: 8px;\n}\n.dark .VPSkipLink[data-v-76198844] {\n  color: var(--vt-c-green);\n}\n.VPSkipLink[data-v-76198844]:focus {\n  height: auto;\n  width: auto;\n  clip: auto;\n  clip-path: none;\n}\n")();
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    const focusOnTargetAnchor = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("span", {
          ref_key: "backToTop",
          ref: backToTop,
          tabindex: "-1"
        }, null, 512),
        createBaseVNode("a", {
          href: "#VPContent",
          class: "VPSkipLink visually-hidden",
          onClick: focusOnTargetAnchor
        }, " Skip to content ")
      ], 64);
    };
  }
});
var VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-76198844"]]);
const _hoisted_1$c = {
  class: "visually-hidden",
  "aria-live": "polite"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPAnnouncer",
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, toDisplayString(unref(page).title) + " has loaded", 1);
    };
  }
});
var VPSidebarLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.link[data-v-8dffcf6a] {\n  display: block;\n  padding: 6px 0;\n}\n@media (min-width: 960px) {\n.link[data-v-8dffcf6a] {\n    padding: 4px 0;\n}\n}\n.link:hover .link-text[data-v-8dffcf6a] {\n  color: var(--vt-c-brand-text-1);\n  transition: color 0.25s;\n}\n.link.active .link-text[data-v-8dffcf6a] {\n  font-weight: 600;\n  color: var(--vt-c-brand);\n  transition: color 0.25s;\n}\n.link-text[data-v-8dffcf6a] {\n  line-height: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n}\n")();
const _hoisted_1$b = ["href"];
const _hoisted_2$7 = { class: "link-text" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarLink",
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    const closeSideBar = inject("close-sidebar");
    const isActiveLink = (relativePath, link2) => {
      link2 = link2.replace("/xiao-you-editor-docs/", "");
      link2 = link2.replace(".html", "");
      relativePath = relativePath.replace(".md", "");
      return relativePath == link2;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass({ link: true, active: isActiveLink(unref(page).relativePath, __props.item.link) }),
        href: __props.item.link,
        onClick: _cache[0] || (_cache[0] = (...args) => unref(closeSideBar) && unref(closeSideBar)(...args))
      }, [
        createBaseVNode("p", _hoisted_2$7, toDisplayString(__props.item.text), 1)
      ], 10, _hoisted_1$b);
    };
  }
});
var VPSidebarLink = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-8dffcf6a"]]);
var VPSidebarGroup_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.title[data-v-6d0ed96e] {\n  padding: 6px 0;\n}\n@media (min-width: 960px) {\n.title[data-v-6d0ed96e] {\n    padding: 4px 0;\n}\n}\n.title-text[data-v-6d0ed96e] {\n  line-height: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--vt-c-text-1);\n  transition: color 0.5s;\n}\n")();
const _hoisted_1$a = { class: "VPSidebarGroup" };
const _hoisted_2$6 = { class: "title" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    function hasActiveLink() {
      const { relativePath } = page.value;
      return props.items.some((item) => isActive(relativePath, item.link));
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("h2", {
            class: normalizeClass(["title-text", { active: hasActiveLink() }])
          }, toDisplayString(__props.text), 3)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createBlock(VPSidebarLink, {
            key: item.link,
            item
          }, null, 8, ["item"]);
        }), 128))
      ]);
    };
  }
});
var VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-6d0ed96e"]]);
var VPSidebar_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPSidebar[data-v-270b4438] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: var(--vp-z-index-sidebar);\n  padding: 0 32px 96px;\n  width: calc(100vw - 64px);\n  max-width: var(--vp-sidebar-width-mobile);\n  opacity: 0;\n  background-color: var(--vt-c-bg);\n  box-shadow: var(--vt-c-shadow-3);\n  overflow-x: hidden;\n  overflow-y: auto;\n  transform: translateX(-100%);\n  transition: background-color 0.5s, opacity 0.5s, transform 0.3s ease;\n  /* -ms-overflow-style: none; */\n  /* scrollbar-width: none; */\n}\n#VPSidebarNav[data-v-270b4438] {\n  padding-top: 24px;\n  outline: 0;\n}\n\n/* .VPSidebar::-webkit-scrollbar {\n  display: none;\n} */\n@media (min-width: 960px) {\n.VPSidebar[data-v-270b4438] {\n    top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px));\n    z-index: 1;\n    border-right: 1px solid var(--vt-c-divider-light);\n    width: var(--vp-sidebar-width-small);\n    max-width: 100%;\n    opacity: 1;\n    visibility: visible;\n    box-shadow: none;\n    transform: translateX(0);\n    transition: border-color 0.5s, background-color 0.5s;\n}\n}\n@media (min-width: 1440px) {\n.VPSidebar[data-v-270b4438] {\n    padding: 0 32px 96px calc((100% - var(--vp-screen-max-width)) / 2);\n    width: calc(\n      (100% - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-small)\n    );\n}\n}\n.VPSidebar.open[data-v-270b4438] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n  transition: background-color 0.5s, opacity 0.25s,\n    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.dark .VPSidebar[data-v-270b4438] {\n  box-shadow: var(--vt-shadow-1);\n}\n.group + .group[data-v-270b4438] {\n  padding-top: 24px;\n}\n@media (min-width: 960px) {\n.group + .group[data-v-270b4438] {\n    padding-top: 16px;\n}\n}\n")();
const _withScopeId$2 = (n) => (pushScopeId("data-v-270b4438"), n = n(), popScopeId(), n);
const _hoisted_1$9 = {
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
};
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "sidebar-aria-label",
  class: "visually-hidden"
}, "Sidebar Navigation", -1));
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebar, hasSidebar } = useSidebar();
    let navEl = ref(null);
    watchPostEffect(async () => {
      var _a2;
      if (props.open) {
        await nextTick();
        (_a2 = navEl.value) == null ? void 0 : _a2.focus();
      }
    });
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
        key: 0,
        ref_key: "navEl",
        ref: navEl,
        class: normalizeClass(["VPSidebar", { open: __props.open }]),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createBaseVNode("nav", _hoisted_1$9, [
          renderSlot(_ctx.$slots, "top", {}, void 0, true),
          _hoisted_2$5,
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebar), (group) => {
            return openBlock(), createElementBlock("div", {
              key: group.text,
              class: "group"
            }, [
              createVNode(VPSidebarGroup, {
                text: group.text,
                items: group.items
              }, null, 8, ["text", "items"])
            ]);
          }), 128)),
          renderSlot(_ctx.$slots, "bottom", {}, void 0, true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-270b4438"]]);
var VPFooter_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPFooter[data-v-b0c98e9a] {\n  border-top: 1px solid var(--vt-c-bg-soft);\n  padding: 23px 0 24px;\n  background-color: var(--vt-c-bg-soft);\n  transition: border-top 0.5s, background-color 0.5s;\n}\n.dark .VPFooter[data-v-b0c98e9a] {\n  border-top: 1px solid var(--vt-c-divider-light);\n  background-color: var(--vt-c-bg);\n}\n.license[data-v-b0c98e9a],\n.copyright[data-v-b0c98e9a] {\n  text-align: center;\n  line-height: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.25s;\n}\n.link[data-v-b0c98e9a] {\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n.link[data-v-b0c98e9a]:hover {\n  color: var(--vt-c-text-2);\n}\n")();
const _hoisted_1$8 = { class: "VPFooter" };
const _hoisted_2$4 = {
  key: 0,
  class: "license"
};
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode(" Released under the ");
const _hoisted_4$4 = /* @__PURE__ */ createTextVNode(". ");
const _hoisted_5$4 = {
  key: 1,
  class: "copyright"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      var _a2, _b2;
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        ((_a2 = unref(theme).footer) == null ? void 0 : _a2.license) ? (openBlock(), createElementBlock("p", _hoisted_2$4, [
          _hoisted_3$4,
          createVNode(unref(_sfc_main$I), {
            class: "link",
            href: unref(theme).footer.license.link,
            "no-icon": ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(theme).footer.license.text), 1)
            ]),
            _: 1
          }, 8, ["href"]),
          _hoisted_4$4
        ])) : createCommentVNode("", true),
        ((_b2 = unref(theme).footer) == null ? void 0 : _b2.copyright) ? (openBlock(), createElementBlock("p", _hoisted_5$4, toDisplayString(unref(theme).footer.copyright), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
var VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-b0c98e9a"]]);
const _hoisted_1$7 = { class: "VPContentPage" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPContentPage",
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("main", null, [
          createVNode(_component_Content)
        ]),
        renderSlot(_ctx.$slots, "footer-before"),
        unref(frontmatter).footer !== false ? (openBlock(), createBlock(VPFooter, { key: 0 })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "footer-after")
      ]);
    };
  }
});
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!window2)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnMounted(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in update)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
__spreadValues$3({
  text: ""
}, initialRect);
function resolveHeaders(headers) {
  return mapHeaders(groupHeaders(headers));
}
function groupHeaders(headers) {
  headers = headers.map((h2) => Object.assign({}, h2));
  let lastH2;
  for (const h2 of headers) {
    if (h2.level === 2) {
      lastH2 = h2;
    } else if (lastH2 && h2.level <= 3) {
      (lastH2.children || (lastH2.children = [])).push(h2);
    }
  }
  return headers.filter((h2) => h2.level === 2);
}
function mapHeaders(headers) {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : void 0,
    hidden: header.hidden
  }));
}
function useActiveAnchor(container, bg) {
  const isOutlineEnabled = useMediaQuery("(min-width: 1280px)");
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  function setActiveLink() {
    if (!isOutlineEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => links.some((link2) => link2.hash === anchor.hash && anchor.offsetParent !== null));
    if (anchors.length && window.scrollY + window.innerHeight === document.body.offsetHeight) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        history.replaceState(null, document.title, hash ? hash : " ");
        activateLink(hash);
        return;
      }
    }
  }
  let prevActiveLink = null;
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    const activeLink = prevActiveLink = hash == null ? null : container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
      bg.value.style.opacity = "1";
      bg.value.style.top = activeLink.offsetTop + 33 + "px";
    } else {
      bg.value.style.opacity = "0";
      bg.value.style.top = "33px";
    }
  }
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
const pageOffset = 56;
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - pageOffset - 15;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
function throttleAndDebounce(fn, delay) {
  let timeout;
  let called = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
}
var VPContentDocOutline_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPContentDocOutline[data-v-45d7ae98] {\n  font-size: 13px;\n  font-weight: 500;\n  position: relative;\n}\n.outline-title[data-v-45d7ae98] {\n  font-weight: 700;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.4px;\n}\n.outline-link[data-v-45d7ae98] {\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n  line-height: 28px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.outline-link[data-v-45d7ae98]:hover,\n.outline-link.active[data-v-45d7ae98] {\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n.outline-link.nested[data-v-45d7ae98] {\n  padding-left: 1em;\n}\n.outline-marker[data-v-45d7ae98] {\n  opacity: 0;\n  position: absolute;\n  background-color: var(--vt-c-green);\n  border-radius: 4px;\n  width: 4px;\n  height: 20px;\n  top: 32px;\n  left: -12px;\n  z-index: 0;\n  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), opacity 0.25s,\n    background-color 0.5s;\n}\n.root[data-v-45d7ae98] {\n  z-index: 1;\n  position: relative;\n}\n")();
const _withScopeId$1 = (n) => (pushScopeId("data-v-45d7ae98"), n = n(), popScopeId(), n);
const _hoisted_1$6 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "outline-title" }, "On this page", -1));
const _hoisted_2$3 = { "aria-labelledby": "doc-outline-aria-label" };
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "doc-outline-aria-label",
  class: "visually-hidden"
}, "Table of Contents for current page", -1));
const _hoisted_4$3 = { class: "root" };
const _hoisted_5$3 = ["href"];
const _hoisted_6$2 = { key: 0 };
const _hoisted_7$2 = ["href"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPContentDocOutline",
  setup(__props) {
    const { page, frontmatter } = useData();
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    const filterHeaders = inject("filter-headers", null);
    const filteredHeaders = computed(() => {
      return filterHeaders ? page.value.headers.map((h2) => {
        return filterHeaders(h2) ? h2 : Object.assign({}, h2, { hidden: true });
      }) : page.value.headers;
    });
    const handleClick = ({ target: el }) => {
      const id = "#" + el.href.split("#")[1];
      const heading = document.querySelector(id);
      heading == null ? void 0 : heading.focus();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPContentDocOutline",
        ref_key: "container",
        ref: container
      }, [
        createBaseVNode("div", {
          class: "outline-marker",
          ref_key: "marker",
          ref: marker
        }, null, 512),
        _hoisted_1$6,
        createBaseVNode("nav", _hoisted_2$3, [
          _hoisted_3$3,
          createBaseVNode("ul", _hoisted_4$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(resolveHeaders)(unref(filteredHeaders)), ({ text, link: link2, children, hidden }) => {
              return withDirectives((openBlock(), createElementBlock("li", null, [
                createBaseVNode("a", {
                  class: "outline-link",
                  href: link2,
                  onClick: handleClick
                }, toDisplayString(text), 9, _hoisted_5$3),
                children && unref(frontmatter).outline === "deep" ? (openBlock(), createElementBlock("ul", _hoisted_6$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(children, ({ text: text2, link: link22, hidden: hidden2 }) => {
                    return withDirectives((openBlock(), createElementBlock("li", null, [
                      createBaseVNode("a", {
                        class: "outline-link nested",
                        href: link22,
                        onClick: handleClick
                      }, toDisplayString(text2), 9, _hoisted_7$2)
                    ], 512)), [
                      [vShow, !hidden2]
                    ]);
                  }), 256))
                ])) : createCommentVNode("", true)
              ], 512)), [
                [vShow, !hidden]
              ]);
            }), 256))
          ])
        ])
      ], 512);
    };
  }
});
var VPContentDocOutline = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-45d7ae98"]]);
var VPContentDocFooter_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPContentDocFooter[data-v-b25c0d9c] {\n  border-top: 1px solid var(--vt-c-divider-light);\n  padding-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n}\na[data-v-b25c0d9c] {\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  max-width: 48%;\n}\n.desc[data-v-b25c0d9c] {\n  font-size: 11px;\n  color: var(--vt-c-text-2);\n  display: block;\n}\n.title[data-v-b25c0d9c] {\n  color: var(--vt-c-brand);\n  transition: color 0.25s;\n}\na:hover .title[data-v-b25c0d9c] {\n  color: var(--vt-c-brand-highlight);\n}\n.next-link[data-v-b25c0d9c] {\n  margin-left: auto;\n  text-align: right;\n}\n.vt-link-icon[data-v-b25c0d9c] {\n  margin: -2px 0 0;\n  vertical-align: middle;\n}\n")();
const _hoisted_1$5 = {
  key: 0,
  class: "VPContentDocFooter"
};
const _hoisted_2$2 = ["href"];
const _hoisted_3$2 = { class: "desc" };
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode(" Previous");
const _hoisted_5$2 = { class: "title" };
const _hoisted_6$1 = ["href"];
const _hoisted_7$1 = { class: "desc" };
const _hoisted_8$1 = /* @__PURE__ */ createTextVNode("Next ");
const _hoisted_9$1 = { class: "title" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPContentDocFooter",
  setup(__props) {
    const { page, theme } = useData();
    const links = computed(() => {
      const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath);
      const candidates = getFlatSideBarLinks(sidebar);
      const index2 = candidates.findIndex((link2) => isActive(page.value.relativePath, link2.link));
      return {
        prev: candidates[index2 - 1],
        next: candidates[index2 + 1]
      };
    });
    function getFlatSideBarLinks(sidebar) {
      const links2 = [];
      for (const group of sidebar) {
        for (const link2 of group.items) {
          links2.push(link2);
        }
      }
      return links2;
    }
    return (_ctx, _cache) => {
      return unref(links).prev || unref(links).next ? (openBlock(), createElementBlock("footer", _hoisted_1$5, [
        unref(links).prev ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "prev-link",
          href: unref(normalizeLink)(unref(links).prev.link)
        }, [
          createBaseVNode("span", _hoisted_3$2, [
            createVNode(unref(VTIconChevronLeft), { class: "vt-link-icon" }),
            _hoisted_4$2
          ]),
          createBaseVNode("span", _hoisted_5$2, toDisplayString(unref(links).prev.text), 1)
        ], 8, _hoisted_2$2)) : createCommentVNode("", true),
        unref(links).next ? (openBlock(), createElementBlock("a", {
          key: 1,
          class: "next-link",
          href: unref(normalizeLink)(unref(links).next.link)
        }, [
          createBaseVNode("span", _hoisted_7$1, [
            _hoisted_8$1,
            createVNode(unref(VTIconChevronRight), { class: "vt-link-icon" })
          ]),
          createBaseVNode("span", _hoisted_9$1, toDisplayString(unref(links).next.text), 1)
        ], 8, _hoisted_6$1)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
var VPContentDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b25c0d9c"]]);
var VPCarbonAds_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n.VPCarbonAds {\n  margin: 28px 0;\n  padding: 20px 24px;\n  background-color: var(--vt-c-bg-soft);\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 1.4;\n  color: var(--vt-c-text-2);\n  text-align: center;\n  transition: color 0.5s, background-color 0.5s;\n}\n.VPCarbonAds img {\n  margin: 0 auto 12px;\n  border-radius: 4px;\n}\n.VPCarbonAds .carbon-poweredby {\n  display: block;\n  margin-top: 6px;\n  text-transform: uppercase;\n  transition: color 0.5s;\n  color: var(--vt-c-text-3);\n  font-size: 10px;\n}\n")();
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPCarbonAds",
  setup(__props) {
    const { theme } = useData();
    const carbonOptions = theme.value.carbonAds;
    const container = ref();
    const isWide = useMediaQuery("(min-width: 1280px)");
    let hasInitalized = false;
    function init() {
      if (!hasInitalized) {
        hasInitalized = true;
        const s = document.createElement("script");
        s.id = "_carbonads_js";
        s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonOptions.code}&placement=${carbonOptions.placement}`;
        s.async = true;
        container.value.appendChild(s);
      }
    }
    if (carbonOptions) {
      onMounted(() => {
        if (isWide.value) {
          init();
        } else {
          watch(isWide, (wide) => wide && init());
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPCarbonAds",
        ref_key: "container",
        ref: container
      }, null, 512);
    };
  }
});
var VPContentDoc_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPContentDoc[data-v-1e22784c] {\n  padding: 32px 24px 96px;\n}\n.vt-doc[data-v-1e22784c] {\n  margin-bottom: 54px;\n}\n.content[data-v-1e22784c] {\n  margin: 0 auto;\n  max-width: 688px;\n  position: relative;\n}\n.aside[data-v-1e22784c] {\n  position: relative;\n  display: none;\n  flex-shrink: 0;\n  padding-left: 64px;\n  width: 320px;\n}\n.aside-container[data-v-1e22784c] {\n  position: sticky;\n  width: 224px;\n  top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px) + 24px);\n  bottom: 0;\n}\n.aside-container[data-v-1e22784c]::-webkit-scrollbar {\n  display: none;\n}\n.edit-link[data-v-1e22784c] {\n  margin: 0 0 32px;\n  /* text-align: center; */\n}\n.edit-link .vt-link[data-v-1e22784c] {\n  font-size: 14px;\n  color: var(--vt-c-brand);\n  font-weight: 500;\n}\n.vt-icon[data-v-1e22784c] {\n  width: 18px;\n  height: 18px;\n  color: var(--vt-c-brand);\n  display: inline-block;\n  margin-right: 8px;\n  position: relative;\n  top: -1px;\n}\n@media (min-width: 768px) {\n.VPContentDoc[data-v-1e22784c] {\n    padding: 48px 32px 96px;\n}\n}\n@media (min-width: 960px) {\n.VPContentDoc[data-v-1e22784c] {\n    padding: 64px 64px 96px;\n}\n}\n@media (min-width: 1280px) {\n.VPContentDoc[data-v-1e22784c] {\n    padding: 64px 0 96px 64px;\n}\n.VPContentDoc[data-v-1e22784c]:not(.has-sidebar.has-aside) {\n    padding-left: calc((100vw - 688px) / 2);\n}\n.VPContentDoc.has-aside[data-v-1e22784c]:not(.has-sidebar) {\n    padding-left: calc((100vw - 688px - 320px) / 2);\n}\n.container[data-v-1e22784c] {\n    display: flex;\n}\n.content[data-v-1e22784c] {\n    min-width: 620px;\n    margin: 0;\n    order: 1;\n}\n.VPContentDoc:not(.has-aside) .content[data-v-1e22784c] {\n    min-width: 688px;\n}\n.aside[data-v-1e22784c] {\n    display: block;\n    order: 2;\n}\n}\n@media (min-width: 1440px) {\n.VPContentDoc[data-v-1e22784c] {\n    padding: 64px 0 96px 96px;\n}\n.aside[data-v-1e22784c] {\n    padding-left: 96px;\n}\n}\n")();
const _hoisted_1$4 = { class: "container" };
const _hoisted_2$1 = {
  key: 0,
  class: "aside"
};
const _hoisted_3$1 = { class: "aside-container" };
const _hoisted_4$1 = { class: "content" };
const _hoisted_5$1 = {
  key: 0,
  class: "edit-link"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VPContentDoc",
  setup(__props) {
    const { page, frontmatter, theme } = useData();
    const hashMatch = /#(\w+)$/;
    const repoUrl = computed(() => {
      var _a2, _b2;
      const repo = ((_a2 = theme.value.editLink) == null ? void 0 : _a2.repo) || "vuejs/docs";
      const branch = ((_b2 = repo.match(hashMatch)) == null ? void 0 : _b2[1]) || "main";
      return `https://github.com/${repo.split("#")[0]}/edit/${branch}/src/${page.value.relativePath}`;
    });
    const pageClass = computed(() => {
      const { relativePath } = page.value;
      return relativePath.slice(0, relativePath.indexOf("/"));
    });
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPContentDoc", { "has-aside": unref(frontmatter).aside !== false }])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          unref(frontmatter).aside !== false ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              renderSlot(_ctx.$slots, "aside-top", {}, void 0, true),
              unref(page).headers && unref(frontmatter).outline !== false ? (openBlock(), createBlock(VPContentDocOutline, { key: 0 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true),
              unref(theme).carbonAds && unref(frontmatter).ads !== false ? (openBlock(), createBlock(_sfc_main$5, { key: 1 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4$1, [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true),
            createBaseVNode("main", null, [
              createVNode(_component_Content, {
                class: normalizeClass(["vt-doc", unref(pageClass)])
              }, null, 8, ["class"]),
              unref(theme).editLink && unref(frontmatter).editLink !== false ? (openBlock(), createElementBlock("p", _hoisted_5$1, [
                createVNode(unref(VTIconEdit), { class: "vt-icon" }),
                createVNode(unref(_sfc_main$I), {
                  href: unref(repoUrl),
                  "no-icon": true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(theme).editLink.text), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true),
            unref(frontmatter).footer !== false ? (openBlock(), createBlock(VPContentDocFooter, { key: 0 })) : createCommentVNode("", true)
          ])
        ])
      ], 2);
    };
  }
});
var VPContentDoc = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1e22784c"]]);
var VPNotFound_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.vt-doc[data-v-6ccbe3a8] {\n  padding: 32px 48px;\n  background-color: var(--vt-c-bg-soft);\n  margin: 32px;\n  border-radius: 8px;\n}\n.not-found-path[data-v-6ccbe3a8] {\n  font-family: var(--vt-font-family-mono);\n  color: var(--vt-c-text-code);\n}\n")();
const _withScopeId = (n) => (pushScopeId("data-v-6ccbe3a8"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "vt-doc" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Page Not Found", -1));
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" You found a dead link: ");
const _hoisted_4 = { class: "not-found-path" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_6 = { key: 0 };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Please ");
const _hoisted_8 = ["href"];
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" so we can fix it.");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VPNotFound",
  setup(__props) {
    const { theme } = useData();
    const route = useRoute();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _hoisted_2,
        createBaseVNode("p", null, [
          _hoisted_3,
          createBaseVNode("span", _hoisted_4, toDisplayString(unref(route).path), 1),
          _hoisted_5,
          unref(theme).repo ? (openBlock(), createElementBlock("span", _hoisted_6, [
            _hoisted_7,
            createBaseVNode("a", {
              href: `https://github.com/${unref(theme).repo}`,
              target: "_blank"
            }, "let us know", 8, _hoisted_8),
            _hoisted_9
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
var VPNotFound = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6ccbe3a8"]]);
var VPContent_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n@media (max-width: 768px) {\n.VPContent[data-v-8feb6d02] {\n    overflow-x: hidden;\n}\n}\n@media (min-width: 960px) {\n.VPContent[data-v-8feb6d02] {\n    padding-top: var(--vt-nav-height);\n}\n.VPContent.has-sidebar[data-v-8feb6d02] {\n    padding-left: var(--vp-sidebar-width-small);\n}\n}\n@media (min-width: 1440px) {\n.VPContent.has-sidebar[data-v-8feb6d02] {\n    padding-left: calc(\n      (100vw - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-small)\n    );\n}\n}\n")();
const _hoisted_1$2 = /* @__PURE__ */ createTextVNode("\\ ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  setup(__props) {
    const route = useRoute();
    const { frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "VPContent",
        class: normalizeClass(["VPContent", { "has-sidebar": unref(hasSidebar) }])
      }, [
        unref(route).component === VPNotFound ? (openBlock(), createBlock(VPNotFound, { key: 0 })) : !!unref(frontmatter).page ? (openBlock(), createBlock(_sfc_main$8, { key: 1 }, {
          "footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-before", {}, void 0, true)
          ]),
          "footer-after": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-after", {}, void 0, true)
          ]),
          _: 3
        })) : (openBlock(), createBlock(VPContentDoc, {
          key: 2,
          class: normalizeClass({ "has-sidebar": unref(hasSidebar) })
        }, {
          "content-top": withCtx(() => [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true)
          ]),
          "content-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-mid": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          default: withCtx(() => [
            _hoisted_1$2
          ]),
          _: 3
        }, 8, ["class"]))
      ], 2);
    };
  }
});
var VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8feb6d02"]]);
var VPApp_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPApp[data-v-6de7d1ed] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--vt-c-bg);\n  transition: background-color 0.5s;\n  padding-top: var(--vt-banner-height);\n}\n.backdrop[data-v-6de7d1ed] {\n  z-index: var(--vp-z-index-backdrop);\n}\n")();
const _hoisted_1$1 = { class: "VPApp" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VPApp",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    let triggerElement;
    watchEffect(() => {
      triggerElement = isSidebarOpen.value ? document.activeElement : void 0;
    });
    const onEsacpe = (e) => {
      if (e.key === "Escape" && isSidebarOpen.value) {
        closeSidebar();
        triggerElement == null ? void 0 : triggerElement.focus();
      }
    };
    onMounted(() => {
      window.addEventListener("keyup", onEsacpe);
    });
    onUnmounted(() => {
      window.removeEventListener("keyup", onEsacpe);
    });
    provide("close-sidebar", closeSidebar);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(VPSkipLink),
        createVNode(unref(_sfc_main$J), {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        renderSlot(_ctx.$slots, "banner", {}, void 0, true),
        createVNode(VPNav, null, {
          "navbar-title": withCtx(() => [
            renderSlot(_ctx.$slots, "navbar-title", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, 8, ["open", "onOpenMenu"]),
        createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
          top: withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-top", {}, void 0, true)
          ]),
          bottom: withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-bottom", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"]),
        createVNode(VPContent, null, {
          "content-top": withCtx(() => [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true)
          ]),
          "content-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-mid": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          "footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-before", {}, void 0, true)
          ]),
          "footer-after": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(_sfc_main$d)
      ]);
    };
  }
});
var VPApp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6de7d1ed"]]);
const VPTheme = {
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound
};
var Home_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\nsection[data-v-07d3b0e4] {\n  padding: 42px 32px;\n}\n#hero[data-v-07d3b0e4] {\n  padding: 96px 32px;\n  text-align: center;\n}\n.tagline[data-v-07d3b0e4] {\n  font-size: 76px;\n  line-height: 1.25;\n  font-weight: 900;\n  letter-spacing: -1.5px;\n  max-width: 960px;\n  margin: 0px auto;\n}\nhtml:not(.dark) .accent[data-v-07d3b0e4],\n.dark .tagline[data-v-07d3b0e4] {\n  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);\n  /* background: -webkit-linear-gradient(315deg, #b2ed87 25%, #db6ffb); */\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.description[data-v-07d3b0e4] {\n  max-width: 960px;\n  line-height: 1.5;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n  font-size: 22px;\n  margin: 24px auto 40px;\n}\n.actions a[data-v-07d3b0e4] {\n  font-size: 16px;\n  display: inline-block;\n  background-color: var(--vt-c-bg-mute);\n  padding: 8px 18px;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: background-color 0.5s, color 0.5s;\n}\n.actions .get-started[data-v-07d3b0e4] {\n  margin-right: 18px;\n}\n.actions .icon[data-v-07d3b0e4] {\n  display: inline;\n  position: relative;\n  top: -1px;\n  margin-left: 2px;\n  fill: currentColor;\n  transition: transform 0.2s;\n}\n.actions .get-started[data-v-07d3b0e4]:hover {\n  transition-duration: 0.2s;\n}\n.actions .get-started:hover .icon[data-v-07d3b0e4] {\n  transform: translateX(2px);\n}\n.actions .get-started[data-v-07d3b0e4],\n.actions .setup[data-v-07d3b0e4] {\n  color: var(--vt-c-text-code);\n}\n.actions .get-started[data-v-07d3b0e4]:hover,\n.actions .setup[data-v-07d3b0e4]:hover {\n  background-color: var(--vt-c-gray-light-4);\n  transition-duration: 0.2s;\n}\n.dark .actions .get-started[data-v-07d3b0e4]:hover,\n.dark .actions .setup[data-v-07d3b0e4]:hover {\n  background-color: var(--vt-c-gray-dark-3);\n}\n\n/* NOTE: via #vuemastery-action in VueMasteryModal.vue */\n.actions .get-started[data-v-07d3b0e4] {\n  font-size: 16px;\n  display: inline-block;\n  border-radius: 8px;\n  transition: background-color 0.5s, color 0.5s;\n  position: relative;\n  font-weight: 600;\n  background-color: var(--vt-c-green);\n  color: #fff;\n  margin-right: 18px;\n  padding: 8px 1em;\n}\n.dark .actions .get-started[data-v-07d3b0e4] {\n  color: var(--vt-c-indigo);\n}\n.actions .get-started[data-v-07d3b0e4]:hover {\n  background-color: var(--vt-c-green-dark);\n  transition-duration: 0.2s;\n}\n.dark .actions .get-started[data-v-07d3b0e4]:hover {\n  background-color: var(--vt-c-green-light);\n}\n\n/* end NOTE */\n#special-sponsor[data-v-07d3b0e4] {\n  border-top: 1px solid var(--vt-c-divider-light);\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  padding: 12px 24px;\n  text-align: center;\n}\n#special-sponsor span[data-v-07d3b0e4] {\n  color: var(--vt-c-text-2);\n  font-weight: 500;\n  font-size: 13px;\n  vertical-align: middle;\n  margin: 0 24px;\n}\n#special-sponsor img[data-v-07d3b0e4] {\n  display: inline-block;\n  vertical-align: middle;\n  height: 36px;\n}\n.dark #special-sponsor img[data-v-07d3b0e4] {\n  filter: grayscale(1) invert(1);\n}\n#highlights[data-v-07d3b0e4] {\n  max-width: 960px;\n  margin: 0px auto;\n  color: var(--vt-c-text-2);\n}\n#highlights h2[data-v-07d3b0e4] {\n  font-weight: 600;\n  font-size: 20px;\n  letter-spacing: -0.4px;\n  color: var(--vt-c-text-1);\n  transition: color 0.5s;\n  margin-bottom: 0.75em;\n}\n#highlights p[data-v-07d3b0e4] {\n  font-weight: 400;\n  font-size: 15px;\n}\n#highlights .vt-box[data-v-07d3b0e4] {\n  background-color: transparent;\n}\n#sponsors[data-v-07d3b0e4] {\n  max-width: 900px;\n  margin: 0px auto;\n}\n#sponsors h2[data-v-07d3b0e4] {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 1em;\n}\n#sponsors .sponsor-container[data-v-07d3b0e4] {\n  margin-bottom: 3em;\n}\n@media (max-width: 960px) {\n.tagline[data-v-07d3b0e4] {\n    font-size: 64px;\n    letter-spacing: -0.5px;\n}\n.description[data-v-07d3b0e4] {\n    font-size: 18px;\n    margin-bottom: 48px;\n}\n}\n@media (max-width: 768px) {\n.tagline[data-v-07d3b0e4] {\n    font-size: 48px;\n    letter-spacing: -0.5px;\n}\n}\n@media (max-width: 576px) {\n#hero[data-v-07d3b0e4] {\n    padding: 64px 32px;\n}\n.description[data-v-07d3b0e4] {\n    font-size: 16px;\n    margin: 18px 0 30px;\n}\n#special-sponsor img[data-v-07d3b0e4] {\n    display: block;\n    margin: 2px auto 1px;\n}\n#highlights h3[data-v-07d3b0e4] {\n    margin-bottom: 0.6em;\n}\n#highlights .vt-box[data-v-07d3b0e4] {\n    padding: 20px 36px;\n}\n.actions a[data-v-07d3b0e4] {\n    margin: 0.5em 0;\n}\n}\n@media (max-width: 370px) {\n.tagline[data-v-07d3b0e4] {\n    font-size: 36px;\n}\n}\n")();
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<section id="hero" data-v-07d3b0e4><h1 class="tagline" data-v-07d3b0e4><span class="accent" data-v-07d3b0e4>XiaoYouEditor</span><br data-v-07d3b0e4>Custom And Markdown </h1><p class="description" data-v-07d3b0e4>\u4E00\u6B3E\u7528\u4E8E\u751F\u6210\u82B1\u91CC\u80E1\u54E8\u535A\u5BA2\u5185\u5BB9\u7684\u7F16\u8F91\u5668(Vue3\u63D2\u4EF6)</p><p class="actions" data-v-07d3b0e4><a class="get-started" href="/xiao-you-editor-docs/guide/introduction.html" data-v-07d3b0e4> \u5FEB\u901F\u5F00\u59CB <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-07d3b0e4><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-07d3b0e4></path></svg></a><a class="setup" href="/xiao-you-editor-docs/guide/quick-start.html" data-v-07d3b0e4>\u5B89\u88C5</a></p></section><section id="highlights" class="vt-box-container" data-v-07d3b0e4><div class="vt-box" data-v-07d3b0e4><h2 data-v-07d3b0e4>\u5C40\u90E8\u66F4\u65B0</h2><p data-v-07d3b0e4>\u57FA\u4E8E Snabbdom \u5B9E\u73B0 Virtual DOM,\u907F\u514D\u4E86\u8F83\u957F\u5185\u5BB9\u4E0B\u4FEE\u6539\u65F6\u7684\u6E32\u67D3\u5361\u987F\u3002</p></div><div class="vt-box" data-v-07d3b0e4><h2 data-v-07d3b0e4>\u81EA\u7531\u5B9A\u5236</h2><p data-v-07d3b0e4> \u57FA\u4E8E WebComponent \u51E0\u4E4E\u53EF\u4EE5\u5B9A\u5236\u6240\u6709\u7684\u535A\u5BA2\u5185\u5BB9\u5C0F\u7EC4\u4EF6,\u4EE5\u6B64\u8FBE\u5230\u5B8C\u5168\u7684\u81EA\u7531\u5B9A\u5236\u5316\u3002 </p></div><div class="vt-box" data-v-07d3b0e4><h2 data-v-07d3b0e4>\u989C\u503C\u8F83\u9AD8</h2><p data-v-07d3b0e4> \u7F16\u8F91\u5668\u63D0\u4F9B\u4E86\u591A\u79CD\u80CC\u666F\u56FE\u7EC4\u5408\u6A21\u5F0F,\u65E2\u53EF\u4EE5\u5355\u5F20\u80CC\u666F\u56FE\u8986\u76D6,\u4E5F\u53EF\u4EE5\u591A\u5F20\u80CC\u666F\u56FE\u62FC\u51D1 </p></div></section><div style="height:94px;" data-v-07d3b0e4></div>', 3);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
var Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-07d3b0e4"]]);
var override = /* @__PURE__ */ (() => ":root {\n  --vt-c-brand: #42b883;\n  --vt-c-brand-light: #42d392;\n  --vt-c-brand-dark: #33a06f;\n}\n")();
var Theme = __spreadProps(__spreadValues({}, VPTheme), {
  Layout() {
    return h(VPTheme.Layout, null, {});
  },
  enhanceApp({ app }) {
    app.component("Home", Home);
  }
});
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser$1 && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser$1) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target, hostname, pathname } = link2;
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (target !== `_blank` && hostname === location.hostname) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
const NotFound = Theme.NotFound || (() => "404 Not Found");
const VitePressApp = {
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watch(() => site.value.lang, (lang) => {
        document.documentElement.lang = lang;
      }, { immediate: true });
    });
    {
      usePrefetch();
    }
    return () => h(Theme.Layout);
  }
};
function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  app.component("Debug", () => null);
  Object.defineProperty(app.config.globalProperties, "$frontmatter", {
    get() {
      return data.frontmatter.value;
    }
  });
  if (Theme.enhanceApp) {
    Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
      return __vitePreload(() => import(
        /*@vite-ignore*/
        pageFilePath
      ), true ? [] : void 0);
    }
    return require(pageFilePath);
  }, NotFound);
}
if (inBrowser$1) {
  const { app, router, data } = createApp();
  router.go().then(() => {
    useUpdateHead(router.route, data.site);
    app.mount("#app");
  });
}
export { _export_sfc as _, createStaticVNode as a, createVNode as b, createElementBlock as c, createApp, defineComponent as d, useRoute as e, useRouter as f, onMounted as g, openBlock as o, resolveComponent as r, useData as u };
