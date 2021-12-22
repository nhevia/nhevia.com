import Repo from '../public/icons/repo.svg';
import Star from '../public/icons/star.svg';
import Fork from '../public/icons/fork.svg';

const RepoCard = ({ repo }) => {
  return (
    <>
      <span className="title">
        <span>
          <Repo />
        </span>
        <a target="_blank" href={repo.html_url} rel="noreferrer">
          <span>{repo.full_name}</span>
        </a>
      </span>
      <div className="description">
        <span>{repo.description}</span>
      </div>
      <div className="footer">
        <span className="section">
          <span className="yellow-circle" /> <span>{repo.language}</span>
        </span>
        <span className="section">
          <span>
            <Star />
          </span>
          <span>{repo.stargazers_count}</span>
        </span>
        <span className="section">
          <Fork /> {repo.forks}
        </span>
      </div>
    </>
  );
};

export default RepoCard;
