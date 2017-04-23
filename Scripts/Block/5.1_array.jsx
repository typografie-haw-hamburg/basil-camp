// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var birds = ["Meise", "Elster", "Grünfink", "Amsel"];

  b.println(birds[0]);

  b.println(birds.length);

}

b.go();
