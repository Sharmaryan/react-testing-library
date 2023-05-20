import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  it("renders with a name", () => {
    render(<Greet name="Aryan" />);
    const textElement = screen.getByText("Hello Aryan");
    expect(textElement).toBeInTheDocument();
  });
});
