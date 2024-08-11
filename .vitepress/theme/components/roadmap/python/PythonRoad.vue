<script setup>
import {ref} from 'vue'
import { defineProps } from 'vue';
import {NODES, EDGES} from "./data";
import MultipleHandleNode from "../components/MultipleHandleNode.vue";

// const {trigger} = defineProps(['trigger']);

const nodes = ref(NODES)
const edges = ref(EDGES)

</script>

<template>
   <MultipleHandleNode :nodes="nodes" :edges="edges"></MultipleHandleNode>
  <div>dddd</div>
</template>