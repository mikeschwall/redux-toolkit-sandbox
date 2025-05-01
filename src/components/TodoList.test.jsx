import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it, expect } from 'vitest';
import TodoList from './TodoList';
import { store } from '../store';

describe('TodoList', () => {
  it('renders todos from API', async () => {
    render(
      <Provider store={store}>
       <TodoList/>
      </Provider>
    );

    // wait for some async content from useFetchTodosQuery
    const item = await screen.findByText(/delectus aut autem/i);
    expect(item).toBeInTheDocument();
  });

  it('renders more than 2 list items', async () => {
    render(
      <Provider store={store}>
       <TodoList/>
      </Provider>
    );

    // wait for some async content from useFetchTodosQuery
    const li = await screen.queryAllByRole("listitem")
    expect(li.length).toBeGreaterThan(3)
  });

});
