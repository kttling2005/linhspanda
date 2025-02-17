let seconds = 0;
let timer;

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            console.log(`Thời gian: ${seconds} giây`);
            document.getElementById("timer").innerText = `Thời gian: ${seconds} giây`;
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    document.getElementById("timer").innerText = "Thời gian: 0 giây";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start").addEventListener("click", startTimer);
    document.getElementById("stop").addEventListener("click", stopTimer);
    document.getElementById("reset").addEventListener("click", resetTimer);
});
