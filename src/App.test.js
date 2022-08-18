import { render, screen } from '@testing-library/react';
import App from './App';

test('star wars must be in the paragraph', () => {
  render(<App />);
  const linkElement = screen.getByText(/star wars/i);
  expect(linkElement).toBeInTheDocument();
});

