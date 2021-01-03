var newSlider = document.getElementById('newSlider');
var newSliderBullets = document.getElementById('newSliderBullets');

var newSliderSlideImages = [];
var newSliderSlideTimer = 4000;
var newSliderIndex = 0;
var newSlideTimer;
var rainbowFlag = 0;hue = 0;
opacity = 0;

newSliderSlideImages.push("url(RES/IMG/1.jpg)");
newSliderSlideImages.push("url(RES/IMG/2.jpg)");
newSliderSlideImages.push("url(RES/IMG/3.jpg)");
newSliderSlideImages.push("url(RES/IMG/4.jpg)");


newSliderInitiator();
newSlideTimer = setInterval(newSliderLoop, newSliderSlideTimer);

hue = 0;
// newSlideRainbow = setInterval(rainbowBorder, 1000);


function newSliderInitiator() {

    for (var i = 0; i < newSliderSlideImages.length; i++) {
        var a = document.createElement("a");
        a.innerHTML = "●";
        a.rel = i;
        a.addEventListener("click", newSliderBulletNavigator);
        newSliderBullets.appendChild(a);
    }

}




function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

function newSliderLoop() {

    if (newSliderIndex < newSliderSlideImages.length - 1) {
        newSliderIndex += 1;
    } else {
        newSliderIndex = 0;
    }

    opacity = 0;
    // fadeOut();
    newSlider.style.backgroundImage = newSliderSlideImages[newSliderIndex];

}

function fadeOut() {
    if (opacity < 1) {
        opacity += .05;
        // newSlider.style.opacity = opacity;
        setTimeout(function () { fadeOut() }, 50);

    }

}

function newSliderBulletNavigator() {
    newSliderBullets.onclick = function (event) {
        var target = getEventTarget(event);
        newSliderIndex = eval(target.rel);

        clearInterval(newSlideTimer);
        opacity = 0;
        fadeOut();
        newSlider.style.backgroundImage = newSliderSlideImages[newSliderIndex];
        newSlideTimer = setInterval(newSliderLoop, newSliderSlideTimer);
    }
}

function rainbowBorder() {
    if(rainbowFlag !=0)
    {
        if (hue < 255) {
            hue += 10;
            newSlider.style.borderWidth = "2px";
            newSlider.style.borderRadius = "10px";
            newSlider.style.boxShadow = "0px 0px 50px "+"hsl("+hue+",100%,30%)";
            newSlider.style.borderColor = "hsl("+hue+",100%,50%)";
            setTimeout(function () { rainbowBorder() }, 100);
    
        }else{
            hue = 0;
        }
    }
}