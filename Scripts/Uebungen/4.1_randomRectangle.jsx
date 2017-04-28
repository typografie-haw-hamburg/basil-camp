// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);



  for(var i = 0; i < 10; i++){
    var rectWidth = 20;
    var rectHeight = 30;
    var xPos = b.random(0, b.width - rectWidth);
    var yPos = b.random(0, b.height - rectHeight);

    b.rect(xPos, yPos, rectWidth, rectHeight)
  }
}

b.go();
