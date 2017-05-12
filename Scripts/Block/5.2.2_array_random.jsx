// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zufälliges Array-Element ausgeben

// Erklären:
// zufällige, ganze Zahl mit b.floor(array.length)

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // Sitznachbarn
  var neighbors = ["Hans", "Leonie", "Tina", "Martin"];

  var randomIndex = b.floor(b.random(0, neighbors.length));

  var randomPerson = neighbors[randomIndex];

  alert("Die zufällig auserwählte Person ist: " + randomPerson);
}

b.go();
