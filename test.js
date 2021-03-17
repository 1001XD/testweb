function reverseCase(text) {
  let str = text.split("");
  for (let x = 0; x < str.length; x++) {
    if (str[x] != str[x].toLowerCase()) {
      str[x] = str[x].toLowerCase();
    } else {
      str[x] = str[x].toUpperCase();
    }
  }
  return str.join("");
}
//console.log(reverseCase("Happy Birthday"));//hAPPY bIRTHDAY

function AlphabetSoup(str) {
  return str.split("").sort().join("");
}
//console.log(AlphabetSoup("hello"));

function cardHide(card) {
  card = card.split("");
  for (let x = 0; x < card.length - 4; x++) {
    card[x] = "*";
  }
  return card.join("");
}

//console.log(cardHide("35123413355523"));

function findNemo(text) {
  text = text.split(" ");
  let index = text.indexOf("Nemo") + 1;
  if (index != 0) return "I found Nemo at " + index + "!";
  else return "I can't find Nemo :(";
}

// console.log(findNemo("Oh, hello !"));
//console.log(findNemo("Oh, Nemo !")); //I found Nemo at 2!

function lettersOnly(str) {
  return str.split(/[^a-z^A-Z]/).join("");
}
//console.log(lettersOnly("R!=:~0o0./c&}9k`60=y")); //Rocky

function sortDescending(num) {
  return parseInt(
    ("" + num)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
//console.log(sortDescending(1254859723)); // 9875543221

function getMiddle(str) {
  if (str.length % 2 == 0) {
    return str[str.length / 2 - 1] + "" + str[str.length / 2];
  } else {
    return str[(str.length - 1) / 2];
  }
}

// console.log(getMiddle("abc"));//b
// console.log(getMiddle("absc"));//bs

function reverseOdd(str) {
  let text = "";
  str = str.split(" ");
  str.forEach((x) => {
    if (x.length % 2 != 0) {
      text += x.split("").reverse().join("") + " ";
    } else {
      text += x + " ";
    }
  });
  return text.substring(0, text.length - 1);
}

//console.log(reverseOdd("One two three four")); //enO owt eerht four
//console.log(reverseOdd("sananaB"));

function correctTitle(str) {
  let upper = str.toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase());
  upper = upper.replace(/\b(and)\b/gi, "and");
  upper = upper.replace(/\b(the)\b/gi, "the");
  upper = upper.replace(/\b(of)\b/gi, "of");
  upper = upper.replace(/\b(in)\b/gi, "in");
  return upper;
}

//console.log(correctTitle("MANCE RAYDER, KING-BEYOND-THE-WALL."));

function rev(n) {
  return (n + "").split("").reverse().join("");
}
//console.log(rev(5121));//1215

function hackerSpeak(str) {
  str = str.split("");
  for (const key in str) {
    if (str[key] == "a") str[key] = "4";
    else if (str[key] == "e") str[key] = "3";
    else if (str[key] == "i") str[key] = "1";
    else if (str[key] == "o") str[key] = "0";
    else if (str[key] == "s") str[key] = "5";
  }
  return str.join("");
}
//console.log(hackerSpeak("javascript is cool")); //j4v45cr1pt 15 c00l

function isPalindrome(wrd) {
  // your recursive solution here
}

function uncensor(str, vowels) {
  let maxVowel = vowels.length;
  let maxStr = str.length;
  str.split("");
  console.log(str);
}

//console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
