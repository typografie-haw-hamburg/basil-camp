// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Elemente mit bestimmten Eigenschaften sammeln

// Erklären:
// leeren Array anlegen
// .push()

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var shortNames = [];

  // Sitznachbarn
  var neighbors = ["Doro", "Timo", "Heike", "Peter"];

  for (var i = 0; i < neighbors.length; i++) {
    var myNeighbor = neighbors[i];
    if(myNeighbor.length < 5) {
      shortNames.push(myNeighbor);
    }
  }

  alert(shortNames);

}

b.go();
