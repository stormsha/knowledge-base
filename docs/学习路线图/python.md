<script setup lang="ts">

import {ref} from 'vue';

import { data as posts } from './Python/python.data.ts';


const slug = ref('');
const htmlContent = ref('');
const dialogRef = ref('');
const myButton = ref('');

const showModal = (uid) => {
  console.log("uid", uid);
  slug.value = uid;
  if (uid && slug.value in posts){
      htmlContent.value = posts[slug.value];
      dialogRef.value?.show();
  }
};

const hideModal = () => {
  dialogRef.value?.close();
};


</script>


<style src="../styles/roadmap.scss"></style>


---

<dialog ref="dialogRef" class="roadmap-dialog">
    <PostOverview
        :feature="htmlContent"
        @close-modal="hideModal">
    </PostOverview>
</dialog>

---


<PythonRoad @trigger="showModal"></PythonRoad>


