const cardArray = [
  {
    name: "red-dragon",
    img: "./IMG/red-dragon.jpg",
  },
  {
    name: "joker",
    img: "./IMG/joker.png",
  },
  {
    name: "blue-truck",
    img: "./IMG/blue-truck.png",
  },
  {
    name: "fruits",
    img: "./IMG/fruits.jpg",
  },
  {
    name: "face-painting",
    img: "./IMG/face-painting.jpg",
  },
  {
    name: "flower",
    img: "./IMG/flower.jpg",
  },
  {
    name: "red-dragon",
    img: "./IMG/red-dragon.jpg",
  },
  {
    name: "joker",
    img: "./IMG/joker.png",
  },
  {
    name: "blue-truck",
    img: "./IMG/blue-truck.png",
  },
  {
    name: "fruits",
    img: "./IMG/fruits.jpg",
  },
  {
    name: "face-painting",
    img: "./IMG/face-painting.jpg",
  },
  {
    name: "flower",
    img: "./IMG/flower.jpg",
  },
];
const resultDisplay = document.querySelector("#result");
//randomise the array
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
//loop and create img(src,data-id) element inside the grid container and then add event listerner click to elements aka imgs
cardArray.forEach((i, index) => {
  const card = document.createElement("img");
  card.setAttribute("src", "./IMG/MyLogo.png");
  card.setAttribute("data-id", index);
  card.addEventListener("click", flipcard);
  gridDisplay.appendChild(card);
});

let cards = document.querySelectorAll("#grid img");
console.log();
let cardsChosenId = [];
let result = 0;


let checkMatch = () => {
  console.log("Check for a match");
  if (cardsChosen[0] == cardsChosen[1]) {
    result++;

    resultDisplay.textContent = result;
    if (result == cardArray.length / 2) {
      alert("You've won the game!");
    }
    cards[cardsChosenId[0]].setAttribute("src", "./IMG/Capture.png");
    cards[cardsChosenId[1]].setAttribute("src", "./IMG/Capture.png");
    cards[cardsChosenId[0]].removeEventListener("click", flipcard);
    cards[cardsChosenId[1]].removeEventListener("click", flipcard);
  } else {
    cards[cardsChosenId[0]].setAttribute("src", "./IMG/MyLogo.png");
    cards[cardsChosenId[1]].setAttribute("src", "./IMG/MyLogo.png");
  }
  cardsChosen = [];
  cardsChosenId = [];
  console.log(cardsChosen);
};
// match data id with card array id and displaying it
function flipcard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  console.log(cardsChosen);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
}
