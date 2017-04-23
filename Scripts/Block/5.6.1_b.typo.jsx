// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  //b.clear(b.doc());
  b.units(b.MM);

  var textFrame = b.selection();

  var words = b.words(textFrame);
  var chars = b.characters(textFrame);

  b.typo(textFrame, 'pointSize', 20);
  b.typo(textFrame, 'appliedFont', "Helvetica");
  b.typo(textFrame, 'underline', true);
}

b.go();
