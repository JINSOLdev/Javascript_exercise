const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let interval;

buttonStart.onclick = () => {
    interval = setInterval(startTimer, 10);
};

buttonStop.onclick = () => {
    clearInterval(interval);
};

buttonReset.onclick = () => {
    clearInterval(interval);
    seconds = 0;
    tens = 0;
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
