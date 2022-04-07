const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
//create block
 
//draw my block
function block() {
  const block = document.createElement("div");
  block.style.left = "100px";
  block.style.bottom = "50px";
  block.classList.add("block");
  grid.appendChild(block);
}
block();
