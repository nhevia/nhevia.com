import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  let mockTheme: () => void;
  beforeEach(() => {
    mockTheme = jest.fn();
  });

  it('shows twitter and github links', () => {
    render(<Header theme="theme-light" setTheme={mockTheme} />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
  });

  it('changes theme from light to dark', () => {
    render(<Header theme="theme-light" setTheme={mockTheme} />);

    expect(screen.getByLabelText('change to dark theme')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'), {});
    expect(mockTheme).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
  });
});
