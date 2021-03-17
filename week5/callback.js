function callback() {
  console.log("Timeout completed");
}

console.log("start");
setTimeout(callback, 3000);
console.log("end");
