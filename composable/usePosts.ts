import type { BlogCollectionItem } from '@nuxt/content';

export function toPost(record: BlogCollectionItem) {
  return {
    id: record.id,
    title: record.title,
    categories: (record.meta.category ?? []) as string[],
    createAt: formatDate((record.meta.createAt ?? Date.now().toString()) as string),
  };
}

export interface UsePosts {
  page: MaybeRef<number>;
  size: MaybeRef<number>;
}

export function usePosts({ page: _page, size: _size }: UsePosts) {
  const page = ref(_page);
  const size = ref(_size);
  const { data: count } = useAsyncData('count', async () => {
    const handle = queryCollection('blog');
    return await handle.count('*');
  });
  const { data, status, execute } = useAsyncData(async () => {
    const handle = queryCollection('blog');
    const posts = await handle.skip(
      size.value * (page.value - 1),
    )
      .limit(size.value)
      .all();
    return posts;
  }, {
    watch: [() => page],
  });
  const posts: ComputedRef<Post[]> = computed((oldArray) => {
    return [...oldArray ?? [], ...data.value?.map(toPost) ?? []];
  });

  function loadNextPage() {
    if (status.value === 'pending' || status.value === 'idle') {
      return;
    }
    if (count.value === null) {
      page.value += 1;
      execute();
      return;
    }
    if (count.value < (page.value - 1 * size.value)) {
      return;
    }
    page.value += 1;
    execute();
  }
  return { loadNextPage, posts };
}
