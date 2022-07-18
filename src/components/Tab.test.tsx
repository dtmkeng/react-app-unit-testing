import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Tab from "./Tab";

afterEach(cleanup);
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Tab", () => {
  it("should go to tab a when click tab a", () => {
    render(<Tab open={true} />);

    expect(screen.getByText(/Tab A/i)).toBeTruthy();

    fireEvent.click(screen.getByText(/Tab A/i));

    expect(mockedUsedNavigate).toBeCalledWith("/tab-a");
  });

  it("should go to tab B when click tab B", () => {
    render(<Tab open={true} />);

    expect(screen.getByText(/Tab B/i)).toBeTruthy();

    fireEvent.click(screen.getByText(/Tab B/i));

    expect(mockedUsedNavigate).toBeCalledWith("/tab-b");
  });
});
