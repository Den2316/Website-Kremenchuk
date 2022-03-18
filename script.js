'use strict';
const signInButton = document.querySelector('.sign-in-button')
const hidden = document.querySelector('.hidden')
const signIn = document.querySelector('.sign-in')
const closeSignIn = document.querySelector('.close-sign-in')
signInButton.addEventListener('click',function(){
  signIn.classList.remove('hidden');
  closeSignIn.classList.remove('hidden');

})
closeSignIn.addEventListener('click',function(){
    signIn.classList.add('hidden');
    closeSignIn.classList.remove('hidden');
})