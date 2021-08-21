import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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

describe("form", () => {
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

  test("should form's style display is inline when initially ", () => {
    const { getByTestId } = render(<Leadership />);

    const formEl = getByTestId("form");
    const formElDisplay = formEl.style.display;

    expect(formElDisplay).toBe("inline");
  });

  test("should form's style is none when click or enter", () => {
    const { getByTestId } = render(<Leadership />);

    const inputEl = getByTestId("input");
    const buttonEl = getByTestId("button");
    const formEl = getByTestId("form");
    const formElDisplay = formEl.style.display;

    expect(inputEl.value).toBe("");

    fireEvent.change(inputEl, {
      target: {
        value: "John Doe",
      },
    });

    fireEvent.click(buttonEl);

    expect(formElDisplay).toBe("inline");
  });

  test("the input value should display on the screen", () => {
    const { getByTestId } = render(<Leadership />);

    const inputEl = getByTestId("input");
    const buttonEl = getByTestId("button");

    fireEvent.change(inputEl, {
      target: {
        value: "John Doe",
      },
    });

    fireEvent.click(buttonEl);

    const displayName = screen.getByText(/John Doe/i);

    expect(displayName).toBeTruthy();
  });
});
