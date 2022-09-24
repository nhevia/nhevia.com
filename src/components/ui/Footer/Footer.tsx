import React, { useState, useEffect } from 'react';
import { showEmail } from 'utils/email';
import s from './Footer.module.css';
import Github from 'public/icons/github.svg';
import Twitter from 'public/icons/twitter.svg';
import Email from 'public/icons/email.svg';

const Footer = () => {
  const [email, setEmail] = useState('wait a second');

  useEffect(() => {
    setTimeout(() => {
      setEmail(showEmail);
    }, 2000);
  }, []);

  return (
    <footer className={s.root}>
      <svg className={s['dashline-container']}>
        <line className={s.dashline} x1="0" y1="0" x2="3000" y2="0" />
      </svg>

      <div className={s.sections}>
        <div className={s.socials}>
          <a aria-label="email" href={email}>
            <Email />
          </a>
          <a
            aria-label="github"
            target="_blank"
            href="https://github.com/nhevia"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            aria-label="twitter"
            target="_blank"
            href="https://twitter.com/n_hevia"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </div>

        <div className={s.info}>
          <span className={s.divisor}>|</span>
          <span>nico hevia © 2022</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
