const lightbulbBottomSVG = document.querySelector('.lightbulb-bottom');
const test = lightbulbBottomSVG.getTotalLength();



document.addEventListener("DOMContentLoaded", function () {
    const navAnchors = document.querySelector('.test');
    console.log(navAnchors);
    const lightBulbCoil = document.querySelector('.lightbulb-coil');

    navAnchors.addEventListener("mouseover", mouseOver);
    navAnchors.addEventListener("mouseleave", mouseLeave);

    function mouseOver() {
        lightBulbCoil.classList.add('red');
    }

    function mouseLeave() {
        lightBulbCoil.classList.remove('red');
    }


    // const mouseLeave = () => {
    //     lightBulbCoil.classList.remove('red');
    //     console.log('out');
    // }

});



// navAnchors.addEventListener("mouseover", function(event) {
//     lightBulbCoil.target.style.stroke = "blue";
// })