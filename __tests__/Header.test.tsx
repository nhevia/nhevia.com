import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header theme="theme-light" setTheme={jest.fn()} />);
  });

  it('renders a component with header element and correct props', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders links', () => {
    const linkGithub = screen.getByRole('link', { name: 'Github' });
    const linkTwitter = screen.getByRole('link', { name: 'Github' });

    expect(linkGithub).toBeInTheDocument();
    expect(linkTwitter).toBeInTheDocument();
  });

  it('renders a theme changer button', () => {
    const buttonTheme = screen.getByRole('button');
    expect(buttonTheme).toBeInTheDocument();
    expect(buttonTheme).toHaveStyle('all: unset');
  });
});
