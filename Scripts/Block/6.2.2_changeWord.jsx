// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  var textFrame = b.selection();

  var words = b.words(textFrame);
  var chars = b.characters(textFrame);

  // zeigt nur das Wort-Objekt
  alert(words[3]);

  // zeigt den String eines Worts
  alert(words[3].contents);

  var myWord = words[5];

  b.typo(myWord, "pointSize", 60);
  b.typo(myWord, "fillColor", b.color(255, 0, 0));
  b.typo(myWord, "skew", 24);

}

b.go();
