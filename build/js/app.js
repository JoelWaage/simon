(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon() {
  this.actualColors = [];
  this.playerColors = [];
}

Simon.prototype.chooseColors = function() {
  var possibleColors = ["red", "yellow", "green", "blue"];
  var random = Math.floor(Math.random() * 4);
  this.actualColors.push(possibleColors[random]);
}

Simon.prototype.evaluateArrays = function() {
  if (this.actualColors.length === this.playerColors.length) {
    for (var i = 0; i < this.actualColors.length; i++) {
      if (this.actualColors[i] === this.playerColors[i]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

exports.simonModule = Simon;

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);
