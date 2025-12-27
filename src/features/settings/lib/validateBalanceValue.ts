export const validateBalanceValue = (textVal: string) => {
  const numberValue = Number(textVal);
  if (isNaN(numberValue) || numberValue.toString() !== textVal)
    return 'Please enter a valid number';
  if (numberValue < 0) return 'Balance cannot be negative';
  return '';
};
