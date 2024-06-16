const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const appendMinutes = document.getElementById('minutes');
const appendHours = document.getElementById('hours');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let hours = 0;
let minutes = 0;
let seconds = 0;
let tens = 0;
let interval;

buttonStart.onclick = () => {
    interval = setInterval(startTimer, 10);
};

buttonStop.onclick = () => {
    clearInterval(interval);  // clearInterval 하지 않으면 스택에 계속 쌓임
};

buttonReset.onclick = () => {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    tens = 0;
    appendHours.innerText = 0;
    appendMinutes.innerText = 0;
    appendSeconds.innerText = 0;
    appendTens.innerText = 0;
};

function startTimer() {
    tens++;

    if (tens > 99) {
        // seconds 1 올리기
        seconds++;
        // appendSeconds 에도 반영하기
        appendSeconds.innerText = seconds;
        // tens 초기화
        tens = 0;
        appendTens.innerText = 0;
    } else {
        //
        appendTens.innerText = tens;
    }
}
