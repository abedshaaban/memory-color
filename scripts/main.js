import { pattern } from "./pattern.js";
import {
  getRandomColor,
  playAudio,
  playNext,
  checkToMatch,
  getProRandomPattern,
  playNextPro,
} from "./utilities.js";

const bodyTag = document.getElementsByTagName("body")[0];
const levelTitle = document.getElementById("level-title");
const toogleGameMode = document.getElementById("toogle-game-mode");
const totalPointsSpan = document.getElementById("total-points");
const timeRemainingSpan = document.getElementById("time-remaining");

let level = 0;
let patternToBe = [];
let count = -1;
let isGameModePro = false;
let proPattern = [];
let proPattLength = 3;
let score = 0;
let timeRemaining = 0;
let timeDownInterval;
let bodyColorH = 0;
let BodyColorInterval;

toogleGameMode.addEventListener("click", () => {
  const leaderboard = document.getElementById("leaderboard-for-pro");
  const header = document.getElementsByTagName("header")[0];

  if (toogleGameMode.classList.contains("toogle-btn-pro")) {
    toogleGameMode.classList.remove("toogle-btn-pro");
    toogleGameMode.textContent = "🤓 Noob";
    isGameModePro = false;
    leaderboard.style.display = "none";
    header.style.justifyContent = "end";
    bodyTag.style.backgroundColor = `#011f3f`;
  } else {
    toogleGameMode.classList.add("toogle-btn-pro");
    toogleGameMode.textContent = "😈 Pro";
    isGameModePro = true;
    leaderboard.style.display = "flex";
    header.style.justifyContent = "space-between";
    bodyTag.style.backgroundColor = `#9e0057`;
  }

  level = 0;
  patternToBe = [];
  count = -1;

  levelTitle.textContent = "Press Any Key to Start";
});

// add event listeners to all buttons
function addButtonEventListeners() {
  for (let i = 0; i < pattern.length; i++) {
    const id = pattern[i];
    const btn = document.getElementById(id);

    btn.addEventListener("click", () => {
      if (level > 0 && count >= 0) {
        playAudio(`../assets/sounds/${id}.mp3`);

        if (isGameModePro) {
          proPlayerMove(id, proPattern, count);
        } else {
          playerMove(id, patternToBe, count);
        }
      }
    });
  }
}

function playerMove(id, patternToBe, iteration) {
  if (checkToMatch(iteration, patternToBe, id)) {
    if (iteration === patternToBe.length - 1) {
      moveLevelUp();
    }

    count++;
  } else {
    youLose();
  }
}

function moveLevelUp() {
  setTimeout(() => {
    level++;
    count = 0;

    levelTitle.textContent = `level ${level}`;

    const toBeAdded = getRandomColor(pattern);

    playNext(toBeAdded);

    patternToBe.push(toBeAdded);
  }, 1000);
}

function proPlayerMove(id, propatt, iteration) {
  if (checkToMatch(iteration, proPattern, id)) {
    if (iteration === proPattern.length - 1) {
      setTimeout(() => {
        proMoveLevelUp();
      }, 1000);
    }

    totalPointsSpan.textContent = score += 1000;

    count += 1;
  } else {
    youLose();
  }
}

function startCountDown() {
  timeDownInterval = setInterval(() => {
    timeRemainingSpan.textContent = timeRemaining = timeRemaining - 1;

    if (timeRemaining <= 0) {
      clearInterval(timeDownInterval);
      youLose();
    }
  }, 1000);
}

function proMoveLevelUp() {
  clearInterval(timeDownInterval);
  clearInterval(BodyColorInterval);

  level++;
  count = 0;

  levelTitle.textContent = `level ${level}`;

  proPattern = [];
  proPattern = getProRandomPattern(pattern, proPattLength);

  playNextPro(proPattern);

  console.log(proPattern);
  proPattLength += 3;
  timeRemaining += 6;
  startCountDown();
  ColorChanger();
}

function ColorChanger() {
  BodyColorInterval = setInterval(() => {
    if (bodyColorH > 360) {
      bodyColorH = 0;
    }

    bodyTag.style.backgroundColor = `hsla(${++bodyColorH}deg, 67%, 39%, 100%)`;
  }, 50);
}

function youLose() {
  level = 0;
  patternToBe = [];
  count = -1;
  proPattLength = 3;
  timeRemaining = 0;
  if (isGameModePro) {
    clearInterval(timeDownInterval);
    clearInterval(BodyColorInterval);
    levelTitle.innerHTML = `<div>Game Over, Press Any Key to Restart</div> 
    <div style="margin-top:10px; text-decoration:underline" >Score: ${score}</div>`;
  } else {
    levelTitle.textContent = "Game Over, Press Any Key to Restart";
  }
  totalPointsSpan.textContent = score = 0;

  bodyTag.classList.add("game-over");
  setTimeout(() => {
    bodyTag.classList.remove("game-over");
  }, 300);
}

addButtonEventListeners();

window.addEventListener(
  "keydown",
  () => {
    if (level === 0) {
      if (isGameModePro) {
        proMoveLevelUp();
      } else {
        moveLevelUp();
      }
    }
  },
  true
);
