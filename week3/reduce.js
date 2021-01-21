const arrayOdNumbers = [1, 2, 3, 4];

const sum = arrayOdNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);
