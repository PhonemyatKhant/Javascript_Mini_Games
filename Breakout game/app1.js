const bordWidth = 560;
const bordHeight = 300;

const blockWidth = 80;
const blockHeight = 15;
const ballDiameter = 20;
let result = 0;
const resultDisplay = document.querySelector(".result");
const grid = document.querySelector(".grid");

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}
//blocks array
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];
//user
const userStart = [240, 10];
let currentPosition = userStart;
//ball
const ballStart = [270, 30];
let currentBallPosition = ballStart;
//create blocks

function createBlock() {
  blocks.forEach((blk) => {
    const block = document.createElement("div");
    block.classList.add("block");

    grid.appendChild(block);
    block.style.left = `${blk.bottomLeft[0]}px`;
    block.style.bottom = `${blk.bottomLeft[1]}px`;
  });
}
createBlock();

//add user
const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);
drawUser();
//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
drawBall();
//draw the user
function drawUser() {
  user.style.left = `${currentPosition[0]}px`;
  user.style.bottom = `${currentPosition[1]}px`;
}
//draw the ball
function drawBall() {
  ball.style.left = `${currentBallPosition[0]}px`;
  ball.style.bottom = `${currentBallPosition[1]}px`;
}
//user movement
function userMovement(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < 560 - blockWidth) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
  }
}
document.addEventListener("keydown", userMovement);

//ball movement
let xDir = 2;
let yDir = 2;
function ballMovement() {
  currentBallPosition[0] -= xDir;
  currentBallPosition[1] += yDir;
  drawBall();
  checkCollision();
}
timerId = setInterval(ballMovement, 20);

//check for collision
function checkCollision() {
  //blocks collision
  blocks.forEach((blk, index) => {
    if (
      currentBallPosition[0] > blk.bottomLeft[0] &&
      currentBallPosition[0] < blk.bottomRight[0] &&
      currentBallPosition[1] + blockHeight > blk.bottomLeft[1] &&
      currentBallPosition[1] < blk.topLeft[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[index].classList.remove("block");
      blocks.splice(index, 1);
      result++;
      resultDisplay.textContent = result;
      changeDirection();
      if (result == 15) {
        resultDisplay.textContent = `You Win!`;
        document.removeEventListener("keydown", userMovement);
        clearInterval(timerId);
      }
    }
  });
  //user collison
  if (
    currentBallPosition[0] > currentPosition[0] &&
    currentBallPosition[0] < currentPosition[0] + blockWidth &&
    currentBallPosition[1] < currentPosition[1] + blockHeight &&
    currentBallPosition[1] > currentPosition[1]
  ) {
    changeDirection();
  }
  if (
    currentBallPosition[0] >= bordWidth - 15 ||
    currentBallPosition[1] >= bordHeight - 15 ||
    currentBallPosition[0] <= 0
  ) {
    //border collision
    changeDirection();
  } else if (currentBallPosition[1] <= 0) {
    document.removeEventListener("keydown", userMovement);
    clearInterval(timerId);
    resultDisplay.textContent = `You Lose!`;
  }
}
//change Direction
function changeDirection() {
  if (xDir === 2 && yDir === 2) {
    yDir = -2;
  } else if (xDir === 2 && yDir === -2) {
    xDir = -2;
  } else if (xDir === -2 && yDir === -2) {
    yDir = 2;
  } else if (xDir === -2 && yDir === 2) {
    xDir = 2;
  }
}
