// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noStroke();


  // Konfetti
  var darkBlue = b.color(20, 10, 170);
  var green = b.color(20, 200, 0);
  var red = b.color(255, 0, 0);
  var yellow = b.color(255, 255, 0);
  var violet = b.color(150, 70, 170);
  var cyan = b.color(30, 175, 255);

  var colors = [darkBlue, green, red, yellow, violet, cyan];
  var konfetti = 150;


  // Text
  b.textFont("Helvetica\tBold");
  var text = "CAMPER PARTY!";
  var width = 180;
  var height = 40;

  var x = b.random(0, b.width - width);
  var y = b.random(0, b.height - height);
  var tf = b.text(text, x, y, width, height);
  var characters = b.characters(tf);

  var text2 = "WOOOOOHOOOOOO";
  var x2 = b.random(0, b.width - width);
  var y2 = b.random(0, b.height - height);
  var tf2 = b.text(text2, x2, y2, width, height);
  var characters2 = b.characters(tf2);


  // style Camper Party
  for(var j = 0; j < characters.length; j++) {
    var randomBaselineshift = b.random(0.5, 8);
    var randomRotation = b.random(-7, 7);
    var randomTracking = b.random(0, 200);
    b.typo(characters[j], "baselineShift", randomBaselineshift);
    b.typo(characters[j], "characterRotation", randomRotation);
    b.typo(characters[j], "tracking", randomTracking);
    b.typo(characters[j], "pointSize", 40);
  }


  // style Woooohoooo
  for(var k = 0; k < characters2.length; k++) {
    var randomBaselineshift = b.random(-1, 10);
    var randomRotation = b.random(-12, 12);
    var randomTracking = b.random(0, 200);
    b.typo(characters2[k], "baselineShift", randomBaselineshift);
    b.typo(characters2[k], "characterRotation", randomRotation);
    b.typo(characters2[k], "tracking", randomTracking);
    b.typo(characters2[k], "pointSize", 20);
  }


  // style Konfetti
  for (var i = 0; i < konfetti; i++) {

    b.pushMatrix();

    var x = b.random(b.width);
    var y = b.random(b.height);
    var dia = b.random(4, 6);
    var index = b.floor(b.random(0, colors.length));

    var randomScaleX = b.random(0.2, 10);
    b.scale(randomScaleX, 1);

    b.popMatrix();

    b.pushMatrix();

    var angle = b.radians(b.random(0, 360));
    b.rotate(angle);


    b.fill(colors[index]);
    b.ellipse(x, y, dia, dia);

    b.popMatrix();
  }

}

b.go();
