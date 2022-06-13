<script lang="ts" setup>
import { useData } from 'vitepress'
import { inject } from 'vue'
import { MenuItemWithLink } from '../../core'

defineProps<{
  item: MenuItemWithLink
}>()

const { page } = useData()
const closeSideBar = inject('close-sidebar') as () => void

const isActiveLink = (relativePath: string, link: string) => {
  link = link.replace('/xiao-you-editor-docs/', '')
  link = link.replace('.html', '')
  relativePath = relativePath.replace('.md', '')
  return relativePath == link
}
</script>

<template>
  <a
    :class="{ link: true, active: isActiveLink(page.relativePath, item.link) }"
    :href="item.link"
    @click="closeSideBar"
  >
    <p class="link-text">{{ item.text }}</p>
  </a>
</template>

<style scoped>
.link {
  display: block;
  padding: 6px 0;
}

@media (min-width: 960px) {
  .link {
    padding: 4px 0;
  }
}

.link:hover .link-text {
  color: var(--vt-c-brand-text-1);
  transition: color 0.25s;
}

.link.active .link-text {
  font-weight: 600;
  color: var(--vt-c-brand);
  transition: color 0.25s;
}

.link-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
}
</style>
