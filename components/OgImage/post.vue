<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string;
    categories?: string[];
  }>(),
  {
    title: '',
    categories: () => [],
  },
);
</script>

<template>
  <div class="bg relative flex size-full flex-col overflow-hidden bg-zinc-950 px-10 py-20">
    <div class="absolute z-10 size-full px-10 py-20">
      <h1 class="z-10 mt-0 text-8xl leading-none text-white">
        {{ title }}
      </h1>
      <div class="flex w-full flex-row gap-2 text-3xl text-white/80">
        <div v-for="(category, idx) of categories" :key="idx" class="flex flex-row items-center">
          <div class="rounded-full bg-zinc-800 px-4 py-2 text-xl">
            {{ category }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
