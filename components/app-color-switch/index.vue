<script lang="ts" setup>
import { Computer, Moon, Sun } from 'lucide-vue-next';
</script>

<template>
  <color-schema placeholder="">
    <ui-button v-if="$colorMode.preference === 'dark'" variant="outline" size="icon" class="rounded-full" @click="$colorMode.preference = 'system'">
      <moon class="size-4" />
    </ui-button>
    <ui-button v-if="$colorMode.preference === 'light'" variant="outline" size="icon" class="rounded-full" @click="$colorMode.preference = 'dark'">
      <sun class="size-4" />
    </ui-button>
    <ui-button v-if="$colorMode.preference === 'system'" variant="outline" size="icon" class="rounded-full" @click="$colorMode.preference = 'light'">
      <computer class="size-4" />
    </ui-button>
  </color-schema>
</template>
