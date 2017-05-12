// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Boxen um Wörter zeichnen

// Erklären:
// b.bounds mit rect
// Problem mit Wortumbrüchen

function draw() {

  var textFrame = b.selection();

  var words = b.words(textFrame);

  b.noStroke();
  b.fill(255, 0, 0);

  for (var i = 0; i < words.length; i++) {
    var myWord = words[i];
    var myBounds = b.bounds(myWord);

    b.rect(myBounds.left, myBounds.top, myBounds.width, myBounds.height);
  }

}

b.go();
