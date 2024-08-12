<script setup>
import {ref} from 'vue'
import {NODES, EDGES} from "./python/data";
import {Handle, VueFlow} from "@vue-flow/core";
import './style.css'

const isSSR = ref(import.meta.env.SSR);

const nodes = ref(NODES)
const edges = ref(EDGES)

const emit = defineEmits(['trigger']);
const triggerModal = (slug) => {
  emit('trigger', slug);
};

</script>

<template>
  <VueFlow
      v-if="!isSSR"
      :nodes-draggable="false"
      :nodes="nodes"
      :edges="edges"
      :min-zoom="1"
      :max-zoom="1"
  >
    <template #node-points="props">
      <div
          class="node-btn"
          @click="triggerModal(props.data.slug)"
      >
        {{ props.data.label }}
      </div>
      <Handle
          v-if="'handles' in props.data"
          v-for="handle in props.data.handles"
          :id="handle.id"
          :key="handle.id"
          :position="handle.position"
          :type="handle.type"
          :connectable="false"
          v-bind="handle"
      />
    </template>
  </VueFlow>
</template>