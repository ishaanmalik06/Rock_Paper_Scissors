let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".img");
const msg = document.querySelector(".msg");
const youPoint = document.querySelector(".you-point");
const compPoint = document.querySelector(".comp-point");
const restart = document.querySelector(".restart");

const genCompChoice = () => {
  //compChoice
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const drawGame = () => {
  //draw game
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  //winner display
  if (userWin) {
    userScore++;
    youPoint.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    compScore++;
    compPoint.innerText = compScore;
    msg.innerText = `Comp Win! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  //comp vs user
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //userChoice
  choice.addEventListener("click", () => {
    appearRestart();
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const gameRestart = () => {
  //restart function
  youPoint.innerText = "0";
  userScore = 0;
  compPoint.innerText = "0";
  compScore = 0;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#2d3047";
  msg.style.color = "white";
};

restart.addEventListener("click", () => {
  //restart button
  gameRestart();
  restart.classList.add("hide");
});

const appearRestart = () => {
  restart.classList.remove("hide");
};
