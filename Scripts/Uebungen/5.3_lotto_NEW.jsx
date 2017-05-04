// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var myNumbers = [];

  for (var i = 0; i < 6; i++) {
    var newNumber = b.random(1, 49);
    myNumbers.push(newNumber);
  }

  alert(myNumbers);

}
b.go();
