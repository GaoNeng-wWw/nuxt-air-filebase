<script lang="ts" setup>
import { vIntersectionObserver } from '@vueuse/components';

const page = ref(1);
const size = 10;
const { posts, loadNextPage } = usePosts({ page, size, category: null });
</script>

<template>
  <main class="w-full">
    <lazy-introduction />
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
