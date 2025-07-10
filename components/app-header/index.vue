<script lang="ts" setup>
import { HashIcon } from 'lucide-vue-next';

export interface HeaderContext {
  postTitle: Ref<string>;
  postCategories: Ref<string[]>;
  postOpacity: Ref<number>;
  isPostPage: Ref<boolean>;
}

const postTitle = usePostTitle();
const postCategories = usePostCategory();
const opacity = useMenuOpacity('0.0');
const postOpacity = computed(() => {
  if (!opacity.value) {
    return 0;
  }
  return 1 - Number.parseFloat(opacity.value);
});
const router = useRouter();
const isPostPage = ref(router.currentRoute.value.path.includes('post'));
watch(router.currentRoute, () => {
  isPostPage.value = router.currentRoute.value.path.includes('post');
}, { immediate: true, deep: true });
provide('header', {
  postTitle,
  postCategories,
  postOpacity,
  isPostPage,
});

const isServer = import.meta.env.SSR;
</script>

<template>
  <div :data-is-post="isPostPage" class="group sticky top-0 md:top-4 md:data-[is-post=false]:top-4">
    <div class="top-4 w-full md:mx-auto md:max-w-screen-md">
      <lazy-app-menu-mobile />
      <lazy-app-menu-desktop />
    </div>
    <div v-if="isPostPage && postOpacity > 0 && !isServer" class="fixed top-0 hidden h-fit min-h-20 w-full gap-2 bg-default-900 py-2 md:flex" :style="{ opacity: postOpacity }">
      <animate-presence multiple>
        <motion
          v-if="postOpacity === 1" class="mx-auto flex w-full max-w-screen-md flex-col justify-center gap-2 px-4" :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ type: 'spring', duration: 0.5 }"
        >
          <h1 class=" mb-0 text-xl leading-none">
            {{ postTitle }}
          </h1>
          <div class="w-full">
            <motion as="div" :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }" :transition="{ type: 'spring', duration: 0.3, delay: 0.05 }">
              <div v-for="category, idx in postCategories" :key="category" class="flex items-center gap-1">
                <hash-icon v-if="idx === 0" class="size-4" />
                <span class="text-sm">
                  {{ category }}
                </span>
              </div>
            </motion>
          </div>
        </motion>
      </animate-presence>
    </div>
  </div>
</template>
