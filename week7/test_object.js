function getBudgets(box) {
  let sum = 0;
  for (const key of box) {
    sum += key.budget;
  }
  return sum;
}

let x = getBudgets([
  {
    name: "John",
    age: 21,
    budget: 23000,
  },
  {
    name: "Steve",
    age: 32,
    budget: 40000,
  },
  {
    name: "Martin",
    age: 16,
    budget: 2700,
  },
]);

let y = getBudgets([
  {
    name: "John",
    age: 21,
    budget: 29000,
  },
  {
    name: "Steve",
    age: 32,
    budget: 32000,
  },
  {
    name: "Martin",
    age: 16,
    budget: 1600,
  },
]);

console.log(x);
console.log(y);
