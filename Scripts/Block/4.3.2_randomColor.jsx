﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Kreise mit zufälligen Farben

// Erklären:
// scope: Unterschied, ob der Farbbefehl außerhalb oder innerhalb des Loops steht

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  for (var i = 0; i < 40; i++) {
    var randomX = b.random(b.width);
    var randomY = b.random(b.height);
    var randomRadius = b.random(5, 60);

    var randomColor = b.color( b.random(255), b.random(255), b.random(255) );
    b.fill(randomColor);

    b.ellipse(randomX, randomY, randomRadius, randomRadius);
  }

}

b.go();
