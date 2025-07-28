import { type FC } from 'react';
import type { THome } from 'pages/Home/types.ts';
import { Timeline } from 'components/Timeline';
import { Countdown } from 'components/Countdown';
import Welcome from 'components/Welcome/Welcome.tsx';
import { Location } from 'components/Location';

const Home: FC<THome> = ({ onStartPollButtonClick, currentUser }) => {
  return (
    <main>
      <Welcome
        onStartPollButtonClick={onStartPollButtonClick}
        currentUser={currentUser}
      />
      <Countdown />
      <Timeline />
      <Location />
    </main>
  );
};

export default Home;
