<script lang="ts" setup>
const { bvid, p } = defineProps<{
  bvid: string;
  p?: number;
}>();
</script>

<template>
  <lazy-ui-skeletion-iframe
    :url="`//player.bilibili.com/player.html?isOutside=true&bvid=${bvid}&p=${p}&autoPlay=0`"
    class="aspect-video w-full rounded"
  />
</template>
