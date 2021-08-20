import { addCardInSlot } from "../../../helpers/slot/addCard";

describe("addCardInSlot", () => {
  const selectedCardSet = [
    {
      id: 42,
      isOpen: true,
      name: "3",
      suit: "Spade",
      value: 3,
    },
  ];

  const cardsInSlot = [
    {
      id: 39,
      isOpen: true,
      name: "A",
      suit: "Spade",
      value: 1,
    },
    {
      id: 40,
      isOpen: true,
      name: "2",
      suit: "Spade",
      value: 2,
    },
  ];

  test("should push card when selectedCardSet is drop in slot", () => {
    addCardInSlot(selectedCardSet, cardsInSlot);
    // console.log(cardsInSlot);

    expect(cardsInSlot.length).toBe(3);
  });
});
