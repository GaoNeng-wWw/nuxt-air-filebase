export function useCategories() {
  const { data, status } = useAsyncData('categories', () => {
    return queryCollection('post').select('meta').all();
  });
  const loading = computed(() => status.value === 'pending');

  const categories = computed(() => [...new Set(data.value?.map(post => post.meta.category).flat(Infinity))]);
  return { categories, loading };
}
