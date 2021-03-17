function simplePair(arr, num) {
  for (const key in arr) {
    for (const key2 in arr) {
      if (key != key2)
        if (arr[key] * arr[key2] == num)
          return [arr[key], arr[key2]].sort((a, b) => a - b);
    }
  }
  return null;
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 2));
console.log(simplePair([1, 2, 3], 1));
console.log(simplePair([1, 2, 3, 4, 5], 15));
