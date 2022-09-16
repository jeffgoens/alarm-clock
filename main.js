let clock = document.getElementById("clock");
let currentTime;
let alarmTime = null;
let alarmTimeout = null;

function showClockTime() {
    let now = new Date();
    currentTime = now.toLocaleTimeString();

    clock.textContent = currentTime;
    setTimeout(showClockTime, 1000);

}

showClockTime();

function setAlarmTime(value) {
    alarmTime = value;
}

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

function clearAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}