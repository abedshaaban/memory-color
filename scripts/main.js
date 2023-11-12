import { playAudio } from "./utilities.js";

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
