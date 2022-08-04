import { render, screen } from '@testing-library/react';
import List from './List';
import { BlogpostCard } from 'components/items/blogpost';
import { RepositoryCard } from 'components/items/repository';
import { StackoverflowCard } from 'components/items/stackoverflow';
import blogposts from '__mocks__/posts.json';
import repositories from '__mocks__/repos.json';
import answers from '__mocks__/so.json';

describe('List', () => {
  it('renders two blogposts in a list', () => {
    render(<List items={blogposts} renderItem={BlogpostCard} />);

    expect(screen.getAllByLabelText('post summary').length).toEqual(2);
  });

  it('renders four repositories in a list', () => {
    render(<List items={repositories} renderItem={RepositoryCard} />);

    expect(screen.getAllByLabelText('repository summary').length).toEqual(4);
  });

  it('renders five answers in a list', () => {
    render(
      <List
        items={answers.items.map((i: any) => ({ ...i, id: i.title }))}
        renderItem={StackoverflowCard}
      />
    );

    expect(
      screen.getAllByLabelText('stackoverflow answer summary').length
    ).toEqual(5);
  });
});
