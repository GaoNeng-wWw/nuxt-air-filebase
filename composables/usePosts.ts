import type { PostCollectionItem } from '@nuxt/content';

export function toPost(record: PostCollectionItem) {
  return {
    id: record.id,
    title: record.title,
    categories: (record.category ?? []) as string[],
    createAt: formatDate((record.createAt ?? Date.now().toString()) as string),
  };
}

export interface UsePosts {
  page: MaybeRef<number>;
  size: MaybeRef<number>;
  category: MaybeRef<string | null>;
}

export function usePosts({ page: _page, size: _size, category }: UsePosts) {
  const page = ref(_page);
  const size = ref(_size);
  const { data: count } = useAsyncData('count', async () => {
    let handle = queryCollection('post');
    if (unref(category)) {
      handle = handle.where('category', 'LIKE', `%${unref(category)}%`);
    }
    return await handle.count('*');
  });
  const { data, status, execute, error } = useAsyncData(async () => {
    let handle = queryCollection('post');
    handle = handle
      .order('createAt', 'DESC')
      .skip(
        size.value * (page.value - 1),
      )
      .limit(size.value);
    if (unref(category)) {
      handle = handle.where('category', 'LIKE', `%${unref(category)}%`);
    }
    const posts = await handle.all();
    return posts;
  }, {
    watch: [() => page],
  });
  const posts: ComputedRef<Post[]> = computed((oldArray) => {
    const m = new Map();
    const postList = [...oldArray ?? [], ...data.value?.map(toPost) ?? []]
      .filter(post => !m.has(post.id) && m.set(post.id, 1));
    const tag = unref(category);
    if (tag) {
      return postList.filter(post => post.categories.includes(tag));
    }
    return postList;
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
    if (count.value < ((page.value) * size.value)) {
      return;
    }
    page.value += 1;
    execute();
  }
  return { loadNextPage, posts, status, error };
}
