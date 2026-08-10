import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application home page', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /home page/i });
  expect(heading).toBeInTheDocument();
});
