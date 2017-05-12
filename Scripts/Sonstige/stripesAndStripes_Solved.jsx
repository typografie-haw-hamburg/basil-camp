// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.size(200, 200);

  b.fill(255);
  b.noStroke();

  var randomColors = [b.color(b.random(255), b.random(255), b.random(255)), b.color(b.random(255), b.random(255), b.random(255)), b.color(b.random(255), b.random(255), b.random(255))];

  var stepCount = 50;
  var step = b.width / stepCount;

  var iStep = b.random(1, 4);

  for (var i = 0; i < stepCount; i += iStep) {
    var randomIndex = b.floor(b.random(randomColors.length));
    var randomColor = randomColors[randomIndex];
    b.fill(randomColor);

    b.rect(i * step, 0, step, b.height);

    var randomIndex = b.floor(b.random(randomColors.length));
    var randomColor = randomColors[randomIndex];
    b.fill(randomColor);

    b.rect(0, i * step, b.width, step);
  }

}

b.go();
