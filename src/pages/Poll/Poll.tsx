import type { FC } from 'react';
import type { TSurvey } from 'pages/Poll/types.ts';

const Poll: FC<TSurvey> = ({ id, onStopPollButtonClick }) => {
  return (
    <div>
      {id} Survey <button onClick={onStopPollButtonClick}>End Survey</button>
    </div>
  );
};

export default Poll;
