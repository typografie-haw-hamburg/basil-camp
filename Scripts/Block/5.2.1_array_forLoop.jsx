// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Array durchloopen

// Erklären:
// Array im for-loop
// .length für Loop nutzen

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // Sitznachbarn
  var neighbors = ["Hans", "Leonie", "Tina", "Martin"];

  for(var i = 0; i < neighbors.length; i++) {
    alert(neighbors[i]);
  }

}

b.go();
