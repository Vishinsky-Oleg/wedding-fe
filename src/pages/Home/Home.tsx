import { type FC } from 'react';
import type { THome } from 'pages/Home/types.ts';
import { Timeline } from 'components/Timeline';
import { Countdown } from 'components/Countdown';
import Welcome from 'components/Welcome/Welcome.tsx';
import { Location } from 'components/Location';
import { Contacts } from 'components/Contacts';
import CSS from './Home.module.scss';
import AnimatedComponent from 'components/AnimatedComponent/AnimatedComponent.tsx';

const Home: FC<THome> = ({ onStartPollButtonClick, currentUser }) => {
  return (
    <main className={CSS.home}>
      <Welcome
        onStartPollButtonClick={onStartPollButtonClick}
        currentUser={currentUser}
      />
      <div className={CSS.home__block}>
        <AnimatedComponent variant={'fade_in_left'}>
          <Countdown />
        </AnimatedComponent>
        <AnimatedComponent variant={'fade_in_right'}>
          <Timeline />
        </AnimatedComponent>
      </div>
      <AnimatedComponent variant={'scale'}>
        <Location />
      </AnimatedComponent>
      <Contacts />
    </main>
  );
};

export default Home;
