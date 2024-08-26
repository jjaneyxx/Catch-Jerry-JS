let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let gameImage = document.getElementById("game-image");

let chance = 5; // 기회
let gameOver = false;
let userInputArr = [];

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
  let userValue = userInput.value;

  // 유효성 검사 1. 유저가 1보다 작거나 10보다 큰 값을 입력하는 경우
  if (userValue < 1 || userValue > 10) {
    resultArea.textContent = "The number should be between 1 and 10";
    gameImage.src = "./images/huh.gif";
    return; // 함수를 종료
  }

  // 유효성 검사 2. 입력한 값이 배열에 있는지 확인
  if (userInputArr.includes(userValue)) {
    // 이미 이전에 입력한 값을 또 입력함
    resultArea.textContent = "Enter a number different from the previous input";
    gameImage.src = "./images/huh.gif";
    return;
  }

  // 입력한 값을 배열에 push
  userInputArr.push(userValue);
  console.log(`입력값 : ${userInputArr}`);

  chance--;
  chanceArea.textContent = `${chance} chances left`;

  if (userValue < computerNum) {
    resultArea.textContent = "UP ⬆️⬆️⬆️";
    gameImage.src = "./images/up.gif";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN ⬇️⬇️⬇️";
    gameImage.src = "./images/down.gif";
  } else {
    resultArea.textContent = "CORRECT !!! 🥳";
    gameImage.src = "./images/correct.gif";
    chanceArea.textContent = `The answer was ${computerNum}`;
    playButton.disabled = true;
  }

  if (chance < 1) {
    gameOver = true;
  }

  // 게임이 끝났다면
  if (gameOver) {
    playButton.disabled = true;
    resultArea.textContent = "Used up all your chances, sorry !😓";
    gameImage.src = "./images/lose.gif";
    chanceArea.textContent = `The answer was ${computerNum}`;
  }
}

function reset() {
  userInput.value = ""; // 입력했던 번호들 초기화
  playButton.disabled = false;
  resultArea.textContent = "Let the Game begin ~!";
  chance = 5;
  chanceArea.textContent = "Chances : 5";
  userInputArr = []; // 입력값이 담긴 배열도 초기화
  pickRandomNum(); // 새로운 번호 생성
  gameImage.src = "./images/main.gif";
}
