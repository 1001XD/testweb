const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: false,
};

//const bookJSON = JSON.stringify(book); // object to jason string
const booksJSON = JSON.stringify([book, book, book]); //ส่งหลายอ็อบเจค ในรูปแบบของ array
console.log(booksJSON);

//let Obook = JSON.parse(bookJSON); // jason -> string to object
let Obook = JSON.parse(booksJSON); // jason -> string to object ปล.จะได้ 3 อ็อบเจค
console.log(Obook);
