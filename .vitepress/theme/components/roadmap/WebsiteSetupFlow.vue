<template>
  <div style="width: 100%; height: 100vh;">
    <vue-flow
        :nodes="nodes"
        :edges="edges"
        :fit-view="true"
        :zoom-on-scroll="true"
        :pan-on-drag="true"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { VueFlow } from "@vue-flow/core";

export default defineComponent({
  name: "WebsiteSetupFlow",
  components: { VueFlow },
  setup() {
    // 定义节点
    const nodes = ref([
      {
        id: "1",
        type: "input",
        data: { label: "开始：明确搭建网站的基础条件" },
        position: { x: 50, y: 50 },
      },
      {
        id: "2",
        data: { label: "第一部分：使用 Nginx 部署网站" },
        position: { x: 300, y: 50 },
      },
      { id: "3", data: { label: "1. 准备服务器环境" }, position: { x: 600, y: 50 } },
      { id: "4", data: { label: "2. 安装 Nginx" }, position: { x: 900, y: 50 } },
      { id: "5", data: { label: "3. 配置防火墙" }, position: { x: 1200, y: 50 } },
      { id: "6", data: { label: "4. 部署静态网站" }, position: { x: 1500, y: 50 } },
      { id: "7", data: { label: "5. 配置域名解析" }, position: { x: 1800, y: 50 } },
      {
        id: "8",
        data: { label: "第二部分：使用 WordPress 搭建网站" },
        position: { x: 300, y: 300 },
      },
      { id: "9", data: { label: "1. 安装必要软件" }, position: { x: 600, y: 300 } },
      { id: "10", data: { label: "2. 下载并配置 WordPress" }, position: { x: 900, y: 300 } },
      { id: "11", data: { label: "3. 配置 Nginx 支持 WordPress" }, position: { x: 1200, y: 300 } },
      { id: "12", data: { label: "4. 完成 WordPress 安装" }, position: { x: 1500, y: 300 } },
      { id: "13", data: { label: "5. 优化和安全配置" }, position: { x: 1800, y: 300 } },
      {
        id: "14",
        type: "output",
        data: {label: "结束：网站成功上线！"},
        position: {x: 2100, y: 175},
      },
    ]);

    // 定义连接
    const edges = ref([
      {id: "e1-2", source: "1", target: "2"},
      {id: "e2-3", source: "2", target: "3"},
      {id: "e3-4", source: "3", target: "4"},
      {id: "e4-5", source: "4", target: "5"},
      {id: "e5-6", source: "5", target: "6"},
      {id: "e6-7", source: "6", target: "7"},
      {id: "e1-8", source: "1", target: "8"},
      {id: "e8-9", source: "8", target: "9"},
      {id: "e9-10", source: "9", target: "10"},
      {id: "e10-11", source: "10", target: "11"},
      {id: "e11-12", source: "11", target: "12"},
      {id: "e12-13", source: "12", target: "13"},
      {id: "e7-14", source: "7", target: "14"},
      {id: "e13-14", source: "13", target: "14"},
    ]);

    return {nodes, edges};
  },
});
</script>
