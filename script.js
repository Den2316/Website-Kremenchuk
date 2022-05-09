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

const currentSlideNature1 = document.querySelector('.nature-1');
const currentSlideNature2 = document.querySelector('.nature-2');
const currentSlideNature3 = document.querySelector('.nature-3');

const product1 = document.querySelector('.product-1');
const product2 = document.querySelector('.product-2');
const product3 = document.querySelector('.product-3');
const product4 = document.querySelector('.product-4');
const product5 = document.querySelector('.product-5');
const product6 = document.querySelector('.product-6');
const cart = document.querySelector('.cart');
// const cartDiv = document.querySelector('.cart-div');
const shop = document.getElementById('shop');
const product1AmountDOM = document.querySelector('.product-1-amount');
const product1PriceDOM = document.querySelector('.product-1-price');
const product2AmountDOM = document.querySelector('.product-2-amount');
const product2PriceDOM = document.querySelector('.product-2-price');
const product3AmountDOM = document.querySelector('.product-3-amount');
const product3PriceDOM = document.querySelector('.product-3-price');
const product4AmountDOM = document.querySelector('.product-4-amount');
const product4PriceDOM = document.querySelector('.product-4-price');
const product5AmountDOM = document.querySelector('.product-5-amount');
const product5PriceDOM = document.querySelector('.product-5-price');
const product6AmountDOM = document.querySelector('.product-6-amount');
const product6PriceDOM = document.querySelector('.product-6-price');
const totalAmountDOM = document.querySelector('.total-quantity');
const totalPriceDOM = document.querySelector('.total-price');
const erase = document.querySelector('.erase');

let autoSlideNatureChange1 = function () {
  currentSlideNature1.classList.add('hidden');
  currentSlideNature2.classList.remove('hidden');
};
let autoSlideNatureChange2 = function () {
  currentSlideNature2.classList.add('hidden');
  currentSlideNature3.classList.remove('hidden');
};
let autoSlideNatureChange3 = function () {
  currentSlideNature3.classList.add('hidden');
  currentSlideNature1.classList.remove('hidden');
};

const autoSlideNatureChangeFunc = function () {
  setTimeout(autoSlideNatureChange1, 4000);
  setTimeout(autoSlideNatureChange2, 8000);
  setTimeout(autoSlideNatureChange3, 12000);
};

// Modal window close and open

signInButton.addEventListener('click', function () {
  signIn.classList.remove('hidden');
  closeSignIn.classList.remove('hidden');
  cart.classList.add('hidden');
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

//Nature section auto slide show

autoSlideNatureChangeFunc();
setInterval(autoSlideNatureChangeFunc, 12000);

// Cart

let totalPrice = 0;
let totalAmount = 0;
let product1Price = 0;
let product1Amount = 0;
let product2Price = 0;
let product2Amount = 0;
let product3Price = 0;
let product3Amount = 0;
let product4Price = 0;
let product4Amount = 0;
let product5Price = 0;
let product5Amount = 0;
let product6Price = 0;
let product6Amount = 0;
product1.addEventListener('click', function () {
  totalPrice += 10;
  totalAmount += 1;
  product1Price += 10;
  product1Amount += 1;
  product1AmountDOM.textContent = `Amount: ${product1Amount}`;
  product1PriceDOM.textContent = `Price: ${product1Price}`;
  document.querySelector('.product-1-cart').classList.remove('hidden');
  cart.classList.remove('hidden');
  totalAmountDOM.textContent = totalAmount;
  totalPriceDOM.textContent = totalPrice;
  return totalPrice;
});
product2.addEventListener('click', function () {
  totalPrice += 20;
  totalAmount += 1;
  product2Price += 20;
  product2Amount += 1;
  product2AmountDOM.textContent = `Amount: ${product2Amount}`;
  product2PriceDOM.textContent = `Price: ${product2Price}`;
  document.querySelector('.product-2-cart').classList.remove('hidden');
  cart.classList.remove('hidden');
  totalAmountDOM.textContent = totalAmount;
  totalPriceDOM.textContent = totalPrice;
  return totalPrice;
});
product3.addEventListener('click', function () {
  totalPrice += 5;
  totalAmount += 1;
  product3Price += 5;
  product3Amount += 1;
  product3AmountDOM.textContent = `Amount: ${product3Amount}`;
  product3PriceDOM.textContent = `Price: ${product3Price}`;
  document.querySelector('.product-3-cart').classList.remove('hidden');
  cart.classList.remove('hidden');
  totalAmountDOM.textContent = totalAmount;
  totalPriceDOM.textContent = totalPrice;
  return totalPrice;
});
product4.addEventListener('click', function () {
  totalPrice += 10;
  totalAmount += 1;
  product4Price += 10;
  product4Amount += 1;
  product4AmountDOM.textContent = `Amount: ${product4Amount}`;
  product4PriceDOM.textContent = `Price: ${product4Price}`;
  document.querySelector('.product-4-cart').classList.remove('hidden');
  cart.classList.remove('hidden');
  totalAmountDOM.textContent = totalAmount;
  totalPriceDOM.textContent = totalPrice;
  return totalPrice;
});
product5.addEventListener('click', function () {
  totalPrice += 3;
  totalAmount += 1;
  product5Price += 3;
  product5Amount += 1;
  product5AmountDOM.textContent = `Amount: ${product5Amount}`;
  product5PriceDOM.textContent = `Price: ${product5Price}`;
  document.querySelector('.product-5-cart').classList.remove('hidden');
  cart.classList.remove('hidden');
  totalAmountDOM.textContent = totalAmount;
  totalPriceDOM.textContent = totalPrice;
  return totalPrice;
});
product6.addEventListener('click', function () {
  totalPrice += 15;
  totalAmount += 1;
  product6Price += 15;
  product6Amount += 1;
  product6AmountDOM.textContent = `Amount: ${product6Amount}`;
  product6PriceDOM.textContent = `Price: ${product6Price}`;
  document.querySelector('.product-6-cart').classList.remove('hidden');
  cart.classList.remove('hidden');
  totalAmountDOM.textContent = totalAmount;
  totalPriceDOM.textContent = totalPrice;
  return totalPrice;
});

//Reset and confirm cart

erase.addEventListener('click', function () {
  totalPrice = 0;
  totalAmount = 0;
  product1Price = 0;
  product1Amount = 0;
  product2Price = 0;
  product2Amount = 0;
  product3Price = 0;
  product3Amount = 0;
  product4Price = 0;
  product4Amount = 0;
  product5Price = 0;
  product5Amount = 0;
  product6Price = 0;
  product6Amount = 0;
  totalAmountDOM.textContent = totalAmount;
  totalPriceDOM.textContent = totalPrice;
  document.querySelector('.product-1-cart').classList.add('hidden');
  document.querySelector('.product-2-cart').classList.add('hidden');
  document.querySelector('.product-3-cart').classList.add('hidden');
  document.querySelector('.product-4-cart').classList.add('hidden');
  document.querySelector('.product-5-cart').classList.add('hidden');
  document.querySelector('.product-6-cart').classList.add('hidden');
  cart.classList.add('hidden');
});
