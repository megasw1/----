// id text , id speed 객체
const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");
const text = "안녕하세요🎈 홍길동의 포트폴리오✨ 사이트 입니다.! 환영🧡합니다~";

let idx = 1; //문자열의 인덱스
let speed = 300 / speedEl.value; //문자열 출력 속도

writeText();

function writeText() {
  textEl.textContent = text.slice(0, idx); //펏 번째 문자열부터 idx  까지 잘라내서 입력

  //idx를 1씩 증가시킨다.
  idx++;

  if (idx > text.laength) {
    //idx가 텍스트 문자열 길이보다 크면
    //idx 값을 초기값으로 되돌린다.
    idx = 1;
  }

  setTimeout(writeText, speed); //속도 speed 후에 다시 실행한다.
}

//문자열 속도를 인풋창을 읽어서 다시 설정한다.
speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
