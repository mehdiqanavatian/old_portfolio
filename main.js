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

    function hideAllContent() {
        let content = document.querySelector('.content');

        for (let index = 0; index < content.children.length; index++) {
            content.children[index].classList.remove('activeContent');
        }
    }
    toggleMenu();
    hideAllContent();
    e.target.classList.add('active');
});


function flipCard() {
    let card = document.querySelector('.card');
    let front = document.querySelector('.card-front');
    flip = !flip;

    if (!flip && card.classList.contains('flip')) {
        front.style.visibility = "visible";
        card.classList.remove('flip');
    } else {
        front.style.visibility = "hidden";
        card.classList.add('flip');
    }
}


document.querySelector('.logo').addEventListener('click', flipCard);
document.querySelector('.card-back').addEventListener('click', flipCard);
document.querySelector('#contacts').addEventListener('click', flipCard);
document.querySelector('.expand').addEventListener('click', function (e) {

    let card = document.querySelector('.card');
    let logo = document.querySelector('.logo');
    if (!main.classList.contains('maxWH')) {
        main.classList.add('maxWH');
        card.classList.add('maxWH');
        logo.classList.add('logoMax');
        document.body.classList.add('noPerspective')
    } else {
        main.classList.remove('maxWH');
        card.classList.remove('maxWH');
        logo.classList.remove('logoMax');
        document.body.classList.remove('noPerspective')
    }

})

document.querySelector('.skills-nav').addEventListener('click', function (e) {
    let navanchor = e.target;
    let strhref = navanchor.getAttribute('href');
    let skill = document.querySelector(strhref);
    let skills = document.querySelector('#skills');

    for (const child of skills.children) {
        if (child.classList.contains('first-order')) {
            child.classList.remove('first-order');
        }
    }

    skill.classList.add('first-order');
    // let ttag = document.querySelector();
});