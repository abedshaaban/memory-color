export function playAudio(audioPath) {
  new Audio(audioPath).play();
}

export function getRandomColor(pattern) {
  return pattern[Math.floor(Math.random() * pattern.length)];
}

export function playNext(nextBtn) {
  const btn = document.getElementById(nextBtn);

  playAudio(`../sounds/${nextBtn}.mp3`);

  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 300);
}

export function checkToMatch(color, pattern, count) {
  console.log(color === pattern[count]);
  return color === pattern[count];
}
