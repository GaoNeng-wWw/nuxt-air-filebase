<script setup lang="ts">
import ImageComponent from '#build/mdc-image-component.mjs';
import { computed, useRuntimeConfig } from '#imports';

import { joinURL, withLeadingSlash, withTrailingSlash } from 'ufo';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src);
    }
  }
  return props.src;
});
</script>

<template>
  <client-only>
    <figure class="w-full">
      <nuxt-img
        :src="refinedSrc"
        :alt="props.alt"
        :width="props.width"
        :height="props.height"
        class="mx-auto rounded"
        loading="lazy"
      />
      <figcaption v-if="props.alt" class="text-center">
        {{ props.alt }}
      </figcaption>
    </figure>
  </client-only>
</template>
