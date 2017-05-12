// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);
  var red = b.color(255, 0, 0);


  for(var i = 0; i < 100; i++) {
    b.noStroke();
    b.noFill();

    var rectWidth = b.random(5, 40);
    var rectHeight = b.random(5, 40);
    var xPos = b.random(rectWidth / 2, b.width - rectWidth / 2);
    var yPos = b.random(rectHeight / 2, b.height - rectHeight / 2);

    if(yPos < b.height / 2) {
      b.noFill();
      b.stroke(red);
    } else{
      b.noStroke();
      b.fill(red);
    }

    b.rect(xPos, yPos, rectWidth, rectHeight);
  }
}

b.go();
