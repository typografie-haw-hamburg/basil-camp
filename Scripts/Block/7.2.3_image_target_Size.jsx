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

  var targetWidth = 100;
  var targetHeight = targetWidth / roboWidth * roboHeight;


  b.transformImage(robo, xPos, yPos, targetWidth, targetHeight);

}

b.go();
