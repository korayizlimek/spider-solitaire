export const cardRules = (parentElement, childElement) => {
  const parentElementPlusOne = parentElement + 1;

  const isRulesCorrect = false;
  if (parentElementPlusOne === childElement) {
    const isRulesCorrect = true;
    return isRulesCorrect;
  } else {
    return isRulesCorrect;
  }
};

export const isRulesCorrectCardSet = (selectedCardSet) => {
  try {
    let canBeDrag = true;
    if (selectedCardSet.length > 1) {
      for (let i = 0; i < selectedCardSet.length - 1; i++) {
        const element = selectedCardSet[i];
        if (element.value === undefined) {
          new Error("element.value not be undefined");
        }
        const elementValue = element.value;

        const childElement = selectedCardSet[i + 1];
        const childElementValue = childElement.value;

        const isRulesCorrect = cardRules(elementValue, childElementValue);
        if (isRulesCorrect === false) {
          canBeDrag = false;
          return canBeDrag;
        }
      }
      return canBeDrag;
    }
    if (selectedCardSet[0].value === undefined) {
      throw new Error("element.value not be undefined");
    }
    return canBeDrag;
  } catch (error) {
    return error.message;
  }
};
