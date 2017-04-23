// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var birds = ["Meise", "Elster", "Goldammer", "Amsel"];

  birds.splice(1, 2);

  for(var i=0; i < birds.length; i++){
    b.println(birds[i]);
  }
}

b.go();
