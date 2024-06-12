let result;

const JS = document.getElementById('select');

const calc = () => {
    if (JS.value === '+') {
        result = Number(a.value) + Number(b.value);
    } else if (JS.value === '-') {
        result = Number(a.value) - Number(b.value);
    } else if (JS.value === '*') {
        result = Number(a.value) * Number(b.value);
    } else {
        result = Number(a.value) / Number(b.value);
    }
    document.getElementById('result').innerHTML = result;
};
JS.addEventListener('change', (e) => calc());

// 1. 먼저 내가 동적으로 바꿀 대상을 선택한다.
// 2. 내가 원하는 시점(인터렉션)을 정한다.
// 3. 이벤트리스너를 지정 또는 메소드를 호출
// 4. for, if, switch로 각각의 분기 처리

// context
// 내가 이 라인에서 사용할 수 있는 데이터
// 스코프, 생명주기, GC, Global/Local 변수, 버블링