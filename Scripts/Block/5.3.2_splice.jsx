// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Elemente aus Array entfernen

// Erklären:
// .splice()

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // Sitznachbarn
  var neighbors = ["Hans", "Leonie", "Tina", "Martin"];

  alert(neighbors);

  neighbors.splice(2, 1);

  alert(neighbors);

}

b.go();
