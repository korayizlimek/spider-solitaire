import { expect, test } from "@jest/globals";
import { renderHook, act } from "@testing-library/react-hooks";
import {
  canSelectedCardSet,
  closedAllCard,
} from "../../../helpers/card/cardControls";

// describe("isOneCardSetCompleted", () => {
//   // test.only("test", () => {
//   //   const { result } = renderHook(() => CardTable());
//   //   console.log(result);
//   //   act(() => {
//   //     result.current.handleCompletedCardSetCount();
//   //   });

//   //   expect(result.current.completedCardSetCount.toBe(1));
//   // });
//   console.log("yapilacak");
// });

describe("canSelectedCardSet", () => {
  const cardsInSlot = [
    {
      id: 39,
      isOpen: true,
      name: "8",
      suit: "Spade",
      value: 8,
    },
    {
      id: 40,
      isOpen: true,
      name: "2",
      suit: "Spade",
      value: 2,
    },
    {
      id: 41,
      isOpen: true,
      name: "5",
      suit: "Spade",
      value: 5,
    },
    {
      id: 42,
      isOpen: true,
      name: "A",
      suit: "Spade",
      value: 1,
    },
    {
      id: 43,
      isOpen: true,
      name: "2",
      suit: "Spade",
      value: 2,
    },
    {
      id: 44,
      isOpen: true,
      name: "3",
      suit: "Spade",
      value: 3,
    },
  ];
  test("should return true when in reverse order after selected index in the slot", () => {
    const index = 3;

    const result = canSelectedCardSet(index, cardsInSlot);

    expect(result).toBeTruthy();
  });
  test("should return false when in not reverse order after selected index in the slot", () => {
    const index = 1;

    const result = canSelectedCardSet(index, cardsInSlot);

    expect(result).toBeFalsy();
  });
  test("should return false when in not reverse order after selected index in the slots", () => {
    const index = 8;

    const result = canSelectedCardSet(index, cardsInSlot);

    expect(result).toBe("index is out of range");
  });
});

describe("closedAllCard", () => {
  test("should make all cards closed(face down)", () => {
    const allCards = [
      {
        id: 42,
        isOpen: true,
        name: "A",
        suit: "Spade",
        value: 1,
      },
      {
        id: 43,
        isOpen: false,
        name: "2",
        suit: "Spade",
        value: 2,
      },
      {
        id: 44,
        isOpen: true,
        name: "3",
        suit: "Spade",
        value: 3,
      },
    ];

    const isClosedAllCards = closedAllCard(allCards);

    expect(isClosedAllCards[1].isOpen).toBeFalsy();
  });
});
