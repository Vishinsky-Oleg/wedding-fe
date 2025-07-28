import CSS from './Countdown.module.scss';
import { type FC, useEffect, useState } from 'react';
import { getDifference } from 'utils/getDifference.ts';
import type { TDifference } from 'types/index.ts';
import { CircularProgress } from 'components/CircularProgress';
import { calculatePercentage } from 'utils/getPercentage.ts';

const Countdown: FC = () => {
  const [{ days, hours, minutes, seconds }, setUntilWedding] =
    useState<TDifference>(getDifference());

  const countTimeUntilWedding = setInterval(() => {
    setUntilWedding(getDifference());
  }, 1000);

  useEffect(() => {
    return () => clearInterval(countTimeUntilWedding);
  }, []);

  return (
    <div className={CSS.countdown__outer_container}>
      <div className={CSS.countdown__title}>До торжества осталось</div>
      <div className={CSS.countdown__timers__container}>
        <CircularProgress
          progress={calculatePercentage(days, 365)}
          theNumber={days.toString()}
          thePropertyName={'дня'}
        />
        :
        <CircularProgress
          progress={calculatePercentage(hours, 24)}
          theNumber={hours.toString()}
          thePropertyName={'часа'}
        />
        :
        <CircularProgress
          progress={calculatePercentage(minutes, 60)}
          theNumber={minutes.toString()}
          thePropertyName={'минуты'}
        />
        :
        <CircularProgress
          progress={calculatePercentage(seconds, 60)}
          theNumber={seconds.toString()}
          thePropertyName={'секунды'}
        />
      </div>
    </div>
  );
};

export default Countdown;
