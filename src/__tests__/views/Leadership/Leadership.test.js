import React from "react";
import { render } from "@testing-library/react";
import Leadership from "../../../views/Leadership/Leadership";
import userEvent from "@testing-library/user-event";

describe("<Leadership /> h2", () => {
  test("render without crashing", () => {
    render(<Leadership />);
  });

  test("title renders with correct text", () => {
    const { getByTestId } = render(<Leadership />);

    const titleEl = getByTestId("title");

    expect(titleEl.textContent).toBe("You Win");
  });
});

describe("<Leadership /> input", () => {
  test("initial input value should be empty", () => {
    const { getByTestId } = render(<Leadership />);

    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("");
  });

  test("should input value is correct when change input", () => {
    const { getByTestId } = render(<Leadership />);

    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("");

    userEvent.type(inputEl, "John Doe");

    expect(inputEl.value).toBe("John Doe");
  });
});
