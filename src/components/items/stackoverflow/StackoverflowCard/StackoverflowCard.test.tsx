import { render, screen } from '@testing-library/react';
import fs from 'fs';
import StackoverflowCard from './StackoverflowCard';
import { So } from 'types/items';

describe('StackoverflowCard', () => {
  let soProps: So;
  beforeAll(() => {
    soProps = JSON.parse(fs.readFileSync('src/__mocks__/so.json').toString())
      .items[0];
  });

  it('shows a stackoverflow card with a link, title and score', () => {
    render(<StackoverflowCard {...soProps} />);

    expect(
      screen.getByLabelText('stackoverflow answer summary')
    ).toBeInTheDocument();

    expect(screen.getByText('(score: 1107)')).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      'https://stackoverflow.com/a/64626556'
    );
    expect(
      screen.getByText(
        "Error: 'node-sass' version 5.0.0 is incompatible with ^4.0.0"
      )
    ).toBeInTheDocument();
  });
});
