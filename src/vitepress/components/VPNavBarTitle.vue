<template>
  <a class="VPNavBarTitle" href="/">
    <slot name="navbar-title">
      <img src="../../public/logo.png" alt="" class="logo" />
      <span class="text">xiaoYouEditor</span>
    </slot>
  </a>
</template>

<script setup lang="ts">
// import { ref } from "vue"
// const href = "/"
//  ref<string>(import.meta.env.DEV ? "/" : "/")
</script>
<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
  width: 20px;
  height: 20px;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
