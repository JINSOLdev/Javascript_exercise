const container = document.createElement('div');
container.id = 'calendar_container';
document.body.append(container);

const header = document.createElement('div');
header.id = 'calendar_header';
container.append(header);

const wrapper = document.createElement('div');
wrapper.id = 'calendar_wrapper';
container.append(wrapper);

const schedule = document.createElement('div');
schedule.id = 'calendar_schedule';
document.body.append(schedule);

const year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let month = new Date().getMonth();
let days = year[month];

function updateCalendar() {
    // 생명주기가 끝나면 스코프가 다르기 때문에 선언되는게 다른 주소를 참조한다.
    const monthFirstDay = new Date(new Date().getFullYear(), month, 1).getDay();
    console.log(month);
    console.log(monthFirstDay);
    wrapper.innerHTML = '';

    // 월 표시
    const monthDisplay = document.createElement('span');
    monthDisplay.id = 'month_display';
    monthDisplay.innerHTML = month + 1;
    header.append(monthDisplay);

    // 날짜 생성
    for (let i = 0; i < monthFirstDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = '';
        wrapper.append(dayDiv);
    }

    for (let i = 1; i <= days; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = i;
        wrapper.append(dayDiv);
        dayDiv.addEventListener('click', () => {
            // dayDIv 클릭하면 스케쥴 내용을 다큐먼트 바디에 추가
            // schedule.innerHTML = '로딩중'; // 비동기 실행 전 로딩이나 스켈레톤으로 바로 실행 로직
            setTimeout(() => {
                schedule.style.display = 'block';
                schedule.innerHTML = `${month + 1}월 ${i}일`;
            }, 1000);
        });
    }
    appendButtons();
}

function appendButtons() {
    header.innerHTML = ''; // 버튼 중복 추가 방지

    const pre = document.createElement('button');
    pre.innerHTML = '<';
    pre.addEventListener('click', () => {
        if (month > 0) {
            month--;
            days = year[month];
            updateCalendar();
        }
    });
    header.append(pre);

    const next = document.createElement('button');
    next.innerHTML = '>';
    next.addEventListener('click', () => {
        if (month < 11) {
            month++;
            days = year[month];
            updateCalendar();
        }
    });
    header.append(next);

    // 월 표시 다시 추가
    const monthDisplay = document.createElement('span');
    monthDisplay.id = 'month_display';
    monthDisplay.innerHTML = month + 1;
    header.append(monthDisplay);
}

updateCalendar();

setInterval(() => {
    if (month < 11) {
        month++;
        days = year[month];
        updateCalendar();
    } else if ( month >= 11) {
        month = 0;
        days = year[month];
        console.log(month, days);
        updateCalendar();
    }
}, 1000);
