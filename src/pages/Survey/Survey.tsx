import { useParams } from 'react-router';

function Survey() {
  const { id } = useParams<{ id: string }>();
  return <div>{id} Survey</div>;
}

export default Survey;
