let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");

let chance = 5; // 기회
let gameOver = false;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => {
  userInput.value = "";
});
userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    play();
  }
});

pickRandomNum();

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 10) + 1;
  console.log(`정답: ${computerNum}`);
}

function play() {
  chance--;
  chanceArea.textContent = `${chance} chances left`;
  // console.log("게임시작");
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "UP !!!!! ⬆️";
    console.log("UP");
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down !!!! ⬇️";
    console.log("DOWN");
  } else {
    resultArea.textContent = "Correct !!! 🥳";
    playButton.disabled = true;
    chanceArea.textContent = `The answer was ${computerNum}`;
  }

  if (chance < 1) {
    gameOver = true;
  }

  // 게임이 끝났다면
  if (gameOver) {
    playButton.disabled = true;
    resultArea.textContent = "Used up all your chances, sorry !😓";
    chanceArea.textContent = `The answer was ${computerNum}`;
  }
}

function reset() {
  userInput.value = ""; // 입력했던 번호들 초기화
  pickRandomNum(); // 새로운 번호 생성
  resultArea.textContent = "Let the games begin !";
  chance = 5;
  chanceArea.textContent = "You've got 5 chances";
  playButton.disabled = false;
}
