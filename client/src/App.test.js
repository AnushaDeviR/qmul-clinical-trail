import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  expect(
    screen.getByText("XYZ Clinical Trail Application")
  ).toBeInTheDocument();

  expect(
    screen.getByText("a platform to recruit clinical trail patients")
  ).toBeInTheDocument();

  expect(screen.getByRole("button")).toBeInTheDocument("Add New Patient");
});
