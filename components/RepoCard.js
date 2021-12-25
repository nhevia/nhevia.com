import Repo from '../public/icons/repo.svg';
import Star from '../public/icons/star.svg';
import Fork from '../public/icons/fork.svg';

const RepoCard = ({ item: post }) => {
  return (
    <>
      <span className="title">
        <span>
          <Repo />
        </span>
        <a
          aria-label={post.full_name}
          target="_blank"
          href={post.html_url}
          rel="noreferrer"
        >
          <span>{post.full_name}</span>
        </a>
      </span>
      <div className="description">
        <span>{post.description}</span>
      </div>
      <div className="footer">
        <span className="section">
          <span className="yellow-circle" /> <span>{post.language}</span>
        </span>
        <span className="section">
          <span>
            <Star />
          </span>
          <span>{post.stargazers_count}</span>
        </span>
        <span className="section">
          <Fork /> {post.forks}
        </span>
      </div>
    </>
  );
};

export default RepoCard;
