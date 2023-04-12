document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('a[href="#home"]');
  const audioWave = document.querySelector('.audio-wave');

  homeLink.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  setTimeout(() => {
    const bars = document.querySelectorAll('.audio-wave .bar');
    audioWave.classList.remove('playing');
    bars.forEach((bar) => (bar.style.animationPlayState = 'paused'));
  }, 700); // delay execution for 2 seconds
});

function toggleAnimation() {
  var bars = document.querySelectorAll('.audio-wave .bar');
  bars.forEach(function (bar) {
    var animationPaused =
      window.getComputedStyle(bar).getPropertyValue('animation-play-state') ===
      'paused';
    bar.style.animationPlayState = animationPaused ? 'running' : 'paused';
  });
}

let isPlaying = false;
let audio;
function togglePlay(language) {
  const audioWave = document.querySelector(`#${language}`);
  const bars = audioWave.querySelectorAll('.bar');

  if (!isPlaying) {
    audio = new Audio(`data/Audio/Languages/${language}.m4a`);
    audio.addEventListener('ended', () => {
      audioWave.classList.remove('playing');
      bars.forEach((bar) => (bar.style.animationPlayState = 'paused'));
      isPlaying = false;
    });

    audio.play();
    isPlaying = true;

    audioWave.classList.add('playing');
    bars.forEach((bar) => (bar.style.animationPlayState = 'running'));
  } else {
    if (audioWave.classList.contains('playing')) {
      audio.pause();
      isPlaying = false;

      audioWave.classList.remove('playing');
      bars.forEach((bar) => (bar.style.animationPlayState = 'paused'));
    }
  }
}
