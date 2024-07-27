<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import SvgIcon from "./SvgIcon.vue";

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <SvgIcon fill="var(--vp-c-brand-1)" />
    </template>
  </Layout>
</template>