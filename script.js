let box = document.querySelector("#box");
let restart = document.querySelector("#restart");
let Score = document.querySelector("#score");
let isDisplay = false;
var gameOver = false;
var piranhaInterval;
var MontyInterval;
let levelTime = [1500, 1000, 500];
var time = levelTime[0];
let score = 0;
/*create pipe */
for (let i = 0; i < 9; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  /*create pipe*/
  let pipe = document.createElement("div");
  pipe.classList.add("pipe");
  /* pitnaha or montry div */
  let play = document.createElement("div");
  play.classList.add("play");
  play.id = i.toString();
  /*Append*/
  square.appendChild(play);
  square.appendChild(pipe);
  box.appendChild(square);
}

const getNb = () => {
  return Math.floor(Math.random() * 9);
};
/* Create piranha */
var lastMontySquare = document.getElementById(getNb().toString());

function start() {
  console.log(time);

  box.style.opacity = "1";
  piranhaInterval = setInterval(() => {
    let square = document.getElementById(getNb().toString());
    square.style.backgroundImage = "url(piranha.png)";
  }, time);
  /*Create monty */
  MontyInterval = setInterval(() => {
    lastMontySquare.style.backgroundImage = "";
    let square = document.getElementById(getNb().toString());
    square.style.backgroundImage = "url(monty.png)";
    lastMontySquare = square;
    isDisplay = true;
  }, time);
}
/*game over*/
function GameOver() {
  clearInterval(piranhaInterval);
  clearInterval(MontyInterval);
  gameOver = true;
  Score.textContent = 0;
  box.style.opacity = "0.5";
}
/*Handle score */
document.querySelectorAll(".play").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (gameOver) {
      return;
    }
    // Get the current background image
    const bgImage = elem.style.backgroundImage;

    if (bgImage.includes("piranha.png")) {
      score -= 5;
    } else if (bgImage.includes("monty.png") && isDisplay) {
      score += 5;
      isDisplay = false;
    } else if (bgImage == "") {
      score -= 1;
    }
    Score.textContent = score.toString();
    /*handle game over*/
    if (score < 0) {
      GameOver();
    }
  });
});

/*Restart*/
restart.addEventListener("click", Restart);
function Restart() {
  gameOver = false;
  score = 0;
  start();
}
/*handle level*/
let levelbox = document.getElementById("level");
levelbox.addEventListener("click", level);
function level() {
  let arr = document.querySelectorAll(".star");

  if (arr.length == 3) {
    arr[1].remove();
    arr[2].remove();
  } else {
    /*create star*/
    let star = document.createElement("div");
    star.classList.add("star");
    levelbox.appendChild(star);
  }
  time = levelTime[document.querySelectorAll(".star").length - 1];

  clearInterval(piranhaInterval);
  clearInterval(MontyInterval);
  Restart();
}
/*start*/
start();
