import { render, screen } from "@testing-library/react";
import { Greet } from "../greet/Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Aryan" />);
    const textElement = screen.getByText("Hello Aryan");
    expect(textElement).toBeInTheDocument();
  });
});
