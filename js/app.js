'use strict';

let totalClicks = 0;
let allowedClicks = 25;
let allProducts = [];
let firstImage = document.querySelector('main img:first-child');
let secondImage = document.querySelector('main img:nth-child(2)');
let thirdImage = document.querySelector('main img:nth-child(3)');
let myContainer = document.querySelector('main');
let myButton = document.querySelector('div');

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep','png');
new Product('tauntaun');
new Product('unicorn');
new Product('usb','gif');
new Product('water-can');
new Product('wine-glass');

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

function renderResults(){
  let resultsList = document.querySelector('ul');
  for (let i = 0; i < allProducts.length; i++){
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].clicks} votes, and was seen ${allProducts[i].views} times.`;
    resultsList.appendChild(li);
  }
}

function handleClick(event){
  if(event.target === myContainer){
    alert('Please click on an image');
  }

  totalClicks++;
  let productClicked = event.target.title;

  for (let i = 0; i < allProducts.length; i++){
    if (productClicked === allProducts[i].name){
      allProducts[i].clicks++;
    }
  }

  renderProduct();
  if (totalClicks === allowedClicks){
    myContainer.removeEventListener('click',handleClick);
  }
}

function handleButtonClick(event){ //eslint-disable-line
  if(totalClicks === allowedClicks){
    renderResults();
  }
}


renderProduct();

myContainer.addEventListener('click', handleClick);
myButton.addEventListener('click', handleButtonClick);
