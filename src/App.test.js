import React from "react";
import { render, screen } from "@testing-library/react";
import {
  MemoryRouter
} from "react-router-dom";

import App from "./App";

test("Home page is displayed", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /home/i
    })
  ).toBeInTheDocument();
});

test("About Us page is displayed", () => {
  render(
    <MemoryRouter initialEntries={["/aboutus"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /about us/i
    })
  ).toBeInTheDocument();
});

test("Contact Us page is displayed", () => {
  render(
    <MemoryRouter initialEntries={["/contactus"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /contact us/i
    })
  ).toBeInTheDocument();
});

test("Navigation links are available", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("link", {
      name: /home/i
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", {
      name: /about us/i
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", {
      name: /contact us/i
    })
  ).toBeInTheDocument();
});
