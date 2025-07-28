import CSS from './Timeline.module.scss';
import classNames from 'classnames';

const Timeline = () => {
  return (
    <div className={CSS.container}>
      <span className={CSS.title}>Программа торжества</span>

      <span className={classNames(CSS.point, CSS.first)}>
        <div className={CSS.point__time}>15:00</div>
        <div className={CSS.point__about}>Выездная регистрация</div>
      </span>
      <span className={classNames(CSS.point, CSS.second)}>
        <div className={CSS.point__time}>16:00</div>
        <div className={CSS.point__about}>Праздничный банкет</div>
      </span>
      <span className={classNames(CSS.point, CSS.third)}>
        <div className={CSS.point__time}>21:00</div>
        <div className={CSS.point__about}>Праздничный торт</div>
      </span>
      <span className={classNames(CSS.point, CSS.fourth)}>
        <div className={CSS.point__time}>22:00</div>
        <div className={CSS.point__about}>Финал мероприятия</div>
      </span>
      <span className={classNames(CSS.point, CSS.fifth)}>
        <div className={CSS.point__time}>19:00</div>
        <div className={CSS.point__about}>Танцы до упаду</div>
      </span>
    </div>
  );
};

export default Timeline;
