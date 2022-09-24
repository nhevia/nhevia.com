import { render, screen } from '@testing-library/react';
import List from './List';
import { ProjectFeaturedCard } from 'components/items';
import repositories_featured from '__mocks__/reposfeatured.json';

describe('List', () => {
  it('renders three featured project cards in a list', () => {
    render(
      <List items={repositories_featured} renderItem={ProjectFeaturedCard} />
    );

    expect(screen.getAllByText('DEMO').length).toEqual(3);
  });
});
