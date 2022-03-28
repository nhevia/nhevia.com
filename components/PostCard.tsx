import Image from 'next/image';
import { Post } from '../types/types';

const RepoCard = (props: Post) => {
  return (
    <>
      <span className="image">
        <a aria-label="" target="_blank" href={props.url} rel="noreferrer">
          <Image
            alt={props.title}
            src={props.social_image || '/placeholder'}
            width={640}
            height={340}
            data-testid="image"
          />
        </a>
      </span>
      <span className="title">
        <a aria-label="" target="_blank" href={props.url} rel="noreferrer">
          <span data-testid="title">{props.title}</span>
        </a>
      </span>
      <div className="description">
        <span data-testid="description">{props.description}</span>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default RepoCard;
