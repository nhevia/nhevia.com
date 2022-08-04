import Image from 'next/image';
import { Post } from 'types/items';
import s from './BlogpostCard.module.css';

const BlogpostCard = ({ id, url, title, social_image, description }: Post) => {
  return (
    <div key={id} className={s.root} aria-label="post summary">
      <span className={s.image}>
        <a aria-label="" target="_blank" href={url} rel="noreferrer">
          <Image
            alt={title}
            src={social_image || '/placeholder'}
            width={640}
            height={340}
            data-testid="image"
          />
        </a>
      </span>
      <span>
        <a aria-label="" target="_blank" href={url} rel="noreferrer">
          <span data-testid="title">{title}</span>
        </a>
      </span>
      <div className={s.description}>
        <span data-testid="description">{description}</span>
      </div>
      <div className={s.footer}></div>
    </div>
  );
};

export default BlogpostCard;
