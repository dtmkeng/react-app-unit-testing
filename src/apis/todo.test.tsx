import http from "./base";
import * as service from "./todo";

jest.mock("./base.tsx");

describe("Todo", () => {
  it("should get todo by id", () => {
    http.get = jest.fn();
    service.get(1);
    expect(http.get).toBeCalledWith("/todos/1");
  });

  it("should get todo by given data", () => {
    http.get = jest.fn();
    service.get(2);
    expect(http.get).toBeCalledWith("/todos/2");
  });
});
