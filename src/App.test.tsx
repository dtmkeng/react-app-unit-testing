import { cleanup, render, screen } from "@testing-library/react";
import App from "App";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);
describe("App", () => {
  it("should not match route", () => {
    const badRoute = "/some/bad/route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Not match route./i)).toBeInTheDocument();
  });

  it("should route to home page when route is match /", () => {
    const badRoute = "/";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it("should route to about page when route is match /about", () => {
    const badRoute = "/about";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
