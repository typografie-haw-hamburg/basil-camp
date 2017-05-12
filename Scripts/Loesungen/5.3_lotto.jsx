// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var numbers = [];

  var xPos = 30;
  var yPos = 30;
  var width = 10;
  var height = 10;


  // Array mit Zahlen von 1 bis 49
  for(var i = 1; i < 50; i++) {
    numbers.push(i);
  }

  // 6 Zahlen auswürfeln und zeichnen
  for(i = 0; i < 6; i++) {

    // zufällige Zahl aus Array auswählen
    var randomNumber = b.floor(b.random(numbers.length));
    b.println(numbers[randomNumber]);

    // Nummer schreiben
    b.fill(0);
    b.textAlign(Justification.CENTER_ALIGN, Justification.CENTER_ALIGN);
    b.text(numbers[randomNumber], xPos, yPos, width, height);

    // Kreis zeichnen
    b.noFill();
    b.ellipse(xPos + width / 2, yPos + height / 2, width, height);

    // benutzte Nummer aus Array entfernen, Position nach rechts rücken
    numbers.splice(randomNumber, 1);
    xPos = xPos + 15;
  }

}
b.go();
