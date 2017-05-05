// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.noStroke();

  var xPos = 20;
  var yPos = 30;

  var robo = b.image("robo_1.png", xPos, yPos);

  var roboWidth = b.itemWidth(robo);
  var roboHeight = b.itemHeight(robo);

  var scaleFactor = 0.5;

  b.transformImage(robo, xPos, yPos, roboWidth * scaleFactor, roboHeight * scaleFactor);

}

b.go();
