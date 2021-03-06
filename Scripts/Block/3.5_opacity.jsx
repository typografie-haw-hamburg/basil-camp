﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zehn skalierte Rects zeichnen mit for-loop

// Erklären:
// b.opacity()
// rect in einer Variablen abspeichern
// b.opacity() bezieht sich nur auf eine Form

// dann: Ü3

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var xPos = b.width / 2;
  var yPos = 10;
  var dia = 15;
  var distance = 25;
  var factorOpacity = 5;

  for (var i = 0; i < 10; i++) {
    var rect = b.rect(xPos, yPos + i * distance, dia, dia);
    b.opacity(rect, i * factorOpacity);
  }

}

b.go();
