import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from 'context/theme';
import Sun from 'public/icons/sun.svg';
import Moon from 'public/icons/moon.svg';
import s from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  }

  function handleTheme() {
    theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light');
  }

  return (
    <header className={`${s.root} ${isScrolled && s['is-scrolled']}`}>
      <Link href="/">About</Link>
      <Link href="/blog">Blog</Link>
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
