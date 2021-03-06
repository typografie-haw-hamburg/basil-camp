﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Bestimmte Wörter markieren

// Erklären:
// b.startsWith
// Booleans true/false

// dann: Ü6

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
    var myWordContents = myWord.contents;

    if(b.startsWith(myWordContents, "a")) {
      var myBounds = b.bounds(myWord);

      b.rect(myBounds.left, myBounds.top, myBounds.width, myBounds.height);
    }
  }

}

b.go();
