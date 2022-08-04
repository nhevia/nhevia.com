import { So } from 'types/items';
import s from './StackoverflowCard.module.css';

const StackoverflowCard = ({ id, link, title, score }: So) => {
  return (
    <div key={id} className={s.root} aria-label="stackoverflow answer summary">
      <li>
        <a href={link} dangerouslySetInnerHTML={{ __html: title as string }} />
        <span className={s.score}>(score: {score})</span>
      </li>
    </div>
  );
};

export default StackoverflowCard;
