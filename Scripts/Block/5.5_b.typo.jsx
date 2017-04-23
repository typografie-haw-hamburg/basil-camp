// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  //b.clear(b.doc());
  b.units(b.MM);

  var sel = b.selection();

  var words = b.words(sel);
  var chars = b.characters(sel);

  b.typo(sel, 'pointSize', 20);
  b.typo(sel, 'appliedFont', "Helvetica");
  b.typo(sel, 'underline', true);
}

b.go();
