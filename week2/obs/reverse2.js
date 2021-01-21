function reverseString(value) {
  const revesedValue = value.split("").reverse().join("");
  return revesedValue;
}

console.log(reverseString("Hello JavaScript"));
