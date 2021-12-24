// TODO change to post

const RepoCard = ({ item: post }) => {
  return (
    <>
      <span className="title">
        <a target="_blank" href={post.url} rel="noreferrer">
          <img src={post.social_image} />
        </a>
      </span>
      <span className="title">
        <a target="_blank" href={post.url} rel="noreferrer">
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
