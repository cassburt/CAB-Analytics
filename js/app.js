// Product object costructor
var Product = function(product_name, photo, product_description) {
  this.productName = product_name;
  this.photo = photo;
  this.productDescription = product_description;
  this.voteCount = 0;
}

//Create and populate product array
var products = [];
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
products.push(sharkSleepingBag = new Product('Shark Sleeping Bag', 'img/shark_sleeping_bag.jpg', 'tbd'));
products.push(squidUsb = new Product('Squid USB', 'img/squid_usb.jpg', 'tbd'));
products.push(unicornMeat = new Product('Unicorn Meat', 'img/unicorn_meat.jpg', 'tbd'));
products.push(waterCan = new Product('Water Can', 'img/water_can.jpg', 'tbd'));

//Generate a random #
function getRandom() {
return Math.floor(Math.random()* productsCopy.length);
};

//Make a copy of my products array
productsCopy = [];
function copyMe() {
  for (i=0; i < products.length; i++) {
    productsCopy.push(products[i]);
  }
}

//Populate webpage
function populate() {

  //Generate random numbers
  var leftie = getRandom();
  var central = getRandom();
  var rightie = getRandom();

  //splice the array
  spliceCopy();

  //map the array
  var photos = productsCopy.map(function(i) {return i.photo})

  //Add image buttons
  var leftButton = document.createElement('input');
  leftButton.type = "image";
  leftButton.id = "leftImage";
  leftButton.src = photos[leftie];
  var node = document.createTextNode;
  var element = document.getElementById('boxLeft');

  element.appendChild(leftButton);
  var centerButton = document.createElement('input');
  centerButton.type = "image";
  centerButton.id = "centerImage";
  centerButton.src = photos[central];
  var node = document.createTextNode;
  var element = document.getElementById('boxCenter');
  element.appendChild(centerButton);

  var rightButton = document.createElement('input');
  rightButton.type = "image";
  rightButton.id = "rightImage";
  rightButton.src = photos[rightie];
  var node = document.createTextNode;
  var element = document.getElementById('boxRight');
  element.appendChild(rightButton);
}

//Remove random item from productsCopy
function spliceCopy() {
  var i = Math.floor(Math.random()* productsCopy.length);
  var removed = productsCopy.splice(i, 1);
};

//Vote counter
function countVotes(thing) {
  var addVote = thing.voteCount++;
};

function assignPhoto(thing) {
  return thing.photo;
};

//Remove Images and reset randoms
function removeReset() {
  var parent = document.getElementById('boxLeft');
  var child = document.getElementById('leftImage');
  parent.removeChild(child);

  var parent = document.getElementById('boxCenter');
  var child = document.getElementById('centerImage');
  parent.removeChild(child);

  var parent = document.getElementById('boxRight');
  var child = document.getElementById('rightImage');
  parent.removeChild(child);

  leftie = getRandom();
  central = getRandom();
  rightie = getRandom();
}

window.onload= function() {
populate();
copyMe();
chart = new CanvasJS.Chart("chartContainer", {
    title: {text: "Clicks Per Photo"},
    data: [
            {
             type: "bar",
             dataPoints: products
            }
          ]
   });
   chart.render();
}

//Button functions
  document.getElementById('boxLeft').addEventListener('click', function() {
    countVotes(products[leftie]);
    removeReset();
    populate();
  });
  document.getElementById('boxCenter').addEventListener('click', function() {
    voteCounter(products[central]);
    removeReset();
    populate();
  });
  document.getElementById('boxRight').addEventListener('click', function() {
    voteCounter(products[rightie]);
    removeReset();
    populate();
  });

  function chartChange() {
  products[11].y++;
  chart.render();
}
