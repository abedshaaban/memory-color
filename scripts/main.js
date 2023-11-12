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

const levelTitle = document.getElementById("level-title");

function moveLevelUp() {
  level++;

  levelTitle.textContent = `level ${level}`;

  const toBeAdded = getRandomColor(pattern);

  playNext(toBeAdded);
  patternToBe.push(toBeAdded);
}

// get buttons
const greenBTN = document.getElementById("green");
const redBTN = document.getElementById("red");
const yellowBTN = document.getElementById("yellow");
const blueBTN = document.getElementById("blue");

greenBTN.addEventListener("click", () => {
  playAudio("../sounds/green.mp3");
  if (level > 0 && count >= 0) {
    if (checkToMatch("green", patternToBe, count)) {
      count++;
      setTimeout(() => {
        moveLevelUp();
      }, 1000);
    } else {
      youLose(level, pattern, count, levelTitle);
    }
  }
});

redBTN.addEventListener("click", () => {
  playAudio("../sounds/red.mp3");
  if (level > 0 && count >= 0) {
    if (checkToMatch("red", patternToBe, count)) {
      count++;
      setTimeout(() => {
        moveLevelUp();
      }, 1000);
    } else {
      youLose(level, pattern, count, levelTitle);
    }
  }
});

yellowBTN.addEventListener("click", () => {
  playAudio("../sounds/yellow.mp3");
  if (level > 0 && count >= 0) {
    if (checkToMatch("yellow", patternToBe, count)) {
      count++;
      setTimeout(() => {
        moveLevelUp();
      }, 1000);
    } else {
      youLose(level, pattern, count, levelTitle);
    }
  }
});

blueBTN.addEventListener("click", () => {
  playAudio("../sounds/blue.mp3");
  if (level > 0 && count >= 0) {
    if (checkToMatch("blue", patternToBe, count)) {
      count++;
      setTimeout(() => {
        moveLevelUp();
      }, 1000);
    } else {
      youLose(level, pattern, count, levelTitle);
    }
  }
});

window.addEventListener(
  "keydown",
  () => {
    if (level === 0) {
      moveLevelUp();

      count++;
    }
  },
  true
);
