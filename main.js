let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");

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

  // 유저가 1보다 작거나 10보다 큰 값을 입력하는 경우
  if (userValue < 1 || userValue > 10) {
    resultArea.textContent = "The number should be between 1 and 10";
    return; // 함수를 종료
  }

  // 입력한 값이 배열에 있는지 확인
  if (userInputArr.includes(userValue)) {
    // 이미 이전에 입력한 값을 또 입력함
    resultArea.textContent = "Enter a number different from the previous input";
    return;
  }

  // 입력한 값을 배열에 push
  userInputArr.push(userValue);
  console.log(`입력값 : ${userInputArr}`);

  chance--;
  chanceArea.textContent = `${chance} chances left`;

  if (userValue < computerNum) {
    resultArea.textContent = "UP !!!!! ⬆️";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down !!!! ⬇️";
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
  userInputArr = []; // 입력값이 담긴 배열도 초기화
}
