export const cardRules = (element, childElement) => {
  const elementPlusOne = element + 1;

  const isRulesCorrect = false;
  if (elementPlusOne === childElement) {
    const isRulesCorrect = true;
    return isRulesCorrect;
  } else {
    return isRulesCorrect;
  }
};

export const isRulesCorrectCardSet = (selectedCardSet) => {
  let canBeDrag = true;
  if (selectedCardSet.length > 1) {
    for (let i = 0; i < selectedCardSet.length - 1; i++) {
      const element = selectedCardSet[i];
      const elementValue = element.value;

      const childElement = selectedCardSet[i + 1];
      const childElementValue = childElement.value;

      const isRulesCorrect = cardRules(elementValue, childElementValue);
      if (isRulesCorrect === false) {
        canBeDrag = false;
        return canBeDrag;
      }
    }
    canBeDrag = true;
    return canBeDrag;
  }
  return canBeDrag;
};
