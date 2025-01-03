---
layoutClass: m-nav-layout
---

<style>
.vp-doc._roadmap p a {
  display: inline-block; /* 使链接元素以行内块的形式显示，可以设置宽度 */
  width: 150px; /* 根据需要设置每个链接的宽度，这里只是一个示例值 */
  margin: 0 5px 5px 0; /* 上边和左边没有外边距，右边和下边有5px的外边距 */
  padding: 10px; /* 内边距，根据需要调整 */
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  text-decoration: none; /* 去除链接的下划线 */
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-align: center; /* 文本居中显示 */
  border-radius: 12px;
  transition: border-color 0.25s, background-color 0.25s;
}

.vp-doc._roadmap p a:hover {
  background-color: #007bff; /* 鼠标移入时的背景颜色 */
  color: #fff; /* 鼠标移入时的文本颜色 */
}
</style>

<script setup>
import { ROADMAP_DATA } from './data'
</script>
<style src="../styles/index.scss"></style>

# 编程学习

[Python 学习](/python/intro)
[Go 学习](/roadmap/go)
[Java 学习](/roadmap/java)