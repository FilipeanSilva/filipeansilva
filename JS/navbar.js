const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');

function addEventListeners() {
  mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
  });

  mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
  });

  const homeBtn = document.getElementById('home-id');
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.location.href = '/templates/index/index.html';
    });
  }

  const resumeBtn = document.getElementById('resume-id');
  resumeBtn.addEventListener('click', () => {
    window.location.href = '/templates/resume/resume.html';
  });

  const contactBtn = document.getElementById('contact-id');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      window.location.href = '/templates/contact/contact.html';
    });
  }

  const img_resumeBtn = document.getElementById('img_resume-id');
  if (img_resumeBtn) {
    img_resumeBtn.addEventListener('click', () => {
      window.location.href = 'resume.html';
    });
  }
}

function setCurrentPageEffect() {
  let page = window.location.pathname.split('/').pop().split('.html')[0];
  console.log(page);

  if (page == 'index' || page == '') {
    page = 'home';
  }

  document.getElementById(page + '-id').style.fontWeight = 'bold';
  document.getElementById(page + '-id').style.textDecoration = 'underline';
}

addEventListeners();
setCurrentPageEffect();