<script setup lang="ts">

import {ref} from 'vue';

import { data as posts } from './Python/python.data.ts';

const htmlContent = ref('');
const dialogRef = ref('');
const myButton = ref('');

const showModal = (uid) => {
  if (uid && uid in posts){
      htmlContent.value = posts[uid];
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


