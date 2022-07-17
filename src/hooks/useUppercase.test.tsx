import { act, renderHook } from "@testing-library/react-hooks";
import { useUppercase } from "./useUppercase";

describe("UseUppercase", () => {
  it("returns current initial value, uppercased", () => {
    const { result } = renderHook(() => useUppercase("Test string"));

    expect(result.current.value).toEqual("TEST STRING");
  });

  it("changes the `value` and uppercases it", () => {
    const { result } = renderHook(() => useUppercase("Test string"));

    act(() => result.current.update("Updated"));
    expect(result.current.value).toEqual("UPDATED");
  });

  it("updates the value", () => {
    const { result, rerender } = renderHook(({ text }) => useUppercase(text), {
      initialProps: { text: "Test String" },
    });

    rerender({ text: "Updated!" });
    expect(result.current.value).toEqual("UPDATED!");
  });
});
