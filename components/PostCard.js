// TODO change to post
import Image from 'next/image';

const RepoCard = ({ item: post }) => {
  return (
    <>
      <span className="image">
        <a aria-label="" target="_blank" href={post.url} rel="noreferrer">
          <Image
            alt={post.title}
            src={post.social_image}
            width={640}
            height={340}
          />
        </a>
      </span>
      <span className="title">
        <a aria-label="" target="_blank" href={post.url} rel="noreferrer">
          <span>{post.title}</span>
        </a>
      </span>
      <div className="description">
        <span>{post.description}</span>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default RepoCard;
