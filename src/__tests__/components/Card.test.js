import { render } from "@testing-library/react";
import Card from "../../components/Card";

describe("<Card />", () => {
  test("render without crashing", () => {
    render(<Card />);
  });

  // test("title renders with correct text", () => {
  //   const { getByTestId } = render(<Leadership />);

  //   const titleEl = getByTestId("title");

  //   expect(titleEl.textContent).toBe("You Win");
  // });
});
