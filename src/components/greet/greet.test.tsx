import { render, screen } from '@testing-library/react';
import Greet from './greet';

test('Checking the presence of Hello', () => {
  render(<Greet />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

test('Greeting with the props', () => {
  render(<Greet name='Achuthan' />);
  const textElement = screen.getByText(/hello Achuthan/i);
  expect(textElement).toBeInTheDocument();
});
