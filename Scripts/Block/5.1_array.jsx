// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Array anlegen und anzeigen

// Erklären:
// Array erstellen
// Array ausgeben
// einzelnes Array-Element ausgeben
// Länge eines Arrays ausgeben

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // Sitznachbarn
  var neighbors = ["Hans", "Leonie", "Tina", "Martin"];

  b.println(neighbors);

  b.println(neighbors[1]);

  b.println(neighbors.length);

}

b.go();
