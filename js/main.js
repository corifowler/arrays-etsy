// (function () {

// Get array of all item prices

var prices = items.map(function(item){
  return item.price;
});

// Find Average Price

var sum = prices.reduce(function(preVal, currVal) {
    return (preVal + currVal);
  });

var average = (sum / prices.length);
var averageCon = average.toFixed(2);

var avgString = 'The average price is $' + averageCon + '.'

// Put answer on page
// var answer1 = document.querySelector('#answer1');
// var textNode = document.createTextNode(avgString);
// answer1.appendChild(textNode);

// Items between 14.00 and 18.00 - want item title based on price

var titleWithPrice = [];

var splitByPrice = items.forEach(function(x){
  if (x.price > 14 && x.price < 18) {
    titleWithPrice.push(x.title);
  };
});

var firstItem = titleWithPrice[0];
var secondItem = titleWithPrice[1];
var thirdItem = titleWithPrice[2];

// Put answer on page
var answer2 = document.querySelector('#answer2');
var textNode = document.createTextNode(firstItem);
answer2.appendChild(textNode);

var answer2a = document.querySelector('#answer2a');
var textNode1 = document.createTextNode(secondItem);
answer2a.appendChild(textNode1);

var answer2b = document.querySelector('#answer2b')
var textNode2 = document.createTextNode(thirdItem);
answer2b.appendChild(textNode2);

// Which item has a "GBP" currency code? Display it's name and price.

var gbpNamePrice = [];

var filterByCurrency = items.forEach(function(x){
  if (x.currency_code === 'GBP') {
    gbpNamePrice.push(x.title + ' costs' + '£' + x.price);
  };
});

var gbpPhrase = gbpNamePrice[0];

// Put answer on page
var answer3 = document.querySelector('#answer3');
var textNode = document.createTextNode(gbpPhrase);
answer3.appendChild(textNode);



// }());
