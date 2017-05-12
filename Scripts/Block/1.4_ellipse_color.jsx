// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zeichnet Brüste aus Ellipsen

// Erklären:
// b.ellipse()
// b.fill()
// am Ende: basil.js-Reference!

// dann erst: Timo Sublime Shortcuts
// dann: Ü1

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noStroke();

  b.fill(255, 236, 198);
  b.ellipse(50, 100, 60, 60);
  b.ellipse(120, 100, 60, 60);

  b.fill(210, 126, 106);
  b.ellipse(50, 105, 10, 10);
  b.ellipse(120, 105, 10, 10);

}

b.go();
