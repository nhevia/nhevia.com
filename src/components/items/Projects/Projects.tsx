import React from 'react';
import s from './Projects.module.css';

const Projects = () => {
  return (
    <div className={s.root}>
      <div className={s.project}>
        <div className={s.image}>
          <img src="https://thesourceimages.nyc3.cdn.digitaloceanspaces.com/site/blog/thesource_thumb.jpg" />
        </div>
        <div className={s.content}>
          <p className={s.title}>The Source</p>
          <div className={s.description}>
            <p className={s.explain}>
              A project that djsadasda dsas dsad sdihasdih asidh asidhasi diashd
              iashdiash dhas dhasdjahs djahs djah sdjh asjd hasjd ajs hdjah dj
              hasjdh asjd
            </p>
            <div className={s.buttons}>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.thesource.fun/"
                rel="noreferrer"
              >
                <button>DEMO</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={s.project}>
        <div className={s.image}>
          <img src="https://thesourceimages.nyc3.cdn.digitaloceanspaces.com/site/blog/smarttrader_thumb.jpg" />
        </div>
        <div className={s.content}>
          <p className={s.title}>Smart Trader</p>
          <div className={s.description}>
            <p className={s.explain}>
              A project that djsadasda dsas dsad sdihasdih asidh asidhasi diashd
              iashdiash dhas dhasdjahs djahs djah sdjh asjd hasjd ajs hdjah dj
              hasjdh asjd
            </p>
            <div className={s.buttons}>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://github.com/nhevia/smart-trader/releases/tag/v2.0.0"
                rel="noreferrer"
              >
                <button>DEMO</button>
              </a>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://github.com/nhevia/smart-trader"
                rel="noreferrer"
              >
                <button>CODE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={s.project}>
        <div className={s.image}>
          <img src="https://thesourceimages.nyc3.cdn.digitaloceanspaces.com/site/blog/xmarket_thumb.jpg" />
        </div>
        <div className={s.content}>
          <p className={s.title}>xMarket</p>
          <div className={s.description}>
            <p className={s.explain}>
              A project that djsadasda dsas dsad sdihasdih asidh asidhasi diashd
              iashdiash dhas dhasdjahs djahs djah sdjh asjd hasjd ajs hdjah dj
              hasjdh asjd
            </p>
            <div className={s.buttons}>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://xmarket-nhevia.vercel.app/"
                rel="noreferrer"
              >
                <button>DEMO</button>
              </a>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://github.com/nhevia/xmarket"
                rel="noreferrer"
              >
                <button>CODE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
