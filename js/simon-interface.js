var Simon = require('./../js/simon.js').simonModule;
var newSimon = new Simon();


$(document).ready(function() {
  $('#start').submit(function(event) {
    event.preventDefault();
    $('#actual-colors').empty();
    newSimon.chooseColors();
    var output = newSimon.actualColors;
    output.forEach(function(color) {
      if (color === "red") {
        $('#red-display').fadeIn({ duration: 800 });
        $('#red-display').fadeOut({ duration: 800 });
      } else if (color === "yellow") {
        $('#yellow-display').fadeIn({ duration: 800 });
        $('#yellow-display').fadeOut({ duration: 800 });
      } else if (color === "blue") {
        $('#blue-display').fadeIn({ duration: 800 });
        $('#blue-display').fadeOut({ duration: 800 });
      } else if (color === "green") {
        $('#green-display').fadeIn({ duration: 800 });
        $('#green-display').fadeOut({ duration: 800 });
      }
    });
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
      $('#game-status').text("Next round!");
      newSimon.playerColors = [];
    } else {
      $('#game-status').text("You failed!");
    }
  });
});
