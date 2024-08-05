<!-- docs/.vitepress/components/PageContent.vue -->
<template>
  <div v-html="content"></div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useData, useRoute } from 'vitepress';

const content = ref('');
const props = defineProps({
  path: {
    type: String,
    required: true
  }
});

const { theme } = useData();
const route = useRoute();

watchEffect(() => {
  console.log(theme.value, "===========")
  const page = theme.value.pages.find(page => page.path === props.path);
  if (page) {
    content.value = page.content;
  }
});
</script>
