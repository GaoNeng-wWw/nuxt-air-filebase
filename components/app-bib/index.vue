<script lang="ts" setup>
const props = defineProps<{
  papers: Paper[];
  type: 'ama';
}>();

const formatBehavior = {
  ama: toAmaText,
};

function toAmaText(paper: Paper) {
  const stack: string[] = [];
  stack.push(
    paper.author,
    paper.title,
    paper.journal,
    `${paper.year};Volume(${paper.issn}):${paper.pages}`,
    paper.url || paper.doi ? `${paper.doi ?? paper.url}` : '',
  );
  return stack.join('.');
}
</script>

<template>
  <div
    class="prose-stone w-full max-w-full dark:prose-invert prose-ul:px-4 prose-li:p-2"
  >
    <h2 id="Referce" class="mt-4 text-2xl">
      Referce
    </h2>
    <ul class="mt-4 list-decimal">
      <li v-for="paper of props.papers" :key="paper.doi" class="rounded transition-all hover:bg-zinc-200 dark:hover:bg-zinc-900">
        <a :href="paper.doi ?? paper.url" class="underline-none">
          {{ formatBehavior[props.type](paper) }}
        </a>
      </li>
    </ul>
  </div>
</template>
