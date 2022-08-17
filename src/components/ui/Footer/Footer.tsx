import React, { useState, useEffect } from 'react';
import { showEmail } from 'utils/email';
import s from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('wait a second');

  useEffect(() => {
    setTimeout(() => {
      setEmail(showEmail);
    }, 2000);
  }, []);

  return (
    <footer className={s.root}>
      <div className={s.sections}>
        <a href={email} className={s.section}>
          Contact me
        </a>
        <span className={s.divisor}></span>
        <p className={s.section}>Nicolas Hevia @ 2022</p>
        <span className={s.divisor}></span>
        <a href="https://github.com/nhevia/nhevia.com" className={s.section}>
          Site source code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
