<script setup lang="ts">
import {computed} from 'vue'
import {slugify} from '@mdit-vue/shared'

import MNavLink from './MNavLink.vue'
import type {NAV_LINK} from '../types'

const props = defineProps<{
  title: string
  items: NAV_LINK[]
}>()

const formatTitle = computed(() => {
  return slugify(props.title)
})
</script>

<template>
  <h2 v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h2>
  <div class="m-nav-links">
    <MNavLink
        v-for="{ icon, title, desc, link } in items"
        :key="link"
        :icon="icon"
        :title="title"
        :desc="desc"
        :link="link"
    />
  </div>
</template>
