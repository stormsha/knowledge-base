<template>
  <div v-html="content"></div>
  <div>dddddddddddd</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import {loadMarkdown} from "./roadmap/python/loadContent";

export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = ref('');

    onMounted(async () => {
      const {markdownContent} = await loadMarkdown(props.src);
      console.log(markdownContent, "markdownContent")
      content.value = markdownContent;
    });
    return {content};
  }
};
</script>