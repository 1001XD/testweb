function dupArray(arr) {
  for (const index1 in arr) {
    for (const index2 in arr) {
      if (index1 != index2)
        if (arr[index1] == arr[index2]) arr.splice(index2, 1);
    }
  }
  return arr;
}

console.log(dupArray([1, 0, 1, 0, 1, 2]));
