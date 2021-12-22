import Github from '../public/icons/github.svg';
import Twitter from '../public/icons/twitter.svg';

const Header = () => {
  return (
    <div className="header-icons">
      <a target="_blank" href="https://github.com/nhevia" rel="noreferrer">
        <Github />
      </a>
      <a target="_blank" href="https://twitter.com/n_hevia" rel="noreferrer">
        <Twitter />
      </a>
    </div>
  );
};

export default Header;
