/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'
import App from './App';

test('Ar trebui sa mearga testul dat', () => {
  render(<App />);
  const linkElement = screen.getByText(/BRS Test/i);
  expect(linkElement).toBeVisible();
});