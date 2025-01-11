import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { ButtonComponent } from "./button";

describe("ButtonComponent", () => {
  it("renders the button with the correct label", () => {
    render(<ButtonComponent label="Click Me" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonComponent label="Click Me" onClick={handleClick} />);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
