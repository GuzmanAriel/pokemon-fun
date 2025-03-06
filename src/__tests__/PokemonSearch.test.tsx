import React from "react"; 
import "@testing-library/jest-dom"; // Import this to enable `toBeInTheDocument`
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import Home from "../app/page";  
import { Provider } from "react-redux";
import { store } from "../store/store";

test("renders the Pokémon search input", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const input = screen.getByPlaceholderText("Enter Pokémon Name");
  expect(input).toBeInTheDocument();
});
