import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import CheckboxWithLabel from "./CheckboxWithLabel";

afterEach(cleanup);

describe("CheckboxWithLabel", () => {
  it("CheckboxWithLabel changes the text after click", () => {
    render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    expect(screen.getByText(/off/i)).toBeTruthy();

    fireEvent.click(screen.getByText(/off/i));

    expect(screen.getByText(/on/i)).toBeTruthy();
  });

  it("should get off when current labale is off", () => {
    render(<CheckboxWithLabel labelOn="Off" labelOff="On" />);

    expect(screen.getByText(/on/i)).toBeTruthy();

    fireEvent.click(screen.getByText(/on/i));

    expect(screen.getByText(/off/i)).toBeTruthy();
  });
});
