//대화 상자 함수
// let age = prompt("나이를 입력해 주세요", 100);
// alert(`당신으 나이는 ${age}입니다`);

// let result = confirm("당신이 주인인가요");
// alert(result);

// let a = prompt("덧셈할 첫 번째 수를 입력", 1);
// let b = prompt("덧셈할 두 번째 수를 입력", 2);
// alert(Number(a) + Number(b)); // , 프롬프트의 모든 입력 값은 문자형이다.

//if문
// let 사과 = 11,
//   바나나 = 10;
// if (사과 > 바나나) {
//   console.log("사과가 바나나 보다 많습니다");
// } else if (사과 < 바나나) {
//   console.log("바나나가 사과 보다 많습니다");
// } else {
//   console.log("사과와 바나나는 같습니다");
// }

// for (let i = 1; i < 101; i++) {
//   if (i % 15 == 0) {
//     console.log("삼삼오오");
//   } else if (i % 5 == 0) {
//     console.log("오오");
//   } else if (i % 3 == 0) {
//     console.log("삼삼");
//   } else {
//     console.log(i);
//   }
// }

// let user = "홍길동";
// function showMessage() {
//   let message = "안녕하세여";
//   alert(message + user + "님");
// }
// showMessage();

function showMessage(who, text) {
  who = "👏" + who;
  alert(who + ":" + text);
}

function 더하기(a, b) {
  return a + b;
}
