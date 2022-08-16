import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('renders', () => {
    render(<Loader />);

    expect(screen.getByTestId('loading dots')).toBeInTheDocument();
  });
});
