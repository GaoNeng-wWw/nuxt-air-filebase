export function usePost(path: string) {
  const { data, status } = useAsyncData(path, () => queryCollection('post').path(path).first());
  const categories = computed(() => Array.from(new Set(data.value?.meta.category as string[] ?? [])));
  return { data, status, categories };
}
