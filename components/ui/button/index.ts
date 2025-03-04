import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import Button from './btn.vue';

export default Button;

export const buttonVariants = cva(
  'focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-default-900 hover:bg-default-800',
        destructive: 'bg-red-900 text-red-200',
        outline: 'border border-border hover:bg-default-800',
        ghost: 'hover:bg-default-800',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
