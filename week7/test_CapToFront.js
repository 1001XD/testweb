function capToFront(str) {
  str = str.split("");
  let text = "";

  text += str
    .join("")
    .split(/[^A-Z]/g)
    .join("");
  text += str.join("").split(/[A-Z]/g).join("");
  return text;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
