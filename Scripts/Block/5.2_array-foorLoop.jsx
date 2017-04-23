// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var birds = ["Meise", "Elster", "Goldammer", "Amsel"];

  for(var i=0; i < birds.length; i++){
    b.println(birds[i]);
  }

}

b.go();
