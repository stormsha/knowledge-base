<template>
  <div class="nav-bar-content">
    <!-- 社交链接部分 -->
    <SocialLinks :links="links"/>

    <!-- 阅读增强菜单部分 -->
    <div class="enhanced-menu">
      <NolebaseEnhancedReadabilitiesMenu/>
    </div>
  </div>
</template>

<script>
import SocialLinks from "./SocialLinks.vue";

//noinspection all
import {
  NolebaseEnhancedReadabilitiesMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";

//noinspection all
export default {
  name: "NavBarContent",
  components: {
    SocialLinks,
    NolebaseEnhancedReadabilitiesMenu,
  },
  props: {
    links: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.nav-bar-content {
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 16px; /* 设置社交链接和增强菜单之间的间距 */
}

.nav-bar-content::before {
  margin-right: 8px;
  margin-left: 8px;
  width: 1px;
  height: 24px;
  background-color: var(--vp-c-divider);
  content: "";
}

.enhanced-menu {
  display: flex;
  align-items: center;
}
</style>
