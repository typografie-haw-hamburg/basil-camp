// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Text in Wörter und Buchstaben zerlegen

// Erklären:
// b.selection()
// b.words()
// b.characters()
// .length

function draw() {

  var textFrame = b.selection();

  var words = b.words(textFrame);
  var chars = b.characters(textFrame);

  alert("In dem Textfeld stehen " + words.length + " Wörter …");
  alert("… aus " + chars.length + " Zeichen.");

}

b.go();
