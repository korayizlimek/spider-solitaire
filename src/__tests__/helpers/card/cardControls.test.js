import { expect, test } from "@jest/globals";
import {
  canSelectedCardSet,
  closedAllCard,
  isOneCardSetCompleted,
} from "../../../helpers/card/cardControls";

describe("isOneCardSetCompleted", () => {
  test("should return true when the last 13 cards in the slot are properly sorted", () => {
    const cardsInSlot = [
      { id: 39, name: "5", value: 5 },
      { id: 40, name: "J", value: 11 },
      { id: 41, name: "A", value: 1 },
      { id: 1, name: "A", value: 1 },
      { id: 2, name: "2", value: 2 },
      { id: 3, name: "3", value: 3 },
      { id: 4, name: "4", value: 4 },
      { id: 5, name: "5", value: 5 },
      { id: 6, name: "6", value: 6 },
      { id: 7, name: "7", value: 7 },
      { id: 8, name: "8", value: 8 },
      { id: 9, name: "9", value: 9 },
      { id: 10, name: "10", value: 10 },
      { id: 11, name: "J", value: 11 },
      { id: 12, name: "Q", value: 12 },
      { id: 13, name: "K", value: 13 },
    ];

    const result = isOneCardSetCompleted(cardsInSlot);

    expect(result).toBeTruthy();
  });

  test("should return false when the last 13 cards in the slot are NOT properly sorted", () => {
    const cardsInSlot = [
      { id: 39, name: "5", value: 5 },
      { id: 40, name: "J", value: 11 },
      { id: 41, name: "A", value: 1 },
      { id: 1, name: "A", value: 1 },
      { id: 2, name: "2", value: 2 },
      { id: 3, name: "3", value: 3 },
      { id: 4, name: "4", value: 4 },
      { id: 5, name: "5", value: 5 },
      { id: 6, name: "6", value: 6 },
      { id: 7, name: "7", value: 7 },
      { id: 8, name: "8", value: 8 },
      { id: 52, name: "1", value: 1 },
      { id: 85, name: "1", value: 1 },
      { id: 11, name: "J", value: 11 },
      { id: 12, name: "Q", value: 12 },
      { id: 13, name: "K", value: 13 },
    ];

    const result = isOneCardSetCompleted(cardsInSlot);

    expect(result).toBeFalsy();
  });

  test("should return false when the slot has not 13 cards", () => {
    const cardsInSlot = [
      { id: 1, name: "A", value: 1 },
      { id: 2, name: "2", value: 2 },
      { id: 3, name: "3", value: 3 },
      { id: 4, name: "4", value: 4 },
      { id: 5, name: "5", value: 5 },
      { id: 6, name: "6", value: 6 },
      { id: 7, name: "7", value: 7 },
      { id: 8, name: "8", value: 8 },
      { id: 9, name: "9", value: 9 },
      { id: 10, name: "10", value: 10 },
    ];

    const result = isOneCardSetCompleted(cardsInSlot);

    expect(result).toBeFalsy();
  });
  console.log("yapilacak");
});

describe("canSelectedCardSet", () => {
  const cardsInSlot = [
    { id: 39, isOpen: true, name: "8", suit: "Spade", value: 8 },
    { id: 40, isOpen: true, name: "2", suit: "Spade", value: 2 },
    { id: 41, isOpen: true, name: "5", suit: "Spade", value: 5 },
    { id: 42, isOpen: true, name: "A", suit: "Spade", value: 1 },
    { id: 43, isOpen: true, name: "2", suit: "Spade", value: 2 },
    { id: 44, isOpen: true, name: "3", suit: "Spade", value: 3 },
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
      { id: 42, isOpen: true, name: "A", suit: "Spade", value: 1 },
      { id: 43, isOpen: false, name: "2", suit: "Spade", value: 2 },
      { id: 44, isOpen: true, name: "3", suit: "Spade", value: 3 },
    ];

    const isClosedAllCards = closedAllCard(allCards);

    expect(isClosedAllCards[1].isOpen).toBeFalsy();
  });
});
