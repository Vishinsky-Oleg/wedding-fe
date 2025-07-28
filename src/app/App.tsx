import { useParams } from 'react-router';
import { getCurrentGuest } from 'hooks/getCurrentGuest.tsx';
import { PageNotFound } from 'pages/PageNotFound';
import { type FC, useState } from 'react';
import { Poll } from 'pages/Poll';
import { Home } from 'pages/Home';
import type { TParams } from 'app/types.ts';
import CSS from './App.module.scss';

const App: FC = () => {
  const { id } = useParams<TParams>();
  const [isPolling, setIsPolling] = useState(false);

  const onChangePollStatusTo = (isPolling: boolean) => setIsPolling(isPolling);

  if (id) {
    const { currentUser, errorCode, isLoading } = getCurrentGuest(id);

    if (errorCode === 401) {
      return <div>Перейдите по ссылке в правильным идентификатором!</div>;
    } else if (isLoading) {
      return <div>Is loading</div>;
    } else if (currentUser) {
      if (isPolling) {
        return (
          <div className={CSS.app__poll_container}>
            <Poll
              currentUser={currentUser}
              onStopPollButtonClick={() => onChangePollStatusTo(false)}
            />
          </div>
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
      return <PageNotFound />;
    }
  }

  return <PageNotFound />;
};

export default App;
