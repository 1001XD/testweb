function compareType(arr1, arr2) {
  let text = "";
  for (let index = 0; index < arr1.length; index++) {
    if (typeof arr1[index] == typeof arr2[index]) {
      text += "true ";
    } else text += "false";
  }
  return text;
}

let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];

console.log("value 1 - 2 : ", compareType(values1, values2));
console.log("value 2 - 3 : ", compareType(values2, values3));
console.log("value 1 - 3 : ", compareType(values1, values3));
