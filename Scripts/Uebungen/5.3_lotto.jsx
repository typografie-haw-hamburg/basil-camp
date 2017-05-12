// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var numbers = [];

  var x = 30;
  var y = 30;
  var width = 10;
  var height = 10;

  // Zahlen in Array speichern
  for(var i = 1; i < 50; i++) {
    numbers.push(i);
  }

  // 6 Zahlen auswürfeln
  for(i = 0; i < 6; i++) {
    b.fill(0);
    var randomNumber = b.round(b.random(numbers.length + 1));
    numbers.splice(randomNumber, 1);

    var loopedX = x + i * 15;
    b.println(numbers[randomNumber]);

    b.textAlign(Justification.CENTER_ALIGN, Justification.CENTER_ALIGN);
    b.text(numbers[randomNumber], loopedX, y, width, height);

    b.noFill();
    b.ellipse(loopedX + width / 2, y + height / 2, width, height);
  }

}
b.go();
