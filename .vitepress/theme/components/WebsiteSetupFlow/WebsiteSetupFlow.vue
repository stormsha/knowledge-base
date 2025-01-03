<template>
  <div style="width: 100%; height: 500px;">
    <vue-flow
        :nodes="nodes"
        :edges="edges"
        :fit-view="true"
        :zoom-on-scroll="true"
        :pan-on-drag="true"
        style="width: 100%; height: 100% !important;"
        @nodeDrag="onNodeDrag"
    >
      <!-- 添加网格背景 -->
      <Background
          gap="20"
          variant="lines"
      />
      <template #node-points="props">
        <div
            class="node-btn"
        >
          {{ props.data.label }}
        </div>
        <Handle
            v-if="'handles' in props.data"
            v-for="handle in props.data.handles"
            :id="handle.id"
            :key="handle.id"
            :position="handle.position"
            :type="handle.type"
            :connectable="false"
            v-bind="handle"
        />
      </template>
    </vue-flow>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {Handle, VueFlow} from "@vue-flow/core";
import {Background} from '@vue-flow/background'
import {EDGES, NODES} from "./data";

const nodes = ref(NODES)
const edges = ref(EDGES)
export default defineComponent({
  name: "WebsiteSetupFlow",
  components: {Handle, VueFlow, Background},
  setup() {
    // 监听节点拖动
    const onNodeDrag = (event) => {
      // 获取节点 ID 和当前坐标
      const nodeId = event.node.id;
      const newPosition = event.node.position;

      console.log(`节点 ${nodeId} 移动到:`, newPosition);
    };
    return {nodes, edges, onNodeDrag};
  },
});
</script>
