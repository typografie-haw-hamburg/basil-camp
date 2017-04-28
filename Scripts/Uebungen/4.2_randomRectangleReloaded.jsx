// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();



  for(var i = 0; i < 100; i++){
    var rectWidth = b.random(5, 40);
    var rectHeight = b.random(5, 40);
    var xPos = b.random(0, b.width - rectWidth);
    var yPos = b.random(0, b.height - rectHeight);

    b.rect(xPos, yPos, rectWidth, rectHeight);
  }
}

b.go();
