import React from 'react';
import Repo from 'public/icons/repo.svg';
import { getLanguageColor } from 'utils/colors';
import { Repository } from 'types/items';
import s from './ProjectCard.module.css';

const ProjectCard = ({
  id,
  full_name,
  description,
  html_url,
  language,
}: Repository) => {
  return (
    <div key={id} className={s.root} aria-label="repository summary">
      <div className={s.borders}>
        <svg preserveAspectRatio="none">
          <rect x="0" y="0" width="100%" height="100%" />
        </svg>
      </div>

      <div className={s.title}>
        <span>
          <Repo />
        </span>
        <span className={s['link-container']}>
          <a
            className={s.link}
            aria-label={full_name}
            target="_blank"
            href={html_url}
            rel="noreferrer"
            data-testid="url"
          >
            <span data-testid="title">{full_name}</span>
          </a>
        </span>
      </div>
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
      </div>
    </div>
  );
};

export default ProjectCard;
