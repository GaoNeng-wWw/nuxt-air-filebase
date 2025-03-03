<script lang="ts" setup>
import { MenuIcon } from 'lucide-vue-next';
import { DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTrigger } from 'vaul-vue';
import { useCategories } from '~/composable/useCategories';

const { categories } = useCategories();
</script>

<template>
  <div class="sticky top-0 w-full md:top-4 md:mx-auto md:max-w-screen-md">
    <drawer-root as-child class="bg-default-950">
      <div class="flex  w-full items-center bg-default-900 px-4 py-5 md:hidden">
        <drawer-trigger>
          <menu-icon />
        </drawer-trigger>
      </div>
      <drawer-portal>
        <drawer-overlay class="fixed inset-0 z-50 bg-black/50" />
        <drawer-content class="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col gap-4 rounded-t-[10px] border border-border bg-default-900 p-4">
          <nuxt-link to="/" exact-active-class="text-primary-foreground">
            首页
          </nuxt-link>
          <nuxt-link v-for="category, idx in categories" :key="idx" class="">
            {{ category }}
          </nuxt-link>
        </drawer-content>
      </drawer-portal>
    </drawer-root>
    <app-menu-desktop />
  </div>
</template>
