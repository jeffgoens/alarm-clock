let timer = document.getElementById("timer");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
let startstop = document.getElementById("startstop");

let currentTime;

function showClockTime() {
    let now = new Date();
    currentTime = now.toLocaleTimeString();
    timer.textContent = currentTime;
    setTimeout(showClockTime, 1000);
}

showClockTime();