<script setup>
import { useRoute } from 'vitepress';
import { data as posts } from './Go/go.data.ts';
const post = posts['/roadmap/Go/basic.html'];
const route = useRoute();
console.log(route.path)
</script>

<PostOverview :features="post"></PostOverview>
