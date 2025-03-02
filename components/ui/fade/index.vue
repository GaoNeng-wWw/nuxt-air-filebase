<script lang="ts" setup>
import type { BaseTransitionProps } from 'vue';

const props = defineEmits<BaseTransitionProps>();
</script>

<template>
  <transition
    leave-active-class="transition"
    leave-to-class="opacity-0"
    v-bind="{ props }"
  >
    <slot />
  </transition>
</template>
