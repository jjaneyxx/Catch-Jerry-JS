let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(`정답: ${computerNum}`);
}

function play() {
  // console.log("게임시작");
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "UP ⬆️";
    console.log("UP");
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down ⬇️";
    console.log("DOWN");
  } else {
    resultArea.textContent = "정답입니다🥳";
    console.log("정답");
  }
}

pickRandomNum();

// 컴퓨터 난수와 사용자 입력 비교
// 만약 유저가 랜덤번호를 맞히면 -> 맞혔습니다 !
// 랜덤번호가 유저 번호보다 작으면 -> Down !!
// 랜덤번호가 유저 번호보다 크면 -> Up !!
