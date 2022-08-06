import { useEffect } from 'react';
import usePersistedQuery from 'hooks/usePersistedQuery';
import s from './StackoverflowCard.module.css';

const StackoverflowCard = () => {
  const data = usePersistedQuery('activity');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={s.root} aria-label="stackoverflow activity card"></div>
  );
};

export default StackoverflowCard;
