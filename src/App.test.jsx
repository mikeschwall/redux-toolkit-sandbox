// App.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App component', () => {
  it('renders Hello World', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
