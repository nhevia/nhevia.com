import { render, screen, act } from '@testing-library/react';
import fs from 'fs';

import { StackoverflowData } from 'types/items';
import StackoverflowCard from './StackoverflowCard';

describe('StackoverflowCard', () => {
  let soProps: StackoverflowData;
  beforeAll(() => {
    soProps = JSON.parse(fs.readFileSync('src/__mocks__/so.json').toString());
  });

  it('renders a card with stackoverflow activity', async () => {
    await act(async () => {
      render(<StackoverflowCard />);
    });

    expect(screen.getByText('Reputation: 13937')).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      'https://stackoverflow.com/users/6402990/nicolas-hevia'
    );
    expect(screen.getByText('Rating: top 2% this year')).toBeInTheDocument();
    expect(screen.getByLabelText('stackoverflow logo')).toBeInTheDocument();
    expect(
      screen.getByLabelText('my stackoverflow avatar')
    ).toBeInTheDocument();

    expect(screen.getByText('Badges:')).toBeInTheDocument();
    expect(screen.getByText('● 4')).toBeInTheDocument();
    expect(screen.getByText('● 21')).toBeInTheDocument();
    expect(screen.getByText('● 30')).toBeInTheDocument();
  });
});
