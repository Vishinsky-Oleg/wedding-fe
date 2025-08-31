import type { TGender } from 'types/index.ts';

export const getMainText = (g: TGender, p: boolean, firstName: string) => {
  const dear = g === 'h' ? 'Дорогой' : g === 's' ? 'Дорогая' : 'Дорогие';
  const you = p ? 'Вас' : 'тебя';

  const dearGuest = `${dear} ${firstName}!`;
  const youAreWelcomeBy = `Олег и Виктория рады пригласить ${you} на самый важный день в нашей жизни — день, когда мы станем мужем и женой! Этот день будет наполнен любовью, теплом и радостью, и мы искренне хотим разделить его с вами. Ваше присутствие сделает наш праздник по-настоящему особенным!`;
  const callForPoll = `Подтвердите, пожалуйста, своё присутствие до 15 сентября — это поможет нам организовать праздник с комфортом для всех гостей.`;
  const withLoveBy = `С любовью, Олег и Виктория`;

  return {
    dearGuest,
    youAreWelcomeBy,
    callForPoll,
    withLoveBy,
  };
};
