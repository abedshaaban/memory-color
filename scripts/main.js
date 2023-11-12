import { pattern } from "./pattern.js";
import {
  getRandomColor,
  playAudio,
  playNext,
  checkToMatch,
} from "./utilities.js";

let level = 0;
let patternToBe = [];
let count = -1;

const levelTitle = document.getElementById("level-title");

// get buttons
const greenBTN = document.getElementById("green");
const redBTN = document.getElementById("red");
const yellowBTN = document.getElementById("yellow");
const blueBTN = document.getElementById("blue");

greenBTN.addEventListener("click", () => {
  playAudio("../sounds/green.mp3");
  if (level > 0 && count >= 0) {
    checkToMatch("green", patternToBe, count);
    count++;
  }
});

redBTN.addEventListener("click", () => {
  playAudio("../sounds/red.mp3");
  if (level > 0 && count >= 0) {
    checkToMatch("red", patternToBe, count);
    count++;
  }
});

yellowBTN.addEventListener("click", () => {
  playAudio("../sounds/yellow.mp3");
  if (level > 0 && count >= 0) {
    checkToMatch("yellow", patternToBe, count);
    count++;
  }
});

blueBTN.addEventListener("click", () => {
  playAudio("../sounds/blue.mp3");
  if (level > 0 && count >= 0) {
    checkToMatch("blue", patternToBe, count);
    count++;
  }
});

window.addEventListener(
  "keydown",
  () => {
    if (level === 0) {
      level += 1;

      levelTitle.textContent = `level ${level}`;

      const toBeAdded = getRandomColor(pattern);

      playNext(toBeAdded);
      patternToBe.push(toBeAdded);
      count++;
    }
  },
  true
);
