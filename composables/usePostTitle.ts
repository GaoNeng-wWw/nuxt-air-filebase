export function usePostTitle() {
  return useState('post-title', () => ref(''));
}
