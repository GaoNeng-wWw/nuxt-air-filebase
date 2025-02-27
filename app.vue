<script lang="ts" setup>
const { colors } = useAppConfig();
const { value } = useColorMode();
const colorMode = ref(value === 'dark' ? 'dark' : 'light');
onMounted(() => {
  const val = randomChioce(colors[colorMode.value as 'dark' | 'light']);
  document.body.style.setProperty('--primary', val.default);
  document.body.style.setProperty('--primary-foreground', val.foreground);
});
</script>

<template>
  <div class="size-full bg-background">
    <nuxt-page />
  </div>
</template>
