import React, { useRef } from 'react';
import { useIntersectionObserverOnce } from 'hooks/useIntersectionObserverOnce';
import classNames from 'classnames';
import type { TAnimatedComponent } from 'components/AnimatedComponent/types.ts';
import CSS from './AnimatedComponent.module.scss';

const AnimatedComponent: React.FC<TAnimatedComponent> = ({
  children,
  variant,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserverOnce(ref, {
    threshold: 0.1, // 10% элемента в зоне видимости
  });

  return (
    <div
      ref={ref}
      className={classNames(CSS[variant], { [CSS.visible]: isIntersecting })}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
