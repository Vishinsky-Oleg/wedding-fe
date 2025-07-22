import { useParams } from 'react-router';
import CSS from './App.module.scss';
import type { TParams } from './types.ts';
import { getCurrentGuest } from '../../hooks/getCurrentGuest.tsx';
import { PageNotFound } from 'pages/PageNotFound';

function App() {
  const { id } = useParams<TParams>();

  if (id) {
    const { currentUser, errorCode, isLoading } = getCurrentGuest(id);

    if (errorCode === 401) {
      return <div>Перейдите по ссылке в правильным идентификатором!</div>;
    } else if (isLoading) {
      return <div>Is loading</div>;
    } else if (currentUser) {
      return <div className={CSS.app}>User Found!!!</div>;
    } else {
      return <PageNotFound />;
    }
  }

  return <div className={CSS.app}>{id}</div>;
}

export default App;
