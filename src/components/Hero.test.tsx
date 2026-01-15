import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

test('exibe nome no Hero', () => {
  render(<Hero />);
  expect(screen.getByText(/olá, eu sou/i)).toBeInTheDocument();
});
