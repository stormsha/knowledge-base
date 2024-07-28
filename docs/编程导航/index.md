---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { WIZARDS_DATA } from './data'
</script>
<style src="../styles/index.scss"></style>

# 编程导航

<MNavLinks v-for="{title, items} in WIZARDS_DATA" :title="title" :items="items"/>