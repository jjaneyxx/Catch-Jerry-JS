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

pickRandomNum();

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 10) + 1;
  console.log(`정답: ${computerNum}`);
}

function play() {
  chance--;
  chanceArea.textContent = `남은 기회 : ${chance}`;
  // console.log("게임시작");
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "UP !!!!! ⬆️";
    console.log("UP");
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down !!!! ⬇️";
    console.log("DOWN");
  } else {
    resultArea.textContent = "정답 !!! 🥳";
    console.log("정답");
  }

  if (chance < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
    resultArea.textContent = "기회를 모두 소진했습니다😓";
    chanceArea.textContent = `정답은 ${computerNum}`;
  }
}

function reset() {
  userInput.value = ""; // 입력했던 번호들 초기화
  pickRandomNum(); // 새로운 번호 생성
  resultArea.textContent = "게임을 다시 시작합니다";
  chance = 5;
  chanceArea.textContent = "기회가 5번 있습니다";
}
