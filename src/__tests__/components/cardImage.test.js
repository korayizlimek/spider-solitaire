import { render } from "@testing-library/react";
import CardImage from "../../components/CardImage";

describe("CardImage", () => {
  test("render without crashing", () => {
    const card = { name: 8, suit: "Spade", isOpen: true };
    render(<CardImage card={card} />);
  });

  test("should cardImage open(so cardImage must exist) when card's property 'isOpen' is true", () => {
    const card = { name: 8, suit: "Spade", isOpen: true };

    const { getByTestId } = render(<CardImage card={card} />);

    const imageEl = getByTestId("cardImage");

    expect(imageEl).toBeTruthy();
  });

  test("should cardBack open(so cardBack must exist) when card's property 'isOpen' is false", () => {
    const card = { name: 8, suit: "Spade", isOpen: false };

    const { getByTestId } = render(<CardImage card={card} />);

    const imageEl = getByTestId("cardBack");

    expect(imageEl).toBeTruthy();
  });
});
