<script setup lang="ts">
import {Post} from "../types";

interface Props {
  feature: Post;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'close-modal'): void;
}>();

const closeModal = (): void => {
  emit('close-modal');
};

</script>

<template>
    <div v-html="props.feature.html" class="dialog-content"></div>
    <button @click="closeModal" class="close-button">×</button>
</template>
<style scoped>


</style>
