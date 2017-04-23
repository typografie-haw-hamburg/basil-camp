// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  //b.clear(b.doc());
  b.units(b.MM);

  var textFrame = b.selection();

  var words = b.words(textFrame);
  var chars = b.characters(textFrame);

  b.println("In dem Textfeld stehen " + words.length + " Woerter")
  b.println("...aus " + chars.length + " Zeichen.")


}

b.go();
