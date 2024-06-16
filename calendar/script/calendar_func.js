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

// year 라는 배열을 선언하고 초기화, 이 배열은 각 달의 일 수를 담고 있다. (1~12월까지의 순서로 배열의 각 요소가 각 달의 일 수를 나타낸다.)
const year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// new Date() 를 사용하여 현재 날짜와 시간을 가져온다.
// getMonth() 메서드를 사용하여 현재 월을 가져오며, 반환되는 값은 0부터 11까지의 정수이다. (1월은 0, 2월은 1, 3월은 2,..., 12월은 11이 된다.) 이 값을 month 변수에 저장한다.
let month = new Date().getMonth();

// year 배열에서 month 인덱스에 해당하는 값을 가져와서 days 변수에 저장한다.
// 만약 현재 6월이라면, month 변수에는 5가 저장되고, days 변수에는 year[5]의 값인 30이 저장된다.
let days = year[month];

function updateCalendar() {
    // 생명주기가 끝나면 스코프가 다르기 때문에 선언되는게 다른 주소를 참조한다.

    // 현재 연도와 month 변수로 새로운 날짜 객체를 생성하고, 그 날짜의 1일의 요일을 monthFirstDay 변수에 저장한다.
    const monthFirstDay = new Date(new Date().getFullYear(), month, 1).getDay();
    // wrapper 요소의 내용을 비운다.
    wrapper.innerHTML = '';
    // console.log(month);
    // console.log(monthFirstDay);

    // 월 표시
    // 새로운 span 요소를 생성하여 monthDisplay 변수에 저장한다.
    // monthDisplay 요소에 id 속성을 설정한다.
    // monthDisplay 요소의 HTML 내용을 현재 월로 설정한다. (월은 0부터 시작하므로 1을 더한다.)
    // header 요소에 monthDisplay 요소를 자식으로 추가한다.
    const monthDisplay = document.createElement('span');
    monthDisplay.id = 'month_display';
    monthDisplay.innerHTML = month + 1;
    header.append(monthDisplay);

    // 날짜 생성
    // monthFirstDay 만큼 반복문을 실행하여 빈 div 요소를 생성하고 wrapper 요소에 추가한다.
    // 월의 첫번째 날 이전에 공백을 생성하기 위한 for 루프를 시작한다.
    // 새로운 div 요소를 생성하여 dayDiv 변수에 저장한다.
    // dayDiv 요소의 HTML 내용을 빈 문자열로 설정한다.
    // wrapper 요소에 dayDiv 요소를 자식으로 추가한다.
    for (let i = 0; i < monthFirstDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = '';
        wrapper.append(dayDiv);
    }

    // 1일부터 해당 월의 마지막 날까지의 날짜를 생성하기 위한 for 루프를 시작한다.
    // 새로운 div 요소를 생성하여 dayDiv 변수에 저장한다.
    // dayDiv 요소의 HTML 내용을 현재 날짜(i)로 설정한다.
    // wrapper 요소에 dayDiv dayDi 요소를 자식으로 추가한다.
    // dayDiv 요소에 클릭 이벤트 리스너를 추가한다.
    
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
