import { pattern } from "./pattern.js";
import { getRandomColor, playAudio, playNext } from "./utilities.js";

let level = 0;
let patternToBe = [];

const levelTitle = document.getElementById("level-title");

// get buttons
const greenBTN = document.getElementById("green");
const redBTN = document.getElementById("red");
const yellowBTN = document.getElementById("yellow");
const blueBTN = document.getElementById("blue");

greenBTN.addEventListener("click", () => {
  playAudio("../sounds/green.mp3");
});

redBTN.addEventListener("click", () => {
  playAudio("../sounds/red.mp3");
});

yellowBTN.addEventListener("click", () => {
  playAudio("../sounds/yellow.mp3");
});

blueBTN.addEventListener("click", () => {
  playAudio("../sounds/blue.mp3");
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
    }
  },
  true
);
