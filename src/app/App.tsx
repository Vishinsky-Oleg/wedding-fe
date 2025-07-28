import { useParams } from 'react-router';
import { useGetCurrentGuest } from 'hooks/useGetCurrentGuest.tsx';
import { Info } from 'pages/Info';
import { type FC, useState } from 'react';
import { Poll } from 'pages/Poll';
import type { TParams } from 'app/types.ts';
import Loader from 'components/Loader/Loader.tsx';
import { Home } from 'pages/Home';

const App: FC = () => {
  const { id } = useParams<TParams>();
  const [isPolling, setIsPolling] = useState(false);

  const onChangePollStatusTo = (isPolling: boolean) => setIsPolling(isPolling);

  if (id) {
    const { currentUser, errorCode, isLoading } = useGetCurrentGuest(id);

    if (errorCode === 401) {
      return <Info variant={'wrong-id'} />;
    } else if (isLoading) {
      return <Loader />;
    } else if (currentUser) {
      if (isPolling) {
        return (
          <Poll
            currentUser={currentUser}
            onStopPollButtonClick={() => onChangePollStatusTo(false)}
          />
        );
      } else {
        return (
          <Home
            onStartPollButtonClick={() => onChangePollStatusTo(true)}
            currentUser={currentUser}
          />
        );
      }
    } else {
      return <Info variant={'page-not-found'} />;
    }
  }

  return <Info variant={'page-not-found'} />;
};

export default App;
