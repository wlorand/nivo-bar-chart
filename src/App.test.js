import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nivo bar chart heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/nivo bar chart/i);
  expect(headingElement).toBeInTheDocument();
});
