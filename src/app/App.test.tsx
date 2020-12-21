import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jonathan Serbent', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jonathan Serbent/i);
  expect(linkElement).toBeInTheDocument();
});
