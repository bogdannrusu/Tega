// App.test.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Intro from '../components/Intro';

describe('App Component', () => {
  it('renders Main component on the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <>
          <Intro />
        </>
      </MemoryRouter>
    );

    // 
    const headingElementIntro = screen.getByText(/Fă primul pas spre obținerea permisului de conducere/i);
    expect(headingElementIntro).toBeInTheDocument();
  });
});
