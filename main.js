let clock = document.getElementById("clock");
let currentTime;
let alarmTime = null;
let alarmTimeout = null;

// captures and creates current time

function showClockTime() {
    let now = new Date();
    currentTime = now.toLocaleTimeString();

    clock.textContent = currentTime;
    setTimeout(showClockTime, 1000);

}

showClockTime();

// captures and creates the time a user wants the alarm to sound

function setAlarmTime(value) {
    alarmTime = value;
}

// function that creates the alarm event and provides an alert

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => alert('Wake up Roger!! Roger...wake up!! Are you sleeping or has Zoom frozen??'), timeout);
            alert('Alarm set');
        }
    }
}

// function that clears the alarm event

function clearAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}
