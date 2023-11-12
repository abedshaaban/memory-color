import { pattern } from "./pattern.js";
import {
  getRandomColor,
  playAudio,
  playNext,
  checkToMatch,
  youLose,
} from "./utilities.js";

let level = 0;
let patternToBe = [];
let count = -1;

// add event listeners to all buttons
function addButtonEventListeners() {
  for (let i = 0; i < pattern.length; i++) {
    const id = pattern[i];
    const btn = document.getElementById(pattern[i]);

    btn.addEventListener("click", () => {
      playAudio(`../sounds/${id}.mp3`);
      if (level > 0 && count >= 0) {
        if (checkToMatch(id, patternToBe, count)) {
          count++;
          setTimeout(() => {
            moveLevelUp();
          }, 1000);
        } else {
          youLose(level, patternToBe, count, levelTitle);
        }
      }
    });
  }
}

const levelTitle = document.getElementById("level-title");

function moveLevelUp() {
  level++;

  levelTitle.textContent = `level ${level}`;

  const toBeAdded = getRandomColor(pattern);

  playNext(toBeAdded);

  patternToBe.push(toBeAdded);
}

addButtonEventListeners();

window.addEventListener(
  "keydown",
  () => {
    if (level === 0) {
      console.log("start game");
      moveLevelUp();

      count++;
    }
  },
  true
);
