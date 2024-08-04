<script setup>
import {VueFlow, Handle} from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'

//noinspection all
const {nodes, edges} = defineProps(['nodes', 'edges'])
</script>

<template>
  <div>
    <VueFlow :nodes="nodes" :edges="edges">
      <template #node-link>

      </template>>
      <template #node-custom-node="props">
        <div class="button" >{{ props.data.label }}</div>
          <Handle
              v-for="handle in props.data.handles"
              :key="handle.id"
              :type="handle.type"
              v-bind="handle"
          />
      </template>
      <Controls />
      <Background />
    </VueFlow>
  </div>
</template>