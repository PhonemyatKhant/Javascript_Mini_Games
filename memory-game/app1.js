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
const imgContainer = document.querySelector("#grid");

cardArray.sort(() => 0.5 - Math.random());

//display images
displayImages();
const images = document.querySelectorAll("#grid img");
function displayImages() {
  cardArray.forEach((card, i) => {
    const images = document.createElement("img");
    images.setAttribute("src", "./IMG/MyLogo.png");
    images.setAttribute("data-id", i);
    images.addEventListener("click", flipcard);
    imgContainer.appendChild(images);
  });
}
//matching clicked id and imgs id and displaying it
let flippedCardsIdArray = [];
let flippedCardsNameArray = [];

function flipcard() {
  let clickedId = this.dataset.id;

  this.setAttribute("src", cardArray[clickedId].img);
  if (!flippedCardsIdArray.includes(clickedId)) {
    flippedCardsIdArray.push(clickedId);
    flippedCardsNameArray.push(cardArray[clickedId].name);
  }

  console.log(flippedCardsIdArray);

  console.log(flippedCardsNameArray);

  if (flippedCardsIdArray.length == 2) {
    setTimeout(condition, 500);
  }
}
//cards display and decides the condition
let condition = () => {
  if (flippedCardsNameArray[0] == flippedCardsNameArray[1]) {
    images[flippedCardsIdArray[0]].setAttribute("src", "./IMG/Capture.png");
    images[flippedCardsIdArray[1]].setAttribute("src", "./IMG/Capture.png");

    images[flippedCardsIdArray[0]].removeEventListener("click", flipcard);
    images[flippedCardsIdArray[1]].removeEventListener("click", flipcard);
  } else {
    images[flippedCardsIdArray[0]].setAttribute("src", "./IMG/MyLogo.png");
    images[flippedCardsIdArray[1]].setAttribute("src", "./IMG/MyLogo.png");
  }
  flippedCardsIdArray = [];
  flippedCardsNameArray = [];
};
