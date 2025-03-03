<script lang="ts" setup>
import { GitMerge, GitPullRequest, GitPullRequestClosed } from 'lucide-vue-next';

const { pullNumber, owner, repo } = defineProps<{
  pullNumber: number;
  owner: string;
  repo: string;
}>();
const { data, status } = useFetch('/api/pr', { query: { pullNumber, owner, repo } });
</script>

<template>
  <div class="w-full">
    <div v-if="status === 'idle' || status === 'pending'" class="mx-auto h-16 w-64 py-2">
      <ui-skeleton class="size-full" />
    </div>
    <div class="max-w-1/2 mx-auto w-64 items-center justify-center gap-1.5 space-y-2 rounded-md bg-default-800 px-3 py-2">
      <nuxt-link v-if="status === 'success' && data" :to="data.link">
        <div class="flex items-center gap-2 overflow-auto">
          <div class="grow">
            <p class="truncate text-xl leading-none">
              {{ data.title }}
            </p>
          </div>
          <git-merge v-if="data.merged" class="size-8 flex-shrink-0 basis-auto text-purple-500" />
          <git-pull-request-closed v-else-if="data.closed" class="size-8 flex-shrink-0 basis-auto text-red-500" />
          <git-pull-request v-else class="size-8 flex-shrink-0 basis-auto text-green-500" />
        </div>
        <div v-if="data.body" class="flex gap-2 text-default-300">
          <p class="line-clamp-2">
            {{ data.body }}
          </p>
          <div class="size-8 flex-shrink-0 basis-auto" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
