function getAge(dateString) {
  let ageInMilliseconds = new Date() - new Date(dateString);
  return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
}
let age = getAge('1997-08-16');
document.getElementById('age').innerHTML = age;

let i = 0;
let intervalTimer = 2;
let counterTimeout;
function ageEffect(i) {
  if (i < age) {
    document.getElementById('age').innerHTML = i++;
    intervalTimer *= 1.3;
    counterTimeout = setTimeout(ageEffect, intervalTimer, i);
  } else {
    document.getElementById('age').innerHTML = i;
    document.getElementById('age').style.textDecoration = 'underline';

    clearTimeout(counterTimeout);
  }
}
ageEffect(i);

i = 0;
function typingTitle() {
  text = 'Filipe A. N. Silva';
  if (i < text.length) {
    document.getElementById('title').innerHTML += text.charAt(i++);
    if (text.charAt(i) == ' ') {
      setTimeout(typingTitle, 200);
    } else setTimeout(typingTitle, 100);
  }
}
typingTitle();

function isIOS() {
  let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  console.log("Is iOS? " + ((isIOS)?"Yes":"No"));

  if (isIOS == true) {
    let elems = document.getElementsByClassName('presentation');
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundAttachment = 'scroll';
    }

    elems = document.getElementsByClassName('education');
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundAttachment = 'scroll';
    }

    elems = document.getElementsByClassName('work');
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundAttachment = 'scroll';
    }
  }
}
isIOS();
