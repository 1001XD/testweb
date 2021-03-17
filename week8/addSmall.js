function sumTwoSmal(arr) {
  arr.sort((a, b) => a - b);
  let count = 0;
  let sum = 0;
  arr.forEach((element, key) => {
    if (element >= 0 && ++count <= 2) sum += element;
  });
  return sum;
}

console.log(sumTwoSmal([19, -5, 5, 1, 42, 2, 77]));
