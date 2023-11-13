import { pattern } from "./pattern.js";
import {
  getRandomColor,
  playAudio,
  playNext,
  checkToMatch,
} from "./utilities.js";

const levelTitle = document.getElementById("level-title");
const toogleGameMode = document.getElementById("toogle-game-mode");

let level = 0;
let patternToBe = [];
let count = -1;

toogleGameMode.addEventListener("click", () => {
  if (toogleGameMode.classList.contains("toogle-btn-pro")) {
    toogleGameMode.classList.remove("toogle-btn-pro");
    toogleGameMode.textContent = "🤓 Noob";
  } else {
    toogleGameMode.classList.add("toogle-btn-pro");
    toogleGameMode.textContent = "😈 Pro";
  }
});

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

// add event listeners to all buttons
function addButtonEventListeners() {
  for (let i = 0; i < pattern.length; i++) {
    const id = pattern[i];
    const btn = document.getElementById(id);

    btn.addEventListener("click", () => {
      playAudio(`../public/sounds/${id}.mp3`);
      if (level > 0 && count >= 0) {
        playerMove(id, patternToBe, count);
      }
    });
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

export function youLose() {
  level = 0;
  patternToBe = [];
  count = -1;
  levelTitle.textContent = "Game Over, Press Any Key to Restart";
  const btn = document.getElementsByTagName("body")[0];

  btn.classList.add("game-over");
  setTimeout(() => {
    btn.classList.remove("game-over");
  }, 300);
}

addButtonEventListeners();

window.addEventListener(
  "keydown",
  () => {
    if (level === 0) {
      moveLevelUp();
    }
  },
  true
);
