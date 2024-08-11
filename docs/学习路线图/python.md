<script setup>
import {ref} from 'vue';
import { data as posts } from './Python/python.data.ts';

const slug  = ref('');
const htmlContent = ref('');
const dialogRef = ref(null);
const myButton = ref(null);

const showModal = (uid) => {
  slug.value = uid;
  console.log(uid, posts, "uid");
  if (slug){
      htmlContent.value = posts[slug?.value];
      dialogRef.value?.show();
  }
};

const hideModal = () => {
  dialogRef.value?.close();
};

</script>

<style src="../styles/roadmap.scss"></style>

---

<dialog v-if="slug" ref="dialogRef" class="roadmap-dialog">
    <PostOverview
        :feature="htmlContent"
        @close-modal="hideModal">
    </PostOverview>
</dialog>

---

<PythonRoad @trigger-modal="showModal"></PythonRoad>


