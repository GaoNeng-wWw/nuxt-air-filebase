<script lang="ts" setup>
const props = defineProps<{ class?: string }>();
</script>

<template>
  <div :class="cn('animate-pulse rounded-md bg-default-800 z-0', props.class)" />
</template>
