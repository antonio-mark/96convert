const sixnine = document.querySelector(".textArea");
const converter = document.querySelector(".text96");
const button = new ClipboardJS(".btn");

const dict = {
  A: "666669999999999\n666669966666699\n666669966666699\n666669999999999\n666669966666699\n666669966666699",
  B: "6666699999999996\n6666699666666999\n6666699999999999\n6666699999999999\n6666699666666999\n6666699999999996",
  C: "66666999999999\n66666996666666\n66666996666666\n66666996666666\n66666996666666\n66666999999999",
  D: "66666999999999666\n66666996666666996\n66666996666666999\n66666996666666999\n66666996666666996\n66666999999999666",
  E: "6666699999999\n6666699666666\n6666699999999\n6666699999999\n6666699666666\n6666699999999",
  F: "6666699999999\n6666699666666\n6666699999999\n6666699666666\n6666699666666\n6666699666666",
  G: "66666999999999\n66666996666666\n66666996666666\n66666996669999\n66666996666699\n66666999999999",
  H: "666669966666699\n666669966666699\n666669999999999\n666669999999999\n666669966666699\n666669966666699",
  I: "66666999\n66666999\n66666999\n66666999\n66666999\n66666999",
  J: "6666666699999999999\n6666666666669996666\n6666666666669996666\n6666699966669996666\n6666699966669996666\n6666699999999996666",
  K: "6666699666699\n6666699669966\n6666699996666\n6666699996666\n6666699669966\n6666699666699",
  L: "66666996666666\n66666996666666\n66666996666666\n66666996666666\n66666996666666\n66666999999999",
  M: "66666999666666999\n66666996996699699\n66666996699996699\n66666996666666699\n66666996666666699\n66666996666666699",
  N: "6666699966666699\n6666699699666699\n6666699669966699\n6666699666996699\n6666699666699699\n6666699666666999",
  O: "66666999999999999\n66666996666666699\n66666996666666699\n66666996666666699\n66666996666666699\n66666999999999999",
  P: "6666699999999\n6666699666699\n6666699999999\n6666699666666\n6666699666666\n6666699666666",
  Q: "6666699999999666\n6666699666699666\n6666699666699666\n6666699666699666\n6666699999999966\n6666666666666999",
  R: "66666999999999\n66666996666699\n66666999999999\n66666996999666\n66666996699966\n66666996666999",
  S: "666669999999999\n666669966666666\n666669966666666\n666669999999999\n666666666666699\n666669999999999",
  T: "6666699999999999\n6666666669996666\n6666666669996666\n6666666669996666\n6666666669996666\n6666666669996666",
  U: "666669966666699\n666669966666699\n666669966666699\n666669966666699\n666669966666699\n666669999999999",
  V: "666669966666666699\n666666996666666996\n666666699666669966\n666666669966699666\n666666666996996666\n666666666699966666",
  W: "66666996666666666666666699\n66666699666666666666666996\n66666669966666999666669966\n66666666996669969966699666\n66666666699699666996996666\n66666666669996666699966666",
  X: "66666996666666699\n66666669966669966\n66666666669966666\n66666666669966666\n66666669966669966\n66666996666666699",
  Y: "666669966666699\n666666996666996\n666666699669966\n666666666996666\n666666666996666\n666666666996666",
  Z: "66666999999999\n66666666666999\n66666666999666\n66666669996666\n66666999666666\n66666999999999",
  " ": "66666\n66666\n66666\n66666\n66666\n66666",
};

const textToLetter = (text) => dict[text] ?? "";
const letterSplit = (letter) => letter.split("\n");
const transpose = (matrix) =>
  matrix[0].map((_row, index) => matrix.map((row) => row[index]));

const lettersToLine = (letter) =>
  document
    .createElement("div")
    .appendChild(document.createTextNode(letter.join(""))).parentNode;

const divToHTML = (div) => converter.appendChild(div);

sixnine.addEventListener("input", ({ target: { value: text } }) => {
  converter.innerHTML = "";

  const textSplit = text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toUpperCase()
    .split("");

  transpose(textSplit.map(textToLetter).map(letterSplit))
    .map(lettersToLine)
    .map(divToHTML);
});

function message() {
  document.querySelector(".custom-tooltip").style.display = "inline";
  setTimeout(function () {
    document.querySelector(".custom-tooltip").style.display = "none";
  }, 1000);
}
