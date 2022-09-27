import { useContext } from 'react';
import { ThemeContext } from 'context/theme';
import { Footer, Header } from 'components/ui';
import s from './Layout.module.css';

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="layout" className={`${s.root} ${theme}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
