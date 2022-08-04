import React from 'react';
import Github from 'public/icons/github.svg';
import Twitter from 'public/icons/twitter.svg';
import Sun from 'public/icons/sun.svg';
import Moon from 'public/icons/moon.svg';
import s from './Header.module.css';

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

const Header = ({ theme, setTheme }: Props) => {
  function handleTheme() {
    theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light');
  }

  return (
    <header className={s.root}>
      <a
        aria-label="Github"
        target="_blank"
        href="https://github.com/nhevia"
        rel="noreferrer"
      >
        <Github />
      </a>
      <a
        aria-label="Twitter"
        target="_blank"
        href="https://twitter.com/n_hevia"
        rel="noreferrer"
      >
        <Twitter />
      </a>
      <button
        onClick={handleTheme}
        aria-label={`change to ${
          theme === 'theme-light' ? 'dark' : 'light'
        } theme`}
      >
        {theme === 'theme-light' ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};

export default Header;
