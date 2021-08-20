import {
  deleteDragItemInSlots,
  firstFourSlotHasSixCard,
  lastSixSlotsHasFiveCard,
  openLastCardInSlot,
} from "../../../helpers/slot/SlotControls";

describe("openLastCardInSlot", () => {
  test("should return cards, when there is more than one card  and should open last card  in slot ", () => {
    const cardsInSlot = [
      {
        id: 39,
        isOpen: false,
        name: "A",
        suit: "Spade",
        value: 1,
      },
      {
        id: 40,
        isOpen: false,
        name: "2",
        suit: "Spade",
        value: 2,
      },
      {
        id: 41,
        isOpen: false,
        name: "3",
        suit: "Spade",
        value: 3,
      },
    ];

    openLastCardInSlot(cardsInSlot);

    expect(cardsInSlot[0].isOpen).toBeFalsy();
    expect(cardsInSlot[1].isOpen).toBeFalsy();
    expect(cardsInSlot[2].isOpen).toBeTruthy();
  });

  test("should empty array when there is no card in slot", () => {
    const cardsInSlot = [];

    openLastCardInSlot(cardsInSlot);
    // console.log(cardsInSlot);
    expect(cardsInSlot.length).toBe(0);
  });
});

describe("deleteDragItemInSlots", () => {
  test("it delete a card with index in slots ", () => {
    const index = 1;
    const slots = [
      [
        {
          id: 39,
          isOpen: false,
          name: "A",
          suit: "Spade",
          value: 1,
        },
        {
          id: 40,
          isOpen: false,
          name: "2",
          suit: "Spade",
          value: 2,
        },
      ],
      [
        {
          id: 39,
          isOpen: false,
          name: "4",
          suit: "Spade",
          value: 4,
        },
        {
          id: 40,
          isOpen: false,
          name: "5",
          suit: "Spade",
          value: 5,
        },
      ],
    ];
    deleteDragItemInSlots(index, slots);

    expect(slots[1].length).toBe(1);
  });
});

// describe("drawCardsToSlots", () => {
//   test("", () => {
//     const INITIAL_SLOTS_CARD_COUNT = 54;
//     const drawCards = getInitialDeck;

// const result = drawCardsToSlots(INITIAL_SLOTS_CARD_COUNT, drawCards);

//     expect(result[0].length).toBe(6);
//   });
// });

describe("firstFourSlotHasSixCard", () => {
  test("should return six card from drawCardSet to first four Slot", () => {
    const drawCardSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = firstFourSlotHasSixCard(drawCardSet);

    const expectDrawCardSet = [1, 2, 3, 4, 5, 6];

    expect(result).toStrictEqual(expectDrawCardSet);
  });
});

describe("lastSixSlotsHasFiveCard", () => {
  test("should return five card from drawCardSet to last four Slot", () => {
    const drawCardSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = lastSixSlotsHasFiveCard(drawCardSet);

    const expectDrawCardSet = [1, 2, 3, 4, 5];

    expect(result).toStrictEqual(expectDrawCardSet);
  });
});

// describe("DrawGiveNewCard", () => {
//   test("bla bla", () => {
//     const NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK = 10;
//     const slots = [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]];

//     const result = DrawGiveNewCard(
//       NEW_CARD_COUNT_WHEN_CARDDEALER_ONCLICK,
//       drawCards,
//       slots
//     );

//     expect(result[0]).toBe([1, 1]);
//   });
// });
