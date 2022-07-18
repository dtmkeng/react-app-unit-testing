import { cleanup, render } from "@testing-library/react";
import React from "react";
import Bar from "./Bar";
const mockChildComponent = jest.fn();
jest.mock("./Tab.tsx", () => {
  return {
    __esModule: true,
    default: (props: any) => {
      mockChildComponent(props);
      return <div></div>;
    },
  };
});

afterEach(cleanup);
describe("Bar", () => {
  it("should set value when state change", () => {
    const setValue = jest.fn();
    React.useState = jest.fn(() => ["keng", jest.fn()]);
    // .mockReturnValueOnce(["5ft", () => console.log("setHeight")]);

    render(<Bar setValue={setValue} />);
    expect(setValue).toBeCalledWith("keng");
  });

  it("should set value when state change given state", () => {
    const setValue = jest.fn();
    React.useState = jest.fn().mockReturnValue(["test-2", jest.fn()]);
    render(<Bar setValue={setValue} />);
    expect(setValue).toBeCalledWith("test-2");
  });
});
