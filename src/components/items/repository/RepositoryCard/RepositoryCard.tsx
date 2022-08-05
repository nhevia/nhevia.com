import React from 'react';
import Repo from 'public/icons/repo.svg';
import Star from 'public/icons/star.svg';
import Fork from 'public/icons/fork.svg';
import { getLanguageColor } from 'utils/colors';
import { Repository } from 'types/items';
import s from './RepositoryCard.module.css';

const Card = ({
  id,
  full_name,
  description,
  html_url,
  language,
  stargazers_count,
  forks,
}: Repository) => {
  return (
    <div key={id} className={s.root} aria-label="repository summary">
      <span className={s.title}>
        <span>
          <Repo />
        </span>
        <a
          aria-label={full_name}
          target="_blank"
          href={html_url}
          rel="noreferrer"
          data-testid="url"
        >
          <span data-testid="title">{full_name}</span>
        </a>
      </span>
      <div className={s.description}>
        <span data-testid="description">{description}</span>
      </div>
      <div className={s.footer}>
        <span className={s.section}>
          <span
            className={s.circle}
            style={
              language ? { backgroundColor: getLanguageColor(language) } : {}
            }
          />
          <span data-testid="language">{language}</span>
        </span>
        <span className={s.section}>
          <span>
            <Star />
          </span>
          <span data-testid="stargazers">{stargazers_count}</span>
        </span>
        <span className={s.section} data-testid="forks">
          <Fork /> {forks}
        </span>
      </div>
    </div>
  );
};

export default Card;
