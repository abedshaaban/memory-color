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

export function checkToMatch(count, gamePattern, color) {
  // add for loop to + remove old event listeners
  console.log("color", color);
  console.log("game color", gamePattern[count]);
  console.log("count", count);
  return color === gamePattern[count];
}
