import type { FC } from 'react';
import type { THome } from 'pages/Home/types.ts';

const Home: FC<THome> = ({ onStartPollButtonClick, pollIsPassed }) => {
  return (
    <div>
      Home
      {!pollIsPassed && (
        <button onClick={onStartPollButtonClick}>Surveying</button>
      )}
    </div>
  );
};

export default Home;
