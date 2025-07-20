import { useParams } from 'react-router';
import CSS from './App.module.scss';
import type { TParams } from './types.ts';

function App() {
  const { id } = useParams<TParams>();

  return <div className={CSS.app}>{id}</div>;
}

export default App;
