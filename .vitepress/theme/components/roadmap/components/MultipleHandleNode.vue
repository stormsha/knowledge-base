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
        <div class="button">{{props.data.label}}</div>
          <Handle
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

<!--<Handle id="target-a" type="target" :position="Position.Left" :connectable="false" />-->
<!--<Handle id="target-b" type="target" :position="Position.Left" :connectable="false" />-->