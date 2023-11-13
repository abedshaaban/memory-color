export function playAudio(audioPath) {
  new Audio(audioPath).play();
}

export function getRandomColor(pattern) {
  return pattern[Math.floor(Math.random() * pattern.length)];
}

export function getProRandomPattern(patt, length) {
  const pattern = [...patt];
  let proPattern = [];

  for (let i = 0; i < length; i++) {
    const color = pattern[Math.floor(Math.random() * pattern.length)];

    if (i >= 2 && color === proPattern[i - 1] && color === proPattern[i - 2]) {
      const shortPattern = pattern.remove(color);
      proPattern.push(shortPattern[Math.floor(Math.random() * pattern.length)]);
    } else {
      proPattern.push(color);
    }
  }

  return proPattern;
}

export function playNext(nextBtn) {
  const btn = document.getElementById(nextBtn);

  playAudio(`../public/sounds/${nextBtn}.mp3`);

  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 300);
}

export function checkToMatch(count, gamePattern, color) {
  return color === gamePattern[count];
}
