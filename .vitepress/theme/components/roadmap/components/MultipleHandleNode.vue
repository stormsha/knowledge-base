<script setup>
import {VueFlow, Handle} from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { VTLink } from "@vue/theme";

//noinspection all
const {nodes, edges} = defineProps(['nodes', 'edges'])
</script>

<template>
  <div>
    <VueFlow :nodes="nodes" :edges="edges">
      <template #node-custom-node="props">
        <VTLink href="/roadmap/go" target="target">{{ props.data.label }}</VTLink>
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

<style scoped>
.vt-link {
  color: #42b983;
  text-decoration: none;
}

.vt-link:hover {
  text-decoration: underline;
}
</style>