let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function addHome1() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function addHome2() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function addHome3() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}

function addGuest1() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}

function addGuest2() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}

function addGuest3() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent = homeScore;
    guestEl.textContent = guestScore;
}


