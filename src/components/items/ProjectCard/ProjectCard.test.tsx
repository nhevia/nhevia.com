import { render, screen } from '@testing-library/react';
import fs from 'fs';
import ProjectCard from './ProjectCard';
import { Repository } from 'types/items';

describe('RepositoryCard', () => {
  let repoProps: Repository;

  beforeAll(() => {
    repoProps = JSON.parse(
      fs.readFileSync('src/__mocks__/repos.json').toString()
    )[1];
  });

  it('renders the component with all project data', () => {
    render(<ProjectCard {...repoProps} />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/nhevia/ctvee'
    );
    expect(screen.getByTestId('title')).toContainHTML('nhevia/ctvee');
    expect(screen.getByTestId('description')).toContainHTML(
      'Site to query your favourite series'
    );
    expect(screen.getByTestId('language')).toContainHTML('JavaScript');
    expect(screen.getByTestId('stargazers')).toContainHTML('6');
    expect(screen.getByTestId('forks')).toContainHTML('0');
  });
});
