<script lang="ts" setup>
import { Hash } from 'lucide-vue-next';

defineProps<{
  title: string;
  categories: string[];
  createAt: string;
}>();
</script>

<template>
  <div class="prose w-full cursor-pointer space-y-2 rounded-md px-2 py-3 transition hover:bg-default-900">
    <h1 class="mb-4 w-fit cursor-pointer rounded text-2xl leading-none dark:prose-invert">
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
  </div>
</template>
