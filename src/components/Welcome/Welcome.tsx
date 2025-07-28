import type { TWelcome } from './types';
import type { FC } from 'react';
import { getMainText } from 'utils/getMainText.ts';
import CSS from './Welcome.module.scss';

const Welcome: FC<TWelcome> = ({ currentUser, onStartPollButtonClick }) => {
  const { withLoveBy, callForPoll, youAreWelcomeBy, dearGuest } = getMainText(
    currentUser.gen,
    currentUser.res,
    currentUser.name
  );
  return (
    <div>
      <div className={CSS.welcome__hero}>
        <div className={CSS.welcome__hero__ampersand}>&</div>
        <div className={CSS.welcome__hero__names}>Олег</div>
        <div className={CSS.welcome__hero__names}>Виктория </div>
        <div className={CSS.welcome__hero__date}>14.10.2025</div>
      </div>
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
    </div>
  );
};

export default Welcome;
