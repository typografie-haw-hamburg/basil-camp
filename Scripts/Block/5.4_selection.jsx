// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  //b.clear(b.doc());
  b.units(b.MM);

  var sel = b.selection();

  var words = b.words(sel);
  var chars = b.characters(sel);

  b.println("In dem Textfeld stehen " + words.length + " Woerter")
  b.println("...aus " + chars.length + " Buchstaben.")


}

b.go();
