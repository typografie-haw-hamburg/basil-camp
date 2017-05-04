// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var red = b.color(255, 0, 0);
  var blue = b.color(0, 0, 255);

  for (var i = 0; i < 40; i++) {
    var randomX = b.random(b.width);
    var randomY = b.random(b.height);
    var randomRadius = b.random(5, 60);

    var randomNumber = b.random(10);

    if(randomNumber < 5) {
      b.fill(red);
    } else {
      b.fill(blue);
    }

    b.ellipse(randomX, randomY, randomRadius, randomRadius);
  }

}

b.go();
