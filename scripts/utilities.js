export function playAudio(audioPath) {
  new Audio(audioPath).play();
}

export function getRandomColor(pattern) {
  return pattern[Math.floor(Math.random() * pattern.length)];
}
