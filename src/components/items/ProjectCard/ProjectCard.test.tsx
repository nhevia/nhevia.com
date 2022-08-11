import { render, screen } from '@testing-library/react';
import fs from 'fs';
import ProjectCard from './ProjectCard';
import { Repository } from 'types/items';

describe('RepositoryCard', () => {
  let repoProps: Repository;
  beforeAll(() => {
    repoProps = JSON.parse(
      fs.readFileSync('src/__mocks__/repos.json').toString()
    )[0];
  });

  it('renders the component without any props', () => {
    render(<ProjectCard />);
  });

  it('renders the component with full props', () => {
    render(<ProjectCard {...repoProps} />);

    const url = screen.getByRole('link');
    const title = screen.getByTestId('title');
    const description = screen.getByTestId('description');
    const language = screen.getByTestId('language');
    const stargazers = screen.getByTestId('stargazers');
    const forks = screen.getByTestId('forks');

    expect(url).toHaveAttribute('href', 'https://github.com/nhevia/ctvee');
    expect(title).toContainHTML('nhevia/ctvee');
    expect(description).toContainHTML('Site to query your favourite series');
    expect(language).toContainHTML('JavaScript');
    expect(stargazers).toContainHTML('6');
    expect(forks).toContainHTML('0');
  });
});
