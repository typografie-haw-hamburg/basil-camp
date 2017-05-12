// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.units(b.MM);

  var mySelection = b.selection();

  var myWords = b.words(mySelection);

  confirm("In dem Text stehen " + myWords.length + " Woerter.");

}

b.go();
