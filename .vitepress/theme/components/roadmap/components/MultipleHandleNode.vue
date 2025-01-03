<script setup>
import { ref } from 'vue';
import {VueFlow, Handle} from '@vue-flow/core'

import '../style.css'

const isSSR = ref(import.meta.env.SSR);
// v-if="!isSSR"

//noinspection all
const {nodes, edges} = defineProps(['nodes', 'edges'])

const emit = defineEmits(['trigger']);
const triggerModal = (slug) => {
  console.log(slug, "slug")
  emit('trigger', slug);
};

</script>

<template>
  <div>
    <VueFlow
        :nodes-draggable="false"
        :nodes="nodes"
        :edges="edges"
        :min-zoom="1"
        :max-zoom="1"
    >
      <template #node-points="props">
        <div class="node-btn" @click="triggerModal(props.data.slug)">{{props.data.label}}</div>
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
  </div>
</template>