export const deleteCard = (didDrob, selectedCardSet, deleteCardInSlot) => {
  if (didDrob === true) {
    selectedCardSet !== undefined && deleteCardInSlot(selectedCardSet.length);
  }
};

// export const deleteCardInSlot = (index, deleteDragItemInSlots) => {
//   console.log("buuuu,", deleteDragItemInSlots);
//   const deleteItemCount = index;
//   [...Array(deleteItemCount)].forEach(() => deleteDragItemInSlots());
// };
