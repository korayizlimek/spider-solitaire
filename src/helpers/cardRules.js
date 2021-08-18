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
  if (selectedCardSet.length === 1) {
    const canBeDrag = true;
    return canBeDrag;
  } else {
    for (let i = 0; i < selectedCardSet.length - 1; i++) {
      const element = selectedCardSet[i];
      const elementValue = element.value;

      const childElement = selectedCardSet[i + 1];
      const childElementValue = childElement.value;

      const isRulesCorrect = cardRules(elementValue, childElementValue);
      if (isRulesCorrect === false) {
        const canBeDrag = false;
        return canBeDrag;
      }
    }
    const canBeDrag = true;
    return canBeDrag;
  }
};
