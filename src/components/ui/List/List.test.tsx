import { render, screen } from '@testing-library/react';
import List from './List';
import { ProjectFeaturedCard, ProjectCard } from 'components/items';
import repositories from '__mocks__/repos.json';

describe('List', () => {
  it('renders two featured project cards in a list', () => {
    render(<List items={repositories} renderItem={ProjectFeaturedCard} />);

    expect(screen.getAllByLabelText('post summary').length).toEqual(2);
  });

  it('renders four repositories in a list', () => {
    render(<List items={repositories} renderItem={ProjectCard} />);

    expect(screen.getAllByLabelText('repository summary').length).toEqual(4);
  });
});
