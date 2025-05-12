import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect, test } from "vitest";
import { Provider } from "react-redux";
import { store } from "../store";



test("renders welcome text", async () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = await screen.findByText(/songs/i);
  expect(linkElement).toBeInTheDocument();
});
