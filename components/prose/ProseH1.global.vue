<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports';
import { HashIcon } from 'lucide-vue-next';

const props = defineProps<{ id?: string }>();
const route = useRoute();
const path = route.path;
const { data, categories } = usePost(path);
const { headings } = useRuntimeConfig().public.mdc;
const title = usePostTitle();
const postCategory = usePostCategory();
const menuOpacity = useMenuOpacity();
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1)));
const titleContainer = useTemplateRef('title-container');
const abort = new AbortController();
function onScroll() {
  if (!titleContainer.value) {
    return;
  }
  const { top, height } = titleContainer.value.getBoundingClientRect();
  const y = top > 0 ? top : 0;
  menuOpacity.value = Math.min(
    1,
    (y / height),
  ).toFixed(2);
}
onMounted(() => {
  if (!titleContainer.value) {
    return;
  }
  window.addEventListener('scroll', onScroll, { signal: abort.signal });
  onScroll();
});

onUnmounted(() => {
  abort.abort();
});

watch(categories, () => {
  postCategory.value = categories.value;
}, { immediate: true });
watch(data, () => {
  title.value = data.value?.title ?? '';
}, { immediate: true, deep: true });
</script>

<template>
  <div ref="title-container" class="mb-8 w-full">
    <h1 :id="props.id" class="prose-h1 mb-0">
      <a
        v-if="generate"
        :href="`#${props.id}`"
      >
        <slot />
      </a>
      <slot v-else />
    </h1>
    <div class="my-2 space-x-2">
      <div v-for="category in categories" :key="category" class="flex items-center gap-1">
        <hash-icon class="size-4" />
        <span class="text-sm">
          {{ category }}
        </span>
      </div>
    </div>
  </div>
</template>
