import { expect, test } from "@jest/globals";
import {
  cardRules,
  isRulesCorrectCardSet,
} from "../../../helpers/card/cardRules";

describe("cardRules", () => {
  test("should return true when parentElement(previous card) is one smaller than the childElement(next card)", () => {
    const parentElement = 5;
    const childElement = 6;

    const result = cardRules(parentElement, childElement);

    expect(result).toBe(true);
  });

  test("should return false when parentElement is not one smaller than the childElement ", () => {
    const parentElement = 9;
    const childElement = 6;

    const result = cardRules(parentElement, childElement);

    expect(result).toBe(false);
  });

  test("should return false when childElement is undefined ", () => {
    const parentElement = 9;
    const childElement = undefined;

    const result = cardRules(parentElement, childElement);

    expect(result).toBe(false);
  });

  test("should return false when elements are undefined ", () => {
    const parentElement = undefined;
    const childElement = undefined;

    const result = cardRules(parentElement, childElement);

    expect(result).toBe(false);
  });
});

describe("isRulesCorrectCardSet", () => {
  test("should return true when trying to drag an element", () => {
    const selectedCardSet = [
      {
        id: 39,
        isOpen: true,
        name: "A",
        suit: "Spade",
        value: 1,
      },
    ];

    const result = isRulesCorrectCardSet(selectedCardSet);

    expect(result).toBe(true);
  });

  test("should return true when trying to drag many element in reverse order", () => {
    const selectedCardSet = [
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
      {
        id: 41,
        isOpen: true,
        name: "3",
        suit: "Spade",
        value: 3,
      },
    ];

    const result = isRulesCorrectCardSet(selectedCardSet);

    expect(result).toBe(true);
  });

  test("should return false when trying to drag many element in not reverse order", () => {
    const selectedCardSet = [
      {
        id: 39,
        isOpen: true,
        name: "3",
        suit: "Spade",
        value: 3,
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
        name: "A",
        suit: "Spade",
        value: 1,
      },
    ];

    const result = isRulesCorrectCardSet(selectedCardSet);

    expect(result).toBe(false);
  });

  test("should return error.message when selectedCardSet array is undefined", () => {
    const selectedCardSet = [
      {
        id: undefined,
        isOpen: undefined,
        name: undefined,
        suit: undefined,
        value: undefined,
      },
    ];

    const result = isRulesCorrectCardSet(selectedCardSet);

    expect(result).toBe("element.value not be undefined");
  });
});
