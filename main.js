let timeToUpdate = 0;
let updateRatio = 10;
let main = document.querySelector(".main");
let flip = false;


let style = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(style);


window.addEventListener("mousemove", function (e) {

    if (timeToUpdate % updateRatio === 0) {
        let finalX = showCoords(e).cX - findCenter().x;
        let finalY = showCoords(e).cY - findCenter().y;
        updateTransformStyle(finalX, finalY);
    }
    ++timeToUpdate;
});

var updateTransformStyle = function (x, y) {
    if (!main.classList.contains('mainRotation')) {
        main.classList.add('mainRotation');
    }
    style.innerHTML = ".mainRotation{transform: translate(-50%, -50%) rotateY(" + (x / document.body.offsetWidth / 2).toFixed(2) + "deg) rotateX(" + -1 * y / document.body.offsetHeight / 2 + "deg);}";
};

function showCoords(event) {
    var cX = event.clientX;
    var cY = event.clientY;
    var coords = { cX, cY };
    return coords;
}

function findCenter() {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    return { x, y };
}


let menu = document.querySelector(".menu");
menu.addEventListener('click', function (e) {


    function toggleMenu() {
        for (let index = 0; index < menu.children.length; index++) {
            menu.children[index].classList.remove('active');
        }
    }
    toggleMenu();
    e.target.classList.add('active');
});


function flipCard(){
    let card = document.querySelector('.card');
    let navbar = document.querySelector('.navbar');
    flip = !flip;

    if (!flip && card.classList.contains('flip')) {
        navbar.style.visibility = "visible";
        card.classList.remove('flip');
    } else {
        navbar.style.visibility = "hidden";
        card.classList.add('flip');
    }
}


document.querySelector('.logo').addEventListener('click', flipCard);
document.querySelector('.card-back').addEventListener('click', flipCard);