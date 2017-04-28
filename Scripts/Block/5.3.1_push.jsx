// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var birds = ["Meise", "Elster", "Goldammer", "Amsel"];

  alert(birds);

  birds.push("Rabe");

  alert(birds);


}

b.go();
