export function useMenuOpacity(init: string = '1.0') {
  return useState('menu-opacity', () => ref(init));
}
