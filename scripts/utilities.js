export function playAudio(audioPath) {
  new Audio(audioPath).play();
}

export function getRandomColor(pattern) {
  return pattern[Math.floor(Math.random() * pattern.length)];
}

export function playNext(nextBtn) {
  const btn = document.getElementById(nextBtn);

  btn.click();
  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 300);
}

export function checkToMatch(color, pattern, count) {
  return color === pattern[count];
}

export function youLose(level, pattern, count, levelTitle) {
  level = 0;
  pattern = [];
  count = -1;
  levelTitle.textContent = "You lost, refresh the page to play again.";
}
