<script lang="ts" setup>
import { vIntersectionObserver } from '@vueuse/components';

const route = useRoute();
const router = useRouter();
const id = route.params.id.toString();
if (!id) {
  router.replace('/');
}
const page = ref(0);
const size = ref(20);
const { posts, status, loadNextPage } = usePosts({ page, size, category: id });
watch(status, () => {
  if (status.value === 'error') {
    return router.replace('/');
  }
}, { immediate: true });
</script>

<template>
  <main class="w-full">
    <div class="w-full space-y-2">
      <post-item
        v-for="post of posts"
        :id="post.id"
        :key="post.id"
        :title="post.title"
        :categories="post.categories"
        :create-at="post.createAt"
      />
      <div v-intersection-observer="loadNextPage" class="w-full" />
    </div>
  </main>
</template>
