function textLine(box) {
  box.forEach((element) => {
    for (const index of element) {
      console.log(index);
    }
    console.log("------");
  });
}

let furniture = ["Table", "Chairs", "Couch"];
textLine(furniture);
