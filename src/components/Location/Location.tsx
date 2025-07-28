import type { FC } from 'react';
import image1 from 'assets/eightsmile1.png';
import image2 from 'assets/eightsmile2.png';
import CSS from './Location.module.scss';

const Location: FC = () => {
  return (
    <div className={CSS.location}>
      <div className={CSS.location__images}>
        <img src={image1} alt="8 миля" className={CSS.location__image1} />
        <img src={image2} alt="8 миля" className={CSS.location__image2} />
      </div>
      <div className={CSS.location__text_block}>
        <p className={CSS.location__heading}>Место торжества</p>
        <p className={CSS.location__address}>
          М-5 Урал, 977-й километр, 1, Тольятти
        </p>
      </div>
      <a
        href="https://yandex.ru/maps/-/CHXe46JG"
        className={CSS.location__button}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Посмотреть на карте
      </a>
    </div>
  );
};

export default Location;
