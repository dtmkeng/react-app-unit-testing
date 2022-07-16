import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
afterEach(cleanup);
// Mock other Componets
jest.mock("./Tab.tsx", () => {
  return {
    __esModule: true,
    default: () => {
      return <div></div>;
    },
  };
});

describe("Couter", () => {
  it("should render plus button", () => {
    render(<Counter inital={0} />);
    expect(screen.getByText("+")).toBeTruthy();
  });

  it("should render subtrack button", () => {
    render(<Counter inital={0} />);
    expect(screen.getByText("-")).toBeTruthy();
  });

  it("should display current counted number", () => {
    render(<Counter inital={0} />);
    expect(screen.getByText("0")).toBeTruthy();
  });

  it("should display current counted number with given init state", () => {
    render(<Counter inital={0} />);
    expect(screen.getByText("0")).toBeTruthy();
  });

  it("should count up when click plus button", () => {
    render(<Counter inital={0} />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("1")).toBeTruthy();
  });

  it("should count up when click plus button with inital data", () => {
    render(<Counter inital={10} />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  it("should count down when click subtrack button", () => {
    render(<Counter inital={10} />);
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  it("should count down when click subtrack button with given inital data", () => {
    render(<Counter inital={112} />);
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("111")).toBeTruthy();
  });
});
