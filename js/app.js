//Builds objecct constructor
var Product = function(product_name, photo, product_description) {
  this.label = product_name;
  this.photo = photo;
  this.productDescription = product_description;
  this.y = 0;
};

//Builds populate products array
var products = [];

//Populates products array
products.push(babySwiffer = new Product('Baby Swiffer', 'img/baby_swiffer.jpg', 'make child labor work for you!'));
products.push(balancingChair = new Product('Balancing Chair', 'img/balancing_chair.jpg', 'make that guy in your office who sits on a ball really jealous!'));
products.push(wineGlass = new Product('Wine Glass', 'img/wine_glass.jpg', 'get drunk'));
products.push(bananaSlicer = new Product('Banana Slicer', 'img/banana_slicer.jpg', 'tbd'));
products.push(bootCovers = new Product('Boot Covers', 'img/boot_covers.jpg', 'tbd'));
products.push(cthulhuToy = new Product('Cthulhu Toy', 'img/cthulhu_toy.jpg', 'tbd'));
products.push(dragonMeat = new Product('Dragon Meat', 'img/dragon_meat.jpg', 'tbd'));
products.push(penCutlery = new Product('Pen Cutlery', 'img/pen_cutlery.jpg', 'tbd'));
products.push(pizzaScissors = new Product('Pizza Scissors', 'img/pizza_scissors.jpg', 'tbd'));
products.push(r2d2Bag = new Product('R2D2 Bag', 'img/r2d2_bag.jpg', 'tbd'));
products.push(sharkSleepingBag = new Product('Sleeping Bag', 'img/shark_sleeping_bag.jpg', 'tbd'));
products.push(squidUsb = new Product('USB Tentacle', 'img/squid_usb.jpg', 'tbd'));
products.push(unicornMeat = new Product('Unicorn Meat', 'img/unicorn_meat.jpg', 'tbd'));
products.push(waterCan = new Product('Watering Can', 'img/water_can.jpg', 'tbd'));

//Creates a copy of Products array named productsCopy
var productsCopy = [];

//Creates an object to collect total vote counts
var surveyTotals = 0;

//Creates a canvas bar chart
var chart = new CanvasJS.Chart("chartContainer", {
  theme: "theme2",
  title:{text: "Market Survey Results"},
  animationEnabled: true,
  axisX:{interval: 1},
  axisY:{interval: 1},
  data: [{ type: "bar", dataPoints: products }]
});

//Can populate the productsCopy array
function makeCopy() {
  for (i=0; i< products.length; i++) {
    productsCopy.push(products[i]);
  }
}

//Can refill the productsCopy array IF it is empty
function refill() {
    if (productsCopy.length == 0) {
     makeCopy();
    }
  }

//Can stop the game at 15 votes
function playGame() {
  chart.render();
  if (surveyTotals == 15) {
    endGame();
    //chart.render();

  }
  else {
    populate();
  }
}

//Can display the end message
function endGame() {
  var elSectionTitle = document.getElementById('sectionTitle');
  elSectionTitle.innerHTML = 'Thank You!'
  var elInstruction = document.getElementById('instruction');
  elInstruction.innerHTML = 'Your input is greatly appreciated, fleshy one! Now go away.'
}

//Can create random numbers based on an array's length
function getRandom(array) {
  return Math.floor(Math.random()* array.length);
};

//Can add a vote to an array object, property "voteCount"
function voteCounter(object) {
  var addVote = object.y++;
  var addMeToo = surveyTotals++;
};

//Can splice an array based on the random number generator, separated to reduce redundancy
function splicer(array) {
  refill();
  var randomNumber = getRandom(array);
  var arrayObject = array.splice(randomNumber, 1)[0];
  return arrayObject;
}

function splicer2(array) {
  refill();
  var randomNumber = getRandom(array);
  var arrayObject = array.splice(randomNumber, 2)[0];
  return arrayObject;
}

function splicer3(array) {
  refill();
  var randomNumber = getRandom(array);
  var arrayObject = array.splice(randomNumber, 3)[0];
  return arrayObject;
}

//Generates random number variables
var leftie = splicer(productsCopy);
var central = splicer2(productsCopy);
var rightie = splicer3(productsCopy);

//Can populate the webpage
function populate() {

  //Add image buttons
  var leftButton = document.createElement('input');
    leftButton.type = "image";
    leftButton.id = "leftImage";
    leftButton.src = leftie.photo;
  var node = document.createTextNode;
  var element = document.getElementById('boxLeft');
    element.appendChild(leftButton);

  var centerButton = document.createElement('input');
    centerButton.type = "image";
    centerButton.id = "centerImage";
    centerButton.src = central.photo;
  var node = document.createTextNode;
  var element = document.getElementById('boxCenter');
    element.appendChild(centerButton);

  var rightButton = document.createElement('input');
    rightButton.type = "image";
    rightButton.id = "rightImage";
    rightButton.src = rightie.photo;
  var node = document.createTextNode;
  var element = document.getElementById('boxRight');
    element.appendChild(rightButton);
}

//Can remove Images
function removeImages() {
  var parent = document.getElementById('boxLeft');
  var child = document.getElementById('leftImage');
  parent.removeChild(child);

  var parent = document.getElementById('boxCenter');
  var child = document.getElementById('centerImage');
  parent.removeChild(child);

  var parent = document.getElementById('boxRight');
  var child = document.getElementById('rightImage');
  parent.removeChild(child);

}

//Can restore the random numbers
function restoreRandoms() {
  leftie = splicer(productsCopy);
  central = splicer2(productsCopy);
  rightie = splicer3(productsCopy);
}

//render the chart
/*function renderChart() {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "theme1",
    title:{text: "Market Survey Results"},
    animationEnabled: true,
    axisX:{interval: 1},
    axisY:{interval: 1},
		data: [{ type: "bar", dataPoints: products }]
	});
	chart.render();
}*/

//Button functions
document.getElementById('boxLeft').addEventListener('click', function() {
  voteCounter(leftie);
  removeImages();
  restoreRandoms();
  playGame();
  });
document.getElementById('boxCenter').addEventListener('click', function() {
  voteCounter(central);
  removeImages();
  restoreRandoms();
  playGame();
});
document.getElementById('boxRight').addEventListener('click', function() {
  voteCounter(rightie);
  removeImages();
  restoreRandoms();
  playGame();
});

window.onload= function() {
  makeCopy();
  populate();
  //renderChart();
}
