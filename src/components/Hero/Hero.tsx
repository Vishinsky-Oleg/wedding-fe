import type { FC } from 'react';
import CSS from './Hero.module.scss';
import type { THero } from 'components/Hero/types.ts';
import classNames from 'classnames';

const Hero: FC<THero> = ({ customText, classes }) => {
  return (
    <div className={classNames(CSS.hero, classes)}>
      {customText ? (
        <div className={CSS.hero__date}>{customText}</div>
      ) : (
        <>
          <div className={CSS.hero__ampersand}>&</div>
          <div className={CSS.hero__names}>Олег</div>
          <div className={CSS.hero__names}>Виктория</div>
          <div className={CSS.hero__date}>4.10.2025</div>
        </>
      )}
    </div>
  );
};

export default Hero;
