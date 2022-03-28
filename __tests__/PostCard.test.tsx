import { render, screen } from '@testing-library/react';
import fs from 'fs';
import PostCard from '../components/PostCard';
import { Post } from '../types/types';

describe('<PostCard />', () => {
  let postProps: Post;
  beforeAll(
    () =>
      (postProps = JSON.parse(
        fs.readFileSync('__mocks__/posts.json').toString()
      )[0])
  );

  it('renders the component without any props', () => {
    render(<PostCard />);
  });

  it('renders the component with full props', () => {
    render(<PostCard {...postProps} />);

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