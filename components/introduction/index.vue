<script lang="ts" setup>
const bio = ref('');
const config = useAppConfig();

const icons = await import('@/components/icon');

const socialItems = config.introduction.social.map(({ icon, link }) => {
  if (icon in icons) {
    const iconComponent = icons[icon as keyof typeof icons];
    return {
      icon: iconComponent,
      link,
    };
  }
  return {
    icon: null,
    link,
  };
});

const { data } = await useAsyncData('introduction', () => {
  return queryCollection('introduction').first();
});

const configBio = config.introduction.bio;
if (Array.isArray(configBio)) {
  bio.value = randomChioce(configBio);
} else if (isUrl(configBio)) {
  $fetch<string>(configBio)
    .then((value) => {
      bio.value = value;
    });
} else {
  bio.value = configBio;
}
</script>

<template>
  <div class="mb-8 flex w-full flex-col gap-8 px-2 pt-8">
    <div class="flex w-full gap-2">
      <div class="w-fit">
        <avatar-root class="flex size-24 overflow-hidden rounded-full">
          <avatar-image :src="config.introduction.avatar" class="size-24" />
          <avatar-fallback :delay-ms="600">
            {{ config.introduction.authorName }}
          </avatar-fallback>
        </avatar-root>
      </div>
      <div class="flex shrink-0 grow basis-0 flex-col justify-around gap-1">
        <h1 class="mt-0 h-fit break-words text-2xl leading-none">
          {{ config.introduction.authorName }}
        </h1>
        <p v-if="bio" class=" line-clamp-1 break-words">
          {{ bio }}
        </p>
        <div class="flex w-full flex-wrap">
          <nuxt-link v-for="socialItem of socialItems" :key="socialItem.link" :href="socialItem.link">
            <component :is="socialItem.icon" class="size-7 cursor-pointer" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <content-renderer v-if="data" :value="data" />
  </div>
</template>
