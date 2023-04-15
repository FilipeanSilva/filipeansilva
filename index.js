document.addEventListener('DOMContentLoaded', () => {
  const audioWave = document.querySelector('.audio-wave');

  const links = document.querySelectorAll('#big-sidebar a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = '#' + link.getAttribute('id').replace('-link', '');
      scrollToSection(href);
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

function scrollToSection(id) {
  var section = document.querySelector(id);
  section.scrollIntoView({ behavior: 'smooth' });
}