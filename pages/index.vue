<template>
  <div class="w-full">
    <lazy-app-header class="z-10" />
    <div class="mx-auto size-full max-w-screen-md px-2 pt-8">
      <nuxt-page />
      <footer>
        <lazy-app-footer />
      </footer>
    </div>
    <div class="fixed right-8 top-3/4 hidden size-fit md:block">
      <app-color-switch />
    </div>
  </div>
</template>
