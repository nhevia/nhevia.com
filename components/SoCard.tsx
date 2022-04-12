import { So } from '../types/types';

const SoCard = (props: So) => {
  return (
    <div>
      <li>
        <a
          className="title"
          href={props.link}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <span className="score">(score: {props.score})</span>
      </li>
    </div>
  );
};

export default SoCard;
