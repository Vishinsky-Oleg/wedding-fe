import type { TWelcome } from './types';
import type { FC } from 'react';
import { getMainText } from 'utils/getMainText.ts';
import CSS from './Welcome.module.scss';
import AnimatedComponent from 'components/AnimatedComponent/AnimatedComponent.tsx';
import { Hero } from 'components/Hero';

const Welcome: FC<TWelcome> = ({ currentUser, onStartPollButtonClick }) => {
  const { withLoveBy, callForPoll, youAreWelcomeBy, dearGuest } = getMainText(
    currentUser.gen,
    currentUser.res,
    currentUser.name
  );
  return (
    <div className={CSS.welcome}>
      <Hero />
      <AnimatedComponent variant={'fade_in'}>
        <div className={CSS.welcome__text_block}>
          <p>{dearGuest}</p>
          <p>{youAreWelcomeBy}</p>
          <p>{callForPoll}</p>
          <p>{withLoveBy}</p>
          {!currentUser.isPolled && (
            <button
              onClick={onStartPollButtonClick}
              className={CSS.welcome__button}
            >
              Пройти опрос
            </button>
          )}
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default Welcome;
