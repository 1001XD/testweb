function numberSplit(num) {
  //if (num % 2 != 0) return [Math.floor(num / 2), Math.floor(num / 2) + 1];
  // else return [num / 2, num / 2];
  return num % 2 != 0
    ? [Math.floor(num / 2), Math.floor(num / 2) + 1]
    : [num / 2, num / 2];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
