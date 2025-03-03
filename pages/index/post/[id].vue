<script lang="ts" setup>
const route = useRoute();
const path = route.path;

const { data } = await useAsyncData(path, () => queryCollection('post').path(path).first());
definePageMeta({
  scrollToTop: true,
});
</script>

<template>
  <div class="size-full pt-8">
    <div class="size-full rounded-md p-4">
      <content-renderer
        v-if="data"
        :value="data"
        class="
        prose
        prose-stone
        dark:prose-invert
        prose-headings:no-underline
        prose-headings:before:mr-2
        prose-headings:before:text-default-600
        prose-headings:before:content-none
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
