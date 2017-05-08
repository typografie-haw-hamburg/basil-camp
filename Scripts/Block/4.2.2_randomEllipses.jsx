// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Kreise in zufälliger Position mit zufälliger Größe

// Erklären:
// Größe darf nicht 0 sein

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  for (var i = 0; i < 40; i++) {
    var randomX = b.random(b.width);
    var randomY = b.random(b.height);
    var randomRadius = b.random(5, 60);
    b.ellipse(randomX, randomY, randomRadius, randomRadius);
  }

}

b.go();
