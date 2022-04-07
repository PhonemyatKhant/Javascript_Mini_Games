const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const bordWidth = 560;
const bordHeight = 300;

const score = document.querySelector(".score");


let xDirection = 2;
let yDirection = 2;

let timerId;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

//create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}
//all my Blocks
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

//draw my block
function addBlocks() {
  blocks.forEach((blk) => {
    const block = document.createElement("div");
    block.classList.add("block");
    grid.appendChild(block);
    block.style.left = `${blk.bottomLeft[0]}px`;

    block.style.bottom = `${blk.bottomLeft[1]}px`;
  });
}
addBlocks();

//add user
const user = document.createElement("div");
grid.appendChild(user);
user.classList.add("user");
drawUser();

//draw the User
function drawUser() {
  user.style.left = `${currentPosition[0]}px`;
  user.style.bottom = `${currentPosition[1]}px`;
}
//draw the ball
function drawBall() {
  ball.style.left = `${ballCurrentPosition[0]}px`;
  ball.style.bottom = `${ballCurrentPosition[1]}px`;
}

//move user

function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < bordWidth - blockWidth) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
  }
}
document.addEventListener("keydown", moveUser);

const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
drawBall();

//move the ball
function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
}
timerId = setInterval(moveBall, 20);

//check for collisions
function checkForCollisions() {
  //check for block collision
  blocks.forEach((blk) => {
    if(blk)
  })
  
  if (
    ballCurrentPosition[0] >= bordWidth - 20 ||
    ballCurrentPosition[1] >= bordHeight - 20 ||
    ballCurrentPosition[0] <= 0
  ) {
    changeDirection();
  } else if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    console.log("Game Over!");
    console.log(score);
    score.innerHTML = `Game Over`;
    document.removeEventListener("keydown", moveUser);
  }
}
function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
  } else if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
  } else if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
  } else if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
  }
}
