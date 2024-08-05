
<template>
  <div v-html="content"></div>
</template>

<script setup>
import { ref } from 'vue';
const content = ref('');
const {data} = await import(`../data/roadmap.data`);
content.value = data['python/basic'].html
</script>
