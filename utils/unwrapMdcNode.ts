import type { MDCNode } from '@nuxtjs/mdc';

export function unwrapMdcNode(node: MDCNode) {
  if (node.type === 'text') {
    return node.value;
  }
  return unwrapMdcNode(node);
}
