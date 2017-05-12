// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var names = ["Patricia", "Katrin", "Maya", "Christian", "Alexandra", "Ksenia", "Heike", "Andreas", "Mert", "Thao", "Paulina", "Ricardo", "Michael", "Maggi", "Farah", "Doro", "Daniel", "Annika", "Katharina", "Elena", "Ram", "Sarah", "Lisa?", "Cora?"];

  var campers = names.length;

  for(var i = 0; i < campers; i++){
    var randomIndex = b.floor( b.random(0, names.length) );
    alert(names[randomIndex]);
    names.splice(randomIndex, 1);
  }
}

b.go();
