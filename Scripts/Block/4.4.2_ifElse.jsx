// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();
  b.rectMode(b.CENTER);

  var red = b.color(255, 0, 0);
  var blue = b.color(0, 0, 255);

  for (var i = 0; i < 40; i++) {
    var randomX = b.random(b.width);
    var randomY = b.random(b.height);
    var randomRadius = b.random(5, 60);

    if(randomRadius > 30) {
      b.fill(red);
      b.rect(randomX, randomY, randomRadius, randomRadius);
    } else {
      b.fill(blue);
      b.ellipse(randomX, randomY, randomRadius, randomRadius);
    }
  }

}

b.go();
