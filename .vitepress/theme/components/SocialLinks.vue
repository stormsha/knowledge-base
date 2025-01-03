<template>
  <div class="m-social-links">
    <template v-for="link in links">
      <div
          class="m-social-link"
          @mouseenter="showQR(link.qrCode)"
          @mouseleave="hideQR"
      >
        <!-- 使用 SVG 图标 -->
        <img
            class="social-icon"
            :src="link.icon"
            :alt="link.platform"
        />
        <!-- 判断平台显示不同的提示 -->
        <span class="tooltip">
          {{ link.platform === '微信' ? '添加-微信' : link.platform === '公众号' ? '关注-公众号' : `访问 ${link.platform}` }}
        </span>
      </div>
    </template>

    <!-- 二维码显示区域 -->
    <div v-show="currentQR" class="qr-popup">
      <img :src="currentQR" alt="QR Code"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  props: {
    links: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      currentQR: null // 当前显示的二维码图片链接
    };
  },
  methods: {
    showQR(qrCode) {
      this.currentQR = qrCode; // 设置当前二维码
    },
    hideQR() {
      this.currentQR = null; // 隐藏二维码
    }
  }
};
</script>

<style scoped>
/* 容器样式 */
.m-social-links {
  display: flex;
  gap: 16px; /* 图标之间的间距 */
  align-items: center;
  position: relative; /* 用于定位二维码弹出框 */
}

/* 单个社交链接容器 */
.m-social-link {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: inline-block;
}

.m-social-link:hover {
  transform: scale(1.1); /* 鼠标悬停时放大效果 */
}

/* Tooltip 样式 */
.tooltip {
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 6px 12px; /* 增加内边距，适配更好的阅读体验 */
  font-size: 12px;
  position: absolute;
  top: 50%; /* 垂直居中显示 */
  right: 100%; /* 默认在图标右侧 */
  margin-left: 12px; /* 增加与图标的间距，避免重叠 */
  transform: translateY(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000; /* 提高 Tooltip 的层级，确保其在其他图标之上 */
}

/* 鼠标悬停时显示 Tooltip */
.m-social-link:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

/* 如果 Tooltip 超出页面宽度时，调整为显示在左侧 */
.m-social-link:hover .tooltip--left {
  left: auto;
  right: 100%;
  margin-left: 0; /* 清除右侧偏移 */
  margin-right: 12px; /* 设置左侧距离 */
}

/* SVG 图标样式 */
.social-icon {
  width: 20px; /* 图标大小 */
  height: 20px;
  display: block;
  transition: opacity 0.3s ease;
}

.social-link:hover .social-icon {
  opacity: 0.8; /* 鼠标悬停时图标透明度变化 */
}

/* 二维码弹出框样式 */
.qr-popup {
  position: absolute;
  top: 50px; /* 调整二维码显示位置 */
  left: 50%;
  transform: translateX(-50%);
  width: 200px; /* 二维码大小 */
  height: 200px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-popup img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
</style>
