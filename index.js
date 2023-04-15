document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#big-sidebar a');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = '#' + link.getAttribute('id').replace('-link', '');
      scrollToSection(href);
    });
  });

  const audioWave = document.querySelector('.audio-wave');
  setTimeout(() => {
    const bars = document.querySelectorAll('.audio-wave .bar');
    audioWave.classList.remove('playing');
    bars.forEach((bar) => (bar.style.animationPlayState = 'paused'));
  }, 700); // delay execution for 2 seconds

  addLinkBehavior('meeitContent', 'https://www.mee-it.pt');
  addLinkBehavior('adentisContent', 'https://www.adentis.pt/');
  addLinkBehavior('degree', 'https://www.isec.pt/EN/');

  if (isMobile()) {
    applyMobileCSS();
  }
});

function addLinkBehavior(elementId, link) {
  const element = document.getElementById(elementId);
  element.style.cursor = 'pointer';
  element.addEventListener('click', () => {
    window.open(link);
  });
}

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


const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
  console.log('isMobile: ', isMobile);
  return isMobile;
};

const applyMobileCSS = () => {
  const main = document.querySelector('.main');
  main.style.margin = '0';
  main.style.width = '100%';
  main.style.overflowY = 'auto';

  const resumeImage = document.querySelector('#resumeImage');
  if (resumeImage) {
    resumeImage.style.display = 'none';
  }

  const resumeContent = document.querySelector('#resumeContent');
  if (resumeContent) {
    resumeContent.style.width = '100%';
    resumeContent.style.margin = '1em 0 0 7%';

    const certifications = document.querySelectorAll('.certifications img');
    certifications.forEach((certification) => {
      certification.style.display = 'none';
    });
  }

  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.style.position = 'absolute';
    sidebar.style.top = '50%';
    sidebar.style.left = '0';
    sidebar.style.transform = 'translate(0, -50%)';
    sidebar.style.width = '5%';
    sidebar.style.height = '30%';
    sidebar.style.borderRadius = '3em';
    sidebar.style.transition = 'all 0.5s ease-in-out';
    sidebar.style.transformOrigin = 'center center';
    sidebar.style.zIndex = '10';
    sidebar.style.display = 'flex';
    sidebar.style.flexDirection = 'column';
    sidebar.style.justifyContent = 'center';
    sidebar.style.alignItems = 'center';

    const sidebarImage = document.querySelector('.sidebar img');
    if (sidebarImage) {
      sidebarImage.style.display = 'none';
    }

    const sidebarList = document.querySelector('.sidebar ul');
    if (sidebarList) {
      sidebarList.style.display = 'none';
    }

    const sidebarFooter = document.querySelector('.sidebar .footer');
    if (sidebarFooter) {
      sidebarFooter.style.display = 'none';
    }

    const smallSidebar = document.querySelector('#small-sidebar');
    if (smallSidebar) {
      smallSidebar.style.display = 'flex';
      smallSidebar.style.flexDirection = 'column';
      smallSidebar.style.justifyContent = 'center';
      smallSidebar.style.alignItems = 'center';

      const smallSidebarImage = document.querySelector('#small-sidebar img');
      if (smallSidebarImage) {
        smallSidebarImage.style.display = 'flex';
        smallSidebarImage.style.width = '80%';
        smallSidebarImage.style.margin = '1em 0 1em 0';

        smallSidebarImage.addEventListener('hover', () => {
          smallSidebarImage.style.opacity = '0.8';
          smallSidebarImage.style.cursor = 'pointer';
        });
      }
    }

    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
      burgerMenu.style.display = 'inline';
      burgerMenu.style.top = '10px';
      burgerMenu.style.fontSize = '32px';
      burgerMenu.style.backgroundColor = 'transparent';
      burgerMenu.style.border = 'none';
      burgerMenu.style.color = '#333';
      burgerMenu.style.cursor = 'pointer';
    }
  }
};
