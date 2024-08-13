---
layoutClass: m-nav-layout
---

<script setup>
import { ROADMAP_DATA } from './data'
</script>
<style src="../styles/index.scss"></style>

# 编程学习

<div class="m-nav-links">
<MNavLink
  v-for="{ icon, title, desc, link } in ROADMAP_DATA"
  :key="link"
  :icon="icon"
  :title="title"
  :desc="desc"
  :link="link"
/>
</div>