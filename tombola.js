const arr = fillArray();

function fillArray() {
  const arr = [];
  for (let i = 0; i < 76; i++) {
    arr.push(i + 1);
  }
  return arr;
}

function getRandomNum() {
  const randIndex = Math.floor(Math.random() * arr.length);
  const random = arr.splice(randIndex, 1)[0];
  return random;
}

function generateRandNumber() {
  const random = getRandomNum();
  const randNumDiv = document.getElementById("randNum");
  randNumDiv.innerText = "Numero: " + random;
  const cells = document.querySelectorAll(".board .cell");
  cells[random - 1].classList.add("highlight");
}

function generateBoard() {
  const board = document.querySelector(".board");
  for (let i = 0; i < 76; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.className = "cell";
    cellDiv.innerText = i + 1;
    board.appendChild(cellDiv);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  generateBoard();
});

const randBtn = document.getElementById("randBtn");
randBtn.addEventListener("click", generateRandNumber);
