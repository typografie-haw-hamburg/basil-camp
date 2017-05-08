// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Wörter zufällig formatieren

// Erklären:
// Array von Wörtern durchlaufen

function draw() {

  var textFrame = b.selection();

  var words = b.words(textFrame);

  for (var i = 0; i < words.length; i++) {
    var myWord = words[i];
    b.typo(myWord, "baselineShift", b.random(-8, 8));
    b.typo(myWord, "pointSize", b.random(4, 30));
  }

}

b.go();
