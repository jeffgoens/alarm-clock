let timer = document.getElementById("timer");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = docuement.getElementById("seconds");
let ampm = document.getElementById("ampm");
let startstop = documene.getElementById("startstop");

let currentTime;

function showClockTime() {
    let now = new Date();
    currentTime = now.toLocaleTimeString();
    timer.textContent = currentTime;
}

showClockTime();