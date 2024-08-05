<script setup>
// import { ref } from 'vue';
// import Modal from './Modal.vue';
// import { useData } from 'vitepress';
//
// const showModal = ref(false);
//
// const { page  } = useData();
// console.log(page , "--------")
// const markdownContent = ref(site.value?.pages.find(page => page.path === '/markdown-examples').content);
import { ref } from 'vue';
import Modal from './Modal.vue';
import PageContent from './PageContent.vue';

const showModal = ref(false);
</script>

<template>
  <div>
    ddddddddddddddd
    ddddddddddddddd
    ddddddddddddddd
    <button @click="showModal = true">展示模态框</button>

    <Modal :visible="showModal" @update:visible="val => showModal = val">
      <PageContent path="/markdown-examples"></PageContent>
    </Modal>
<!--    <button @click="showModal = true">展示模态框</button>-->
<!--    <Modal :visible="showModal" @update:visible="val => showModal = val">-->
<!--      <div v-html="markdownContent"></div>-->
<!--    </Modal>-->
  </div>
</template>

<!--# 我的文档-->

<!--这是一个示例文档。点击下面的按钮来展示模态框中的 Markdown 文章内容。-->

<!--<button @click="showModal = true">展示模态框</button>-->

<!--<Modal :visible="showModal" @update:visible="val => showModal = val">-->
<!--<PageContent path="/markdown-article"></PageContent>-->
<!--</Modal>-->

<!--<script setup>-->
<!--import { ref } from 'vue';-->
<!--import Modal from './Modal.vue';-->
<!--import PageContent from './PageContent.vue';-->

<!--const showModal = ref(false);-->
<!--</script>-->

