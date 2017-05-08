// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Kreise in zufälliger Position

// Erklären:
// zufällige Position auf der Seite

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  for (var i = 0; i < 40; i++) {
    var randomX = b.random(b.width);
    var randomY = b.random(b.height);
    b.ellipse(randomX, randomY, 40, 40);
  }

}

b.go();
