<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const showModal = ref(false);
</script>

<template>
  <div>
    <button @click="showModal = true">展示模态框</button>
    <Modal :visible="showModal" @update:visible="val => showModal = val">
      <slot/>
    </Modal>
  </div>
</template>

