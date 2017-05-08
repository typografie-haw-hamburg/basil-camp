// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Wortanfänge markieren

// Erklären:
// b.bounds()
// Objekte
// b.inspect()
// auf b.bounds()-Eigenschaften zugreifen

function draw() {

  var textFrame = b.selection();

  var words = b.words(textFrame);

  var thirdWordBounds = b.bounds(words[2]);

  // inspect bounds in console
  b.inspect(thirdWordBounds);

  b.noStroke();
  b.fill(255, 0, 0);

  for (var i = 0; i < words.length; i++) {
    var myWord = words[i];
    var myBounds = b.bounds(myWord);

    b.ellipse(myBounds.left, myBounds.baseline, 4, 4);
  }

}

b.go();
