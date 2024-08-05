let timer;
let seconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTime() {
    seconds++;
    timeDisplay.textContent = formatTime(seconds);
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
    isRunning = false;
});
