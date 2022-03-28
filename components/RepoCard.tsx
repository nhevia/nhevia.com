import Repo from '../public/icons/repo.svg';
import Star from '../public/icons/star.svg';
import Fork from '../public/icons/fork.svg';
import { Repository } from '../types/types';

const RepoCard = (props: Repository) => {
  return (
    <>
      <span className="title">
        <span>
          <Repo />
        </span>
        <a
          aria-label={props.full_name}
          target="_blank"
          href={props.html_url}
          rel="noreferrer"
          data-testid="url"
        >
          <span data-testid="title">{props.full_name}</span>
        </a>
      </span>
      <div className="description">
        <span data-testid="description">{props.description}</span>
      </div>
      <div className="footer">
        <span className="section">
          <span className="yellow-circle" />{' '}
          <span data-testid="language">{props.language}</span>
        </span>
        <span className="section">
          <span>
            <Star />
          </span>
          <span data-testid="stargazers">{props.stargazers_count}</span>
        </span>
        <span className="section" data-testid="forks">
          <Fork /> {props.forks}
        </span>
      </div>
    </>
  );
};

export default RepoCard;
