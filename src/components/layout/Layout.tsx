import React, { useState } from 'react';
import { Footer, Header } from 'components/ui';
import s from './Layout.module.css';

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  const [theme, setTheme] = useState('theme-dark');

  return (
    <div id="layout" className={`${s.root} ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
    </div>
  );
}
