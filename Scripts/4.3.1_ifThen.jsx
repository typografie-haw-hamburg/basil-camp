// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var black = b.color(0);
  var dia = 20;

  for (var i = 0; i < 50; i++) {
    b.stroke(black);
    b.fill(black);

    var randomX = b.random(0, b.width);
    var randomY = b.random(0, b.height);

    if(randomY <= b.height/2) {
      b.noFill();
    }
    else {
      b.noStroke();
    }

    b.ellipse(randomX, randomY, dia, dia);
  }

}

b.go();
