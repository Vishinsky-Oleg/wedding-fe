import type { ReactNode } from 'react';

export type TAnimatedComponent = {
  children: ReactNode;
  variant: 'fade_in' | 'scale' | 'fade_in_right' | 'fade_in_left';
};
