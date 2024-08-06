<script setup>
import {VueFlow, Handle} from '@vue-flow/core'

import './style.css'

//noinspection all
const {nodes, edges} = defineProps(['nodes', 'edges'])
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
        <div class="button">{{ props.data.label }}</div>
          <Handle
              v-for="handle in props.data.handles"
              :key="handle.id"
              :type="handle.type"
              v-bind="handle"
          />
      </template>
    </VueFlow>
  </div>
</template>