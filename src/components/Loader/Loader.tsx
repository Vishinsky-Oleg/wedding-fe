import type { TLoader } from './types';
import type { FC } from 'react';
import './Loader.scss';
import CSS from './Loader.module.scss';
import { Hero } from 'components/Hero';

const Loader: FC<TLoader> = () => {
  return (
    <>
      <div className={CSS.loader}>
        <Hero />
      </div>
      <div className="beatingHeart">
        <div className="heart"></div>
        <div className="heart heart2"></div>
        <div className="heart heart3 pinkHeart"></div>
        <div className="heart heart4 fushiaHeart"></div>
        <div className="heart heart5 pinkHeart"></div>
      </div>
    </>
  );
};

export default Loader;
