'use strict';

let totalClicks = 0;
let allowedClicks = 5;
let allProducts = [];
let firstImage = document.querySelector('main img:first-child');
let secondImage = document.querySelector('main img:nth-child(2)');
let thirdImage = document.querySelector('main img:nth-child(3)');
let myContainer = document.querySelector('main');

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

new Product('bag');

function getRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProduct() {
  let firstProductIndex = getRandomProduct();
  let secondProductIndex = getRandomProduct();
  let thirdProductIndex = getRandomProduct();
  //add while loop here to not allow duplicates?

  firstImage.src = allProducts[firstProductIndex].src;
  firstImage.title = allProducts[firstProductIndex].name;
  allProducts[firstProductIndex].views++;

  secondImage.src = allProducts[secondProductIndex].src;
  secondImage.title = allProducts[secondProductIndex].name;
  allProducts[secondProductIndex].views++;

  thirdImage.src = allProducts[thirdProductIndex].src;
  thirdImage.title = allProducts[thirdProductIndex].name;
  allProducts[thirdProductIndex].views++;
}

renderProduct();
