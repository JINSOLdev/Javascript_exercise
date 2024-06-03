const wrapper = document.getElementById('calendar_wrapper');
const year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let month = new Date().getMonth();
let days = year[month];

function updateCalendar() {
    wrapper.innerHTML = '';

    // Month
    const thisMonth = document.createElement('span');
    thisMonth.innerHTML = month + 1;
    wrapper.append(thisMonth);

    // Days
    for (let i = 1; i <= days; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = i;
        wrapper.append(dayDiv);
    }
    appendButtons();
}

function appendButtons() {
    // 버튼 : 이전 달
    const pre = document.createElement('button');
    pre.innerHTML = '<';
    pre.addEventListener('click', () => {
        if (month > 0) {
            month--;
            days = year[month];
            updateCalendar();
        }
    });
    wrapper.parentNode.append(pre);

    // 버튼 : 다음 달
    const next = document.createElement('button');
    next.innerHTML = '>';
    next.addEventListener('click', () => {
        if (month < 11) {
            month++;
            days = year[month];
            updateCalendar();
        }
    });
    wrapper.parentNode.append(next);
}

updateCalendar();
