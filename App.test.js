import { render, screen } from "@testing-library/react";
import App from "./App";

test("task1Test", () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});

test("task2Test", () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Hello World");
});

test("task2Test", () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Hello World");
});

test("task3Test", () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp2");
  expect(linkElement).toHaveTextContent("Mohammad Abdus Salam: physicist");
});
