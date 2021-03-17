function highestDigit(num) {
  return Math.max(...(IntNum = (num + "").split("")));
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377421));
