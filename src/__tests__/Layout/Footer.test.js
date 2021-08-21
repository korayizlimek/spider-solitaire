import { render, screen } from "@testing-library/react";
import Footer from "../../layout/Footer";

describe("Footer", () => {
  test("render without crashing", () => {
    render(<Footer />);
  });

  test("Footer should include Author", () => {
    render(<Footer />);

    const result = screen.getByText(/Author/i);

    expect(result).toBeTruthy();
  });
});
