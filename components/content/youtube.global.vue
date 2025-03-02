<script lang="ts" setup>
const { id } = defineProps<{
  id: string;
}>();
const url = computed(() => `//www.youtube.com/embed/${unref(id)}`);
</script>

<template>
  <ui-skeletion-iframe :url="url" class="aspect-video w-full rounded opacity-0 transition data-[ok=true]:opacity-100" />
</template>
