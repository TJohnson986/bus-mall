'use strict';

let totalClicks = 0;
let allowedClicks = 5;
let allProducts = [];
let randomArray = [];
let uniqueImageCount = 6;
let firstImage = document.querySelector('main img:first-child');
let secondImage = document.querySelector('main img:nth-child(2)');
let thirdImage = document.querySelector('main img:nth-child(3)');
let myContainer = document.querySelector('main');
// let myButton = document.querySelector('div');

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
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('usb', 'gif');
new Product('water-can');
new Product('wine-glass');

function getRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProduct() {
  while (randomArray.length < uniqueImageCount) {
    let randomProduct = getRandomProduct();
    while (!randomArray.includes(randomProduct)) {
      randomArray.push(randomProduct);
    }
  }
  console.log(randomArray);
  let firstProductIndex = randomArray.shift();
  let secondProductIndex = randomArray.shift();
  let thirdProductIndex = randomArray.shift();


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

// function renderResults() {
//   let resultsList = document.querySelector('ul');
//   for (let i = 0; i < allProducts.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allProducts[i].name} had ${allProducts[i].clicks} votes, and was seen ${allProducts[i].views} times.`;
//     resultsList.appendChild(li);
//   }
// }

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }

  totalClicks++;
  let productClicked = event.target.title;

  for (let i = 0; i < allProducts.length; i++) {
    if (productClicked === allProducts[i].name) {
      allProducts[i].clicks++;
    }
  }

  renderProduct();
  if (totalClicks === allowedClicks) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
  }
}

// function handleButtonClick(event) { //eslint-disable-line
//   if (totalClicks === allowedClicks) {
//     renderResults();
//   }
// }


renderProduct();

function renderChart() {
  let productNames = [];
  let productViews = [];
  let productClicks = [];
  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productClicks.push(allProducts[i].clicks);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [productNames],
      datasets: [{
        label: 'Views',
        data: [productViews],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2
      },
      {
        label: 'Clicks',
        data: [productClicks],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 0.2)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


myContainer.addEventListener('click', handleClick);
// myButton.addEventListener('click', handleButtonClick);
