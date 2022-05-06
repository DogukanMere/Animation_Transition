//SECTIONS
const frame1 = document.querySelector('.frame1');
const frame2 = document.querySelector('.frame2');
const frame3 = document.querySelector('.frame3');
const frame4 = document.querySelector('.frame4');
const lastSection = document.querySelector('.last-section');
const loginAnimation = document.getElementById('login_animation');

//BUTTONS
const btnFirst = document.querySelector('.button-continue');
const btnSelect = document.querySelector('.choose');
const btnLast = document.querySelector('.startover');
const body = document.querySelector('body');

window.onload = function () {
  setTimeout(function () {
    body.classList.remove('overflowY');
    loginAnimation.classList.add('hide-frame');
  }, 4700);

  btnFirst.addEventListener('click', function (e) {
    e.preventDefault();
    if (
      !frame3.classList.contains('transition-down') &&
      !frame4.classList.contains('transition-down') &&
      !frame3.classList.contains('transition-up') &&
      !frame2.classList.contains('transition-down')
    ) {
      frame2.classList.remove('transition-up');
      frame2.classList.add('transition-down');
      setTimeout(function () {
        frame2.classList.add('transition-up');
      }, 7000);
      setTimeout(function () {
        frame3.classList.add('transition-down');
      }, 8000);
      lastSection.classList.add('transition-down');
      frame2.classList.add('show-frame');
    }
  });

  btnSelect.addEventListener('click', function (e) {
    e.preventDefault();
    frame3.classList.remove('transition-down');
    frame3.classList.add('transition-up');
    setTimeout(function () {
      frame4.classList.add('transition-down');
    }, 1700);
  });

  btnLast.addEventListener('click', function (e) {
    e.preventDefault();
    frame4.classList.remove('transition-down');
    frame2.classList.remove('transition-down');
    frame3.classList.remove('transition-down');
    frame3.classList.remove('transition-up');
    lastSection.classList.remove('transition-down');
  });
};
