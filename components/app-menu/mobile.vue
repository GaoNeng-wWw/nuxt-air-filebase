<script lang="ts" setup>
import type { HeaderContext } from '../app-header/index.vue';
import { HashIcon, MenuIcon } from 'lucide-vue-next';
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue';

const props = defineProps<{ class?: string }>();

const { categories } = useCategories();

const { postTitle, postOpacity, postCategories, isPostPage } = inject<HeaderContext>('header')!;
</script>

<template>
  <drawer-root as-child class="bg-default-950">
    <div :class="cn('flex w-full items-center bg-default-900 px-4 py-5 md:hidden gap-2', props.class)">
      <drawer-trigger>
        <menu-icon />
      </drawer-trigger>
      <div v-if="isPostPage" :style="{ opacity: postOpacity }">
        <motion as-child :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }" :transition="{ type: 'spring', duration: 0.3, delay: 0.05 }">
          <h1 class="text-xl">
            {{ postTitle }}
          </h1>
        </motion>
        <div v-for="category, idx in postCategories" :key="category" class="flex items-center gap-1">
          <hash-icon v-if="idx === 0" class="size-4" />
          <span class="text-sm">
            {{ category }}
          </span>
        </div>
      </div>
    </div>
    <drawer-portal>
      <drawer-overlay class="fixed inset-0 z-50 bg-black/50" />
      <drawer-content class="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col gap-4 rounded-t-[10px] border border-border bg-default-900 p-4">
        <nuxt-link to="/" exact-active-class="text-primary-foreground">
          首页
        </nuxt-link>
        <nuxt-link v-for="category, idx in categories" :key="idx" exact-active-class="text-primary-foreground" :to="`/category/${category}`">
          {{ category }}
        </nuxt-link>
      </drawer-content>
    </drawer-portal>
  </drawer-root>
</template>
