import { cleanup, render, screen } from "@testing-library/react";
import withLoading from "./withLoading";

afterEach(cleanup);
describe("WithLoading", () => {
  it("should render loading when component in loading state", () => {
    const MockComponent = (prop: any) => {
      return <div>hello</div>;
    };
    const Component = withLoading(MockComponent);
    render(<Component isLoading={true} />);

    expect(screen.getByText(/Loading data./i)).toBeTruthy();
  });

  it("should render component when loading state is done", () => {
    const MockComponent = (prop: any) => {
      return <div>hello</div>;
    };
    const Component = withLoading(MockComponent);
    render(<Component isLoading={false} />);

    expect(screen.getByText(/hello/i)).toBeTruthy();
  });
});
