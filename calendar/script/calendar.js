const wrapper = document.getElementById('calendar_wrapper');
// console.log(wrapper)

const Year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];      // 해당 '월'이 몇일까지 있는지 선언
let Month = new Date().getMonth();                                  // 현재 '몇 월'인지 알기 위함(인덱스처럼 0부터 시작 -> 0이 1월, 1이 2월)
let Days = Year[Month];                                             // 앞에서 선언 및 할당한 Month를 Year 변수의 '인덱스'로 사용해서 '월'의 일자를 가져옴
                                                                    // Days 선언한 이유 : 해당 '월'의 '일'만큼 div태그 생성해서 담으려고

// Month 
const thisMonth = document.createElement('span');                   // 해당 '월'의 값을 담을 span태그 선언
thisMonth.innerHTML = Month + 1;                                    // 해당 '월'의 값을 span에 담음(0부터 시작하기 때문에 보기 편하게 Month에 +1 함)
// console.log(Month) -> 6
wrapper.append(thisMonth);                                          // span 태그에 담은 값(6)을 wrapper에 추가

// Days
for (let i = 1; i < Days+1; i++) {                                  // for문은 인덱스값을 증가시키도록 사용함
    const wrapper2 = document.createElement('div');                 // 해당 '월'의 '일' 값을 담을 div태그 선언
    wrapper2.innerHTML = i;                                         // 해당 '일'의 값들을 div 태그에 담음(1부터 시작하기 때문에 Days+1로 수정)
    // console.log(wrapper2); -> <div>1</div>
    wrapper.append(wrapper2);
    // console.log(wrapper)
}

// 버튼 : 이전 달
const pre = document.createElement('button');                       // 이전 달 button 생성
pre.innerHTML = '<';                                                // 버튼 모양이 '<' 꺾쇠 모양일 수 있게 HTML에 입력
                                                    
pre.addEventListener('click', () => {                               // "<" 이 버튼 누르면 thisMonth와 Days의 내용을 빈 값으로 업데이트 : 새로운 값을 입력할 수 있게 초기화
    wrapper.innerHTML = '';
    if (Month > 0) {                                                // 위에서 선언한 Month가 0부터 시작하기 때문에 마이너스 값이 출력되지 않게 조건문 입력
        Month = Month - 1;                                                          
        Days = Year[Month];                                         // let으로 선언 했다면 값이 변경될 때 항상 할당 값 변경하기 
    }

    // Month
    const lastMonth = document.createElement('span');               // 지난'달'의 숫자값을 담을 span태그 선언
    lastMonth.innerHTML = Month + 1;                                // 지난'달'의 숫자값을 span태그에 담음 (0부터 시작하기 때문에 보기 편하게 Month에 +1 함)
    // console.log(lastMonth) -> 5, 4, 3..
    wrapper.append(lastMonth);                                      // span 태그에 담은 값을 wrapper에 추가
    // console.log(Days);

    // Days
    for (let i = 0; i < Days; i++) {                                 // for문은 인덱스값 증가시키도록 사용
        const wrapper2 = document.createElement('div');              // 해당 '일자'들의 값을 담을 div 태그 선언    
        wrapper2.innerHTML = i + 1;                                  // 인덱스 값에 1씩 더한 값을 wrapper2 변수에 담고 html에 추가하는데, for문에서 Days가 담고 있는 값들(31, 29, 30...)만큼만 나타냄
        // console.log(wrapper2);
        wrapper.append(wrapper2);                                    // wrapper에 Days 값을 담고 있는 wrapper2를 추가
    }

    const pre = document.createElement('button');                    // 이전 달 button 생성(위의 생성한 버튼에 영향받지 않음)
    pre.innerHTML = '<';                                             // 버튼 모양이 '<' 꺾쇠 모양일 수 있게 HTML에 입력
});
wrapper.parentNode.append(pre);                                     // wrapper의 parentNode에 '이전 달' 달력 내용이 추가될 수 있게 append 메소드 추가

// 버튼 : 다음 달
const next = document.createElement('button')
next.innerHTML = ">"

next.addEventListener('click', () => {
    wrapper.innerHTML = ''    
    if (Month < 12) {
        Month = Month+1
        Days = Year[Month]
    }

    // Month
    const nextMonth = document.createElement('span')
    nextMonth.innerHTML = Month
    wrapper.append(nextMonth)
    // console.log(wrapper)

    // Days
    for (let i = 0; i < Days; i++) {
        const wrapper2 = document.createElement('div')
        wrapper2.innerHTML = i + 1
        wrapper.append(wrapper2)
        console.log(wrapper2)
    }

    const next = document.createElement('button');                    // 이전 달 button 생성(위의 생성한 버튼에 영향받지 않음)
    next.innerHTML = '>';  
})
wrapper.parentNode.append(next)

// 이거 함수화 해서 재사용 가능하게 코드 리팩토링하기

// 1. let const => 재할당
// 2. append, createElement, for, if 문 이해
// 3. 배열의 활용, 인덱스의 이해
