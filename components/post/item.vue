<script lang="ts" setup>
import { Hash } from 'lucide-vue-next';

const props = defineProps<{
  title: string;
  categories: string[];
  createAt: string;
  id: string;
}>();

const id = computed(() => props.id.split('/').at(-1)?.replace(/\..*/, ''));
</script>

<template>
  <div
    class="
    w-full max-w-full cursor-pointer space-y-2 rounded-md px-2 py-3 transition
    hover:bg-default-800/50 prose-headings:no-underline
  "
  >
    <nuxt-link :href="`/post/${id}`">
      <h1 class="mb-4 w-fit cursor-pointer rounded text-2xl leading-none">
        {{ title }}
      </h1>
      <div class="flex w-full flex-wrap justify-between gap-4 text-sm">
        <div class="flex w-fit flex-wrap gap-2">
          <div v-for="category of categories" :key="category" class="flex w-fit items-center justify-center">
            <div class="flex items-center justify-center gap-px">
              <hash class="size-4 text-default-300" />
              <span class="text-default-300">{{ category }}</span>
            </div>
          </div>
        </div>
        <div class="w-fit">
          <span class="text-default-300">{{ formatDate(createAt as string) }}</span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
