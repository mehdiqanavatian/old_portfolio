(function () {
    let ageTD = document.getElementById('ageTD');
    let dob = new Date(1991, 4, 11, 0, 0, 0);
    let now = Date.now();
    ageTD.innerHTML = Math.floor((Math.abs(now - dob)) / (1000 * 60 * 60 * 24 * 365));
}());

