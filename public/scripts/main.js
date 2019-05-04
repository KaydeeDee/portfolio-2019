"use strict";

var lightbulbBottomSVG = document.querySelector('.lightbulb-bottom');
var test = lightbulbBottomSVG.getTotalLength();
document.addEventListener("DOMContentLoaded", function () {
  var navAnchors = document.querySelector('.test');
  console.log(navAnchors);
  var lightBulbCoil = document.querySelector('.lightbulb-coil');
  navAnchors.addEventListener("mouseover", mouseOver);
  navAnchors.addEventListener("mouseleave", mouseLeave);

  function mouseOver() {
    lightBulbCoil.classList.add('red');
  }

  function mouseLeave() {
    lightBulbCoil.classList.remove('red');
  } // const mouseLeave = () => {
  //     lightBulbCoil.classList.remove('red');
  //     console.log('out');
  // }

}); // navAnchors.addEventListener("mouseover", function(event) {
//     lightBulbCoil.target.style.stroke = "blue";
// })