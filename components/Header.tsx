import React from 'react';
import Github from '../public/icons/github.svg';
import Twitter from '../public/icons/twitter.svg';
import Sun from '../public/icons/sun.svg';
import Moon from '../public/icons/moon.svg';

interface AppProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Header = ({ theme, setTheme }: AppProps) => {
  function handleTheme() {
    theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light');
  }

  return (
    <div className="header-icons">
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
      {theme === 'theme-light' ? (
        <Sun onClick={handleTheme} />
      ) : (
        <Moon onClick={handleTheme} />
      )}
    </div>
  );
};

export default Header;
