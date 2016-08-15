var Simon = require('./../js/simon.js').simonModule;
var newSimon = new Simon();


$(document).ready(function() {
  $('#start').submit(function(event) {
    event.preventDefault();
    $('#actual-colors').empty();
    newSimon.chooseColors();
    var output = newSimon.actualColors;
    output.forEach(function(color) {
      $("#actual-colors").append("<li>" + color + "</li>");
    });
    console.log("computer done!");
  });

  $('#red').submit(function(event) {
    event.preventDefault();
    newSimon.playerColors.push("red");
    console.log(newSimon.playerColors);
  });
  $('#yellow').submit(function(event) {
    event.preventDefault();
    newSimon.playerColors.push("yellow");
    console.log(newSimon.playerColors);
  });
  $('#green').submit(function(event) {
    event.preventDefault();
    newSimon.playerColors.push("green");
    console.log(newSimon.playerColors);
  });
  $('#blue').submit(function(event) {
    event.preventDefault();
    newSimon.playerColors.push("blue");
    console.log(newSimon.playerColors);
  });

  $('#done').submit(function(event) {
    event.preventDefault();
    console.log(newSimon.evaluateArrays());
    if (newSimon.evaluateArrays() === true) {
      $('#game-status').append("<li>" + "Next round!" + "</li>");
      newSimon.playerColors = [];
    } else {
      $('#game-status').append("<li>" + "You failed!" + "</li>");
    }
  });
});
