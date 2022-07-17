import { cleanup, render, screen } from "@testing-library/react";
import { useContext } from "react";
import AuthContext, { AuthProvider } from "./Auth";

const TestingComponent = () => {
  const { user, isAdmin } = useContext(AuthContext);
  return (
    <>
      <p>{user}</p>
      <p>{isAdmin?.toString()}</p>
    </>
  );
};

afterEach(cleanup);

describe("AuthContext", () => {
  it("should display name user", () => {
    render(
      <AuthProvider>
        <TestingComponent />
      </AuthProvider>
    );

    expect(screen.getByText(/keng/i)).toBeTruthy();
    expect(screen.getByText(/true/i)).toBeTruthy();
  });
});
