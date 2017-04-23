// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // textfile in data gespeichert, Dokument muss davor im selben Ordner gespeichert sein
  var loadedText = b.loadString("Ahnenforschung.txt");

  var tfX = 10;
  var tfY = 10;
  var tfWidth = b.width - 2*tfX;
  var tfHeigth = b.height - 2*tfY;

  var yellow = b.color(255, 255, 0);


  // loadedText in einen Textrahmen laden...
  var textFrame = b.text(loadedText, tfX, tfY, tfWidth, tfHeigth);

  // ...und in words-array zerlegen
  var words = b.words(textFrame);

  for(var i = 0; i < words.length; i++) {

    // Positionsbestimmung der einzelnen Buchstaben "freischalten"
    var wordBounds = b.bounds(words[i]);

    var wordsRight = wordBounds.right;
    var wordsDown = wordBounds.baseline;
    var dia = 2;

    b.fill(yellow);
    b.noStroke();

    b.ellipse(wordsRight - 0.5*dia, wordsDown - 0.5*dia, dia, dia);

 }





}

b.go();
