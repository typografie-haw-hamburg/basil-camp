// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Bild platzieren

// Erklären:
// b.image()

function draw() {

  b.clear(b.doc());

  b.noFill();
  b.noStroke();

  var robo = b.image("robo_1.png", 20, 30);

}

b.go();
