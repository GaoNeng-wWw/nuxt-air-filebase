<script lang="ts" setup>
const { url, ...props } = defineProps<{
  url: string;
  class?: string;
}>();
const loading = ref(true);
const iframe = useTemplateRef('iframe');
onMounted(() => {
  if (!iframe.value) {
    return;
  }
  iframe.value.src = url;
  iframe.value.onload = () => {
    loading.value = false;
  };
});
</script>

<template>
  <div class="relative aspect-video w-full">
    <ui-skeleton v-if="loading" class="absolute left-0 top-0 aspect-video w-full" />
    <iframe
      ref="iframe"
      frameborder="0"
      :data-ok="!loading"
      :class="cn('opacity-0 transition data-[ok=true]:opacity-100', props.class)"
    />
  </div>
</template>
