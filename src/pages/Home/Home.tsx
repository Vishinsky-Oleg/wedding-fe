import { type FC, useEffect, useState } from 'react';
import type { THome } from 'pages/Home/types.ts';
import { getMainText } from 'utils/getMainText.ts';
import { getDifference } from 'utils/getDifference.ts';
import { Timeline } from 'components/Timeline';

const Home: FC<THome> = ({ onStartPollButtonClick, currentUser }) => {
  const [untilWedding, setUntilWedding] = useState<null | string>(null);

  const countTimeUntilWedding = setInterval(() => {
    setUntilWedding(getDifference());
  }, 1000);

  useEffect(() => {
    setUntilWedding(getDifference());
    return () => clearInterval(countTimeUntilWedding);
  }, []);

  return (
    <div>
      <div>{untilWedding}</div>
      {getMainText(currentUser.gen, currentUser.res, currentUser.name)}
      {!currentUser.isPolled && (
        <button onClick={onStartPollButtonClick}>Surveying</button>
      )}
      <Timeline />
    </div>
  );
};

export default Home;
