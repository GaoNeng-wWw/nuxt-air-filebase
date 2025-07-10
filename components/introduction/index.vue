<script lang="ts" setup>
const { author, bio, socialItems, data } = await useIntroduction();
useHeadSafe({
  meta: [{ charset: 'utf-8' }],
});
useSeoMeta({
  author: author.value?.name,
  description: data.value?.description ?? bio.value ?? '',
});
</script>

<template>
  <div class="mb-8 flex w-full flex-col gap-8 px-2">
    <div v-if="author" class="flex w-full gap-2">
      <div class="w-fit">
        <avatar-root class="flex size-24 overflow-hidden rounded-full">
          <avatar-image :src="author.avatar ?? ''" class="size-24" :alt="author.name" />
          <avatar-fallback :delay-ms="600">
            {{ author.name }}
          </avatar-fallback>
        </avatar-root>
      </div>
      <div class="flex shrink-0 grow basis-0 flex-col justify-around gap-1">
        <h1 class="mt-0 h-fit break-words text-2xl leading-none">
          {{ author.name }}
        </h1>
        <p v-if="bio" class=" line-clamp-1 break-words">
          {{ bio }}
        </p>
        <div class="flex w-full flex-wrap">
          <nuxt-link v-for="socialItem of socialItems" :key="socialItem.link" :href="socialItem.link">
            <component :is="socialItem.icon" class="size-7 cursor-pointer" />
          </nuxt-link>
        </div>
        <div>
          <content-renderer v-if="data" :value="data" />
        </div>
      </div>
    </div>
  </div>
</template>
