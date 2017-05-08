// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Namen mit Strings ausgeben

// Erklären:
// Strings mit ""
// alert()
// Strings zusammenfügen mit +
// an Leerzeichen denken

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var firstName = "Timo";
  var lastName = "Rychert";

  alert("Hi, my name is " + firstName + " " + lastName);

}

b.go();
