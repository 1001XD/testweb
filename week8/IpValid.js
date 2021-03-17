// function isValidIP(ipt) {
//   let ip = ipt.split(".");
//   if (ip[3] == 0) return false;
//   if (ip.join("").search(/[^0-9]/) != -1) return false;
//   if (ip.length != 4) return false;
//   for (const key in ip) {
//     if (ip[key] > 255) return false;
//     if (ip[key][0] == 0) return false;
//   }
//   return true;
// }
function isValidIP(ipt) {
  if (/^(25[0-5]|2[0-5][0-5]|[01]?[0-9][0-9]?) /) return true;
  return false;
}

console.log(isValidIP("1.2.3.5"));
// console.log(isValidIP("1.2.3.255"));
console.log(isValidIP("4.2.3.0"));
//console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("1.2.3.2555"));

// console.log(isValidIP("1.2.3.4.5"));
