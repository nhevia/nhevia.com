import React from 'react';
import s from './ProjectFeaturedCard.module.css';

interface ProjectFeatured {
  title: string;
  description: string;
  image: string;
  demo_url?: string;
  code_url?: string;
}

const ProjectFeaturedCard = ({
  title,
  description,
  image,
  demo_url,
  code_url,
}: ProjectFeatured) => {
  return (
    <div className={s.project} key={title}>
      <div className={s.image}>
        <img src={image} alt={title} width="480" height="270" />
      </div>
      <div className={s.content}>
        <p className={s.title}>{title}</p>
        <div className={s.description}>
          <p className={s.explain}>{description}</p>
          <div className={s.buttons}>
            {demo_url && (
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href={demo_url}
                rel="noreferrer"
              >
                <button>DEMO</button>
              </a>
            )}
            {code_url && (
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href={code_url}
                rel="noreferrer"
              >
                <button>CODE</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeaturedCard;
