(function () {

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
var answer1 = document.querySelector('#answer1');
var textNode = document.createTextNode(avgString);
answer1.appendChild(textNode);

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
    gbpNamePrice.push(x.title + ' costs' + ' \u00A3' + x.price);
  };
});

var gbpPhrase = gbpNamePrice[0];

// Put answer on page
var answer3 = document.querySelector('#answer3');
var textNode = document.createTextNode(gbpPhrase);
answer3.appendChild(textNode);

// Display all items made of wood
// isolate materials arrays
// .indexOf materials
// print out titles of items that match

var thingsWithWood = [];

var findWood = items.filter(function(y){
  var mats = y.materials;
  if (mats.indexOf('wood') >= 0) {
    return thingsWithWood.push(y.title + ' is made of wood.');
  };
  return thingsWithWood;
});

var firstWood = thingsWithWood[0];
var secondWood = thingsWithWood[1];
var thirdWood = thingsWithWood[2];
var fourthWood = thingsWithWood[3];
var fifthWood = thingsWithWood[4];

var answer4 = document.querySelector('#answer4');
var textNode = document.createTextNode(firstWood);
answer4.appendChild(textNode);

var answer4a = document.querySelector('#answer4a');
var textNode = document.createTextNode(secondWood);
answer4a.appendChild(textNode);

var answer4b = document.querySelector('#answer4b');
var textNode = document.createTextNode(thirdWood);
answer4b.appendChild(textNode);

var answer4c = document.querySelector('#answer4c');
var textNode = document.createTextNode(fourthWood);
answer4c.appendChild(textNode);

var answer4d = document.querySelector('#answer4d');
var textNode = document.createTextNode(fifthWood);
answer4d.appendChild(textNode);

// Which items are made of eight or more materials? 
// Display the name, number of items and the items it is made of.

var eightPlusMaterials = [];

var findEight = items.filter(function(z){
  var mats = z.materials;
  if (mats.length >= 8) {
    return eightPlusMaterials.push(z);
  };
  return eightPlusMaterials;
});


eightPlusMaterials.forEach(function(a){
  var answer5 = document.querySelector('#answer5');
  var textNode = document.createTextNode(a.title + ' has ' + a.materials.length + ' materials:');
  var linebreak = document.createElement('br');
  answer5.appendChild(textNode);
  answer5.appendChild(linebreak);

  a.materials.forEach(function(b){
  var answer5a = document.querySelector('#answer5');
  var textNode = document.createTextNode(b);
  var linebreak2 = document.createElement('br');
  answer5.appendChild(textNode);
  answer5.appendChild(linebreak2);
  });
});

// How many items were made by their sellers?

homemade = [];

var whoMadeIt = items.filter(function(a){
  var made = a.who_made;
  if (made.indexOf('i_did') >= 0){
    return homemade.push(a.who_made);
  };
});

var finalAnswer = homemade.length + ' were made by their sellers.'

var answer6 = document.querySelector('#answer6');
var textNode = document.createTextNode(finalAnswer);
answer6.appendChild(textNode);


}());
