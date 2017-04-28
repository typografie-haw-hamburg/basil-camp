// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // Sitznachbarn
  var birds = ["Meise", "Elster", "Drossel", "Amsel"];

  b.println(birds);

  b.println(birds[0]);

  b.println(birds.length);

}

b.go();
