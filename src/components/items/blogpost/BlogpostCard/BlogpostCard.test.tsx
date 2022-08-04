import { render, screen } from '@testing-library/react';
import fs from 'fs';
import BlogpostCard from './BlogpostCard';
import { Post } from 'types/items';

describe('BlogpostCard', () => {
  let postProps: Post;
  beforeAll(
    () =>
      (postProps = JSON.parse(
        fs.readFileSync('src/__mocks__/posts.json').toString()
      )[0])
  );

  it('renders the component without any props', () => {
    render(<BlogpostCard />);
  });

  it('renders the component with full props', () => {
    render(<BlogpostCard {...postProps} />);

    const url = screen.getAllByRole('link')[0];

    const title = screen.getByTestId('title');
    const description = screen.getByTestId('description');
    const image = screen.getByAltText('sdoc - A simple documentation tool');

    expect(url).toHaveAttribute(
      'href',
      'https://dev.to/nicoh/sdoc-a-simple-documentation-tool-a64'
    );
    expect(title).toContainHTML('sdoc - A simple documentation tool');
    expect(description).toContainHTML("I'm building a simple doc tool");
    expect(image).toBeInTheDocument();
  });
});
