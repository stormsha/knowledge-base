---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { DATA } from './data'
</script>
<style src="../styles/index.scss"></style>

# 技术文档

<MNavLinks v-for="{title, items} in DATA" :title="title" :items="items"/>