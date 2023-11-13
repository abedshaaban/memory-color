import { pattern } from "./pattern.js";
import {
  getRandomColor,
  playAudio,
  playNext,
  checkToMatch,
} from "./utilities.js";

const levelTitle = document.getElementById("level-title");

let level = 0;
let patternToBe = [];
let count = -1;

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
      playAudio(`../sounds/${id}.mp3`);
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
}

addButtonEventListeners();

window.addEventListener(
  "keydown",
  () => {
    if (level === 0) {
      console.log("start game");
      moveLevelUp();
    }
  },
  true
);
