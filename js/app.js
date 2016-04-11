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

//create random numbers
function getRandom() {
  return Math.floor(Math.random()*products.length);
};

//vote counter
function voteCounter(thing) {
  var addVote = thing.voteCount++;
}

//create images list
var photos = products.map(function(o) {return o.photo;});

//Inform user and gain consent
document.getElementById('start').addEventListener('click', function() {
  //Provide instructions
  document.getElementById('begin').innerHTML = "<h2>Instructions</h2><p -d=\"instruction\">Click the \"Agree\" button below to begin the survey. Pictures and descriptions for three GoFundYourself products will appear. Click on the image of the GoFundYourself product that interests you the most. Complete all 15 questions for a chance to win up to $5,000 in GoFundYourself seed money.</p>";

  //Remove Start button
  var parent = document.getElementById('buttonSpace');
  var child = document.getElementById('start');
  parent.removeChild(child);

  //Add Agree button
  var agree = document.createElement('button');
  agree.id = "agree";
  var node = document.createTextNode('I Agree');
  agree.appendChild(node);
  var element = document.getElementById('buttonSpace');
  element.appendChild(agree);

  //Begin the survey

  document.getElementById('agree').addEventListener('click', function() {
    var leftie = getRandom();
    var central = getRandom();
    var rightie = getRandom();

    //Remove Agree button
    var parent = document.getElementById('buttonSpace');
    var child = document.getElementById('agree');
    parent.removeChild(child);

    //for (var i=0; i<15; i++) {
      //Create image inputs
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

      //Left button actions
      document.getElementById('leftImage').addEventListener('click', function() {
        voteCounter(products[leftie]);

        //Remove image buttons
      /*  var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('leftImage');
        parent.removeChild(child);

        var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('centerImage');
        parent.removeChild(child);

        var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('rightImage');
        parent.removeChild(child);

        //Create new random values
        var leftie = getRandom();
        var central = getRandom();
        var rightie = getRandom();
      });*/

      //Center button actions
    /*  document.getElementById('centerImage').addEventListener('click', function() {
        voteCounter(products[central]);

        //Remove image buttons
        var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('leftImage');
        parent.removeChild(child);

        var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('centerImage');
        parent.removeChild(child);

        var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('rightImage');
        parent.removeChild(child);

        //Create new random values
        var leftie = getRandom();
        var central = getRandom();
        var rightie = getRandom();
      });

      //Right button actions
      document.getElementById('rightImage').addEventListener('click', function() {
        voteCounter(products[rightie]);

        //Remove image buttons
        var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('leftImage');
        parent.removeChild(child);

        var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('centerImage');
        parent.removeChild(child);

        var parent = document.getElementById('ImageSpace');
        var child = document.getElementById('rightImage');
        parent.removeChild(child);

        //Create new random values
        var leftie = getRandom();
        var central = getRandom();
        var rightie = getRandom();*/
    });
//  }
  });
});













//Survey Go
//var randomImage = imageArray[Math.floor(Math.random() * products.length)];
//var elRandomImage = document.getElementById("boxLeft");


//return.Math.floor(Math.random() * photosArray.length);



/*var msgChange = "Howdy!";
var elmsgChange = document.getElementById('opener');
elmsgChange.textContent = msgChange;*/
