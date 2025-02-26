<template>
  <div class="w-full space-x-2 p-2 text-sm text-foreground/50">
    <nuxt-link :to="$config.public.license.url">
      {{ $config.public.license.title }}
    </nuxt-link>
    <span>{{ $config.public.startYear }} - PRESENT  </span>
    <span>&copy;{{ $config.public.authorName }}</span>
  </div>
</template>
