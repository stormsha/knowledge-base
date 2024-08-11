<script setup>
import {ref} from 'vue'

import {NODES, EDGES} from "./data";
import MultipleHandleNode from "../components/MultipleHandleNode.vue";

const nodes = ref(NODES)
const edges = ref(EDGES)

</script>

<template>
   <MultipleHandleNode :nodes="nodes" :edges="edges"></MultipleHandleNode>
</template>