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

//create random numbers
function getRandom() {
  return Math.floor(Math.random()* products.length);
};

//Generate random number
var leftie = getRandom();
var central = getRandom();
var rightie = getRandom();

//vote counter
function voteCounter(thing) {
  var addVote = thing.voteCount++;
};

//images list
var photos = products.map(function(o) {return o.photo;});

//Populate webpage
function populate() {

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

//Remove Images and reset randoms
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

  leftie = getRandom();
  central = getRandom();
  rightie = getRandom();
}


window.onload= function() {
populate();
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
    voteCounter(products[leftie]);
    removeImages();
    populate();
  });
  document.getElementById('boxCenter').addEventListener('click', function() {
    voteCounter(products[central]);
    removeImages();
    populate();
  });
  document.getElementById('boxRight').addEventListener('click', function() {
    voteCounter(products[rightie]);
    removeImages();
    populate();
  });

  function chartChange() {
  products[11].y++;
  chart.render();
}
