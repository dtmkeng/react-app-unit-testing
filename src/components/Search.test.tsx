import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
afterEach(cleanup);
describe("Search", () => {
  it("should have input", () => {
    render(<Search setValue={jest.fn()} />);
    expect(screen.getByTestId("keyword")).toBeTruthy();
    expect(screen.getByTestId("button")).toBeTruthy();
    expect(screen.getByTestId("button")).toBeDisabled();
  });

  it("should enable when input value is not empty", () => {
    render(<Search setValue={jest.fn()} />);
    fireEvent.change(screen.getByTestId("keyword"), {
      target: { value: "new" },
    });
    expect(screen.getByTestId("button")).toBeEnabled();
  });

  it("should disable when change input is empty", () => {
    render(<Search setValue={jest.fn()} />);
    fireEvent.change(screen.getByTestId("keyword"), {
      target: { value: "new" },
    });
    expect(screen.getByTestId("button")).toBeEnabled();

    fireEvent.change(screen.getByTestId("keyword"), {
      target: { value: "" },
    });
    expect(screen.getByTestId("button")).toBeDisabled();
  });

  it("should set value call function when input change", () => {
    const setValue = jest.fn();
    render(<Search setValue={setValue} />);

    fireEvent.change(screen.getByTestId("keyword"), {
      target: { value: "test-1" },
    });

    expect(setValue).toBeCalledWith("test-1");
  });

  it("should set value call function when input change  given data", () => {
    const setValue = jest.fn();
    render(<Search setValue={setValue} />);

    fireEvent.change(screen.getByTestId("keyword"), {
      target: { value: "new-11" },
    });

    expect(setValue).toBeCalledWith("new-11");
  });
});
