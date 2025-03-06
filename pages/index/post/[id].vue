<script lang="ts" setup>
import { ChevronLeft } from 'lucide-vue-next';

const route = useRoute();
const path = route.path;

const { data } = await useAsyncData(path, () => queryCollection('post').path(path).first());
const { authorName } = useAppConfig();
useSeoMeta({
  author: authorName,
  description: computed(() => data.value?.description ?? ''),
});
definePageMeta({
  scrollToTop: true,
});
defineOgImageComponent('post', { title: computed(() => data.value?.title), categories: computed(() => data.value?.category) });
</script>

<template>
  <div class="size-full">
    <div class="size-full rounded-md p-4">
      <content-renderer
        v-if="data"
        :value="data"
        class="
        prose
        prose-stone
        max-w-full
        dark:prose-invert
        prose-headings:my-4
        prose-headings:no-underline
        prose-headings:before:mr-2
        prose-headings:before:text-default-600
        prose-headings:before:content-none
        prose-h1:mb-0
        prose-p:my-0
        prose-p:before:content-none
        prose-p:after:content-none
        prose-a:no-underline
        prose-blockquote:not-italic
        prose-pre:block
        prose-pre:prose-code:*:block
        prose-ul:prose-li:my-0
        "
      />
      <ui-button variant="ghost" size="icon" alt="返回" @click="$router.back">
        <chevron-left class="size-4" />
      </ui-button>
    </div>
  </div>
</template>

<style>
.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))::before,
.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))::after{
  display: none;
}
.prose :where(ul > li):not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  margin: 0;
  padding: 0;
}
.prose :where(ol > li):not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  margin: 0;
}
</style>
