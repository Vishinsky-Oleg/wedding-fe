import { type FC } from 'react';
import type { THome } from 'pages/Home/types.ts';
import { getMainText } from 'utils/getMainText.ts';
import { Timeline } from 'components/Timeline';
import { Countdown } from 'components/Countdown';

const Home: FC<THome> = ({ onStartPollButtonClick, currentUser }) => {
  return (
    <div>
      {getMainText(currentUser.gen, currentUser.res, currentUser.name)}
      {!currentUser.isPolled && (
        <button onClick={onStartPollButtonClick}>Surveying</button>
      )}
      <Timeline />
      <Countdown />
    </div>
  );
};

export default Home;
