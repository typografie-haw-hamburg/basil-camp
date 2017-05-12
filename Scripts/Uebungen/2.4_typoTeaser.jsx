// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var xOne = b.width/2;
  var yOne = b.height/2;

  var xTwo = 3 * b.width / 4;
  var yTwo = 3 * b.height / 4;

  var xThree = b.width / 4;

  var myColor = b.color(200, 165, 110);

  b.fill(myColor);
  b.strokeWeight(4);

  // triangle
  b.beginShape(b.CLOSE)
  b.vertex(xOne, yOne);
  b.vertex(xTwo, yTwo);
  b.vertex(xThree, yTwo);
  b.endShape();


  // typo teaser
  var myText = "I LOVE MY TRIANGLE"; 
  var xPos = 20; 
  var yPos = 20; 
  var widthTextframe = 150; 
  var heightTextframe = 30; 

  b.text(myText, xPos, yPos, widthTextframe, heightTextframe);

}

b.go();
