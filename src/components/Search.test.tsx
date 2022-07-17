import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
afterEach(cleanup);
describe("Search", () => {
  it("should have input", () => {
    render(<Search />);
    expect(screen.getByTestId("keyword")).toBeTruthy();
    expect(screen.getByTestId("button")).toBeTruthy();
    expect(screen.getByTestId("button")).toBeDisabled();
  });

  it("should enable when input value is not empty", () => {
    render(<Search />);
    fireEvent.change(screen.getByTestId("keyword"), {
      target: { value: "new" },
    });
    expect(screen.getByTestId("button")).toBeEnabled();
  });

  it("should disable when change input is empty", () => {
    render(<Search />);
    fireEvent.change(screen.getByTestId("keyword"), {
      target: { value: "new" },
    });
    expect(screen.getByTestId("button")).toBeEnabled();

    fireEvent.change(screen.getByTestId("keyword"), {
      target: { value: "" },
    });
    expect(screen.getByTestId("button")).toBeDisabled();
  });
});
