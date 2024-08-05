<!-- docs/.vitepress/components/Modal.vue -->
<template>
  <div v-if="visible"  @click="close">
    <div @click.stop>
      <button @click="close">x</button>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits  } from 'vue';
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:visible']);

const close = () => {
  emit('update:visible', false);
};
</script>
