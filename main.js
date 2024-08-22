let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");

let chance = 5;
let gameOver = false;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
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
    resultArea.textContent = "기회를 모두 소진함😓";
  }
}

function reset() {
  userInput.value = ""; // 입력했던 번호들 초기화
  pickRandomNum(); // 새로운 번호 생성
  resultArea.textContent = "게임을 다시 시작함";
  chance = 5;
  chanceArea.textContent = "기회가 5번 있음";
}

pickRandomNum();

// 컴퓨터 난수와 사용자 입력 비교
// 만약 유저가 랜덤번호를 맞히면 -> 맞혔습니다 !
// 랜덤번호가 유저 번호보다 작으면 -> Down !!
// 랜덤번호가 유저 번호보다 크면 -> Up !!
