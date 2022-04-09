'use strict';

//Defaults and shortcuts
const signIn = document.querySelector('.sign-in');
const signInButton = document.querySelector('.sign-in-button');
const hidden = document.querySelector('.hidden');
const closeSignIn = document.querySelector('.close-sign-in');
const nextSlideArch = document.querySelector('.next-slide');
const previousSlideArch = document.querySelector('.previous-slide');
let currentSlideArch = 1;
const currentSlideArch1 = document.querySelector(`.architecture-carousel-1`);
const currentSlideArch2 = document.querySelector(`.architecture-carousel-2`);
const currentSlideArch3 = document.querySelector(`.architecture-carousel-3`);
const currentSlideArch4 = document.querySelector(`.architecture-carousel-4`);
let beforeSlideArch = currentSlideArch - 1;

//Modal sign-in menu

signInButton.addEventListener('click', function () {
  signIn.classList.remove('hidden');
  closeSignIn.classList.remove('hidden');
});
closeSignIn.addEventListener('click', function () {
  signIn.classList.add('hidden');
  closeSignIn.classList.remove('hidden');
});

// Architecture slide-show

nextSlideArch.addEventListener('click', function () {
  if (currentSlideArch === 1) {
    currentSlideArch1.classList.add('hidden');
    currentSlideArch++;
    currentSlideArch2.classList.remove('hidden');
  } else if (currentSlideArch === 2) {
    currentSlideArch2.classList.add('hidden');
    currentSlideArch++;
    currentSlideArch3.classList.remove('hidden');
  } else if (currentSlideArch === 3) {
    currentSlideArch3.classList.add('hidden');
    currentSlideArch++;
    currentSlideArch4.classList.remove('hidden');
  } else {
    currentSlideArch4.classList.add('hidden');
    currentSlideArch = 1;
    currentSlideArch1.classList.remove('hidden');
    console.log(currentSlideArch);
  }
});

previousSlideArch.addEventListener('click', function () {
  if (currentSlideArch === 1) {
    currentSlideArch1.classList.add('hidden');
    currentSlideArch = 4;
    currentSlideArch4.classList.remove('hidden');
    console.log(currentSlideArch);
  } else if (currentSlideArch === 2) {
    currentSlideArch1.classList.remove('hidden');
    currentSlideArch--;
    currentSlideArch2.classList.add('hidden');
  } else if (currentSlideArch === 3) {
    currentSlideArch2.classList.remove('hidden');
    currentSlideArch--;
    currentSlideArch3.classList.add('hidden');
  } else {
    currentSlideArch3.classList.remove('hidden');
    currentSlideArch--;
    currentSlideArch4.classList.add('hidden');
  }
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  console.log(scrolled);
});
