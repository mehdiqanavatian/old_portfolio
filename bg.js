(function animateCircles() {
    let bgCircles = document.querySelectorAll('.bg-circle');

    for (let index = 0; index < bgCircles.length; index++) {
        bgCircles[index].style.left = (Math.floor(Math.random() * 10) * 10) + "%";
        bgCircles[index].style.top = (Math.floor(Math.random() * 10) * 10) + "%";
    }
    // bgCircles.forEach(function (circle) {
    //     circle.style.left = (Math.floor(Math.random() * 10) * 10) + "%";
    //     circle.style.top = (Math.floor(Math.random() * 10) * 10) + "%";
    // });
    setTimeout(animateCircles, 10000);
}());





            // let rand = Math.floor(Math.random() * 10);
            // if (rand > 5) {

            //     circle.style.top = 50 + rand + "%";
            //     console.log(circle.style.top);
            // } else {
            //     // circle.style.top = (circle.clientTop - 5) + "%";
            //     circle.style.top = 50 - rand + "%";
            //     console.log(circle.style.top);
            // }

            // (Math.floor(Math.random()*10)*10)+"%";
