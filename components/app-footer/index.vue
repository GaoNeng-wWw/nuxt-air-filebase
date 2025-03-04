<script lang="ts" setup>
const config = useAppConfig();
</script>

<template>
  <div class="w-full space-x-2 p-2 text-sm text-foreground/50">
    <nuxt-link :to="config.license.url">
      {{ config.license.title }}
    </nuxt-link>
    <span>{{ config.license.startYear }} - PRESENT  </span>
    <span>&copy;{{ config.license.name }}</span>
  </div>
</template>
