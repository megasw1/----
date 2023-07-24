const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", chekBoxes);

function chekBoxes() {
  console.log("스크롤 했음");
  // 화면 높이의 3/5를 트리거 포인트로 지정
  const triggerBottom = (window.innerHeight / 5) * 3;

  boxes.forEach(function (box) {
    //모든 박스에 상단 높이
    const boxTop = box.getBoundingClientRect().top;
    // 박스높이 < 트리거포인트 => 박스 보이기(박스에 클래스 show 달기)
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      //박스 안보이기(박스에 클래스 show 삭제)
      box.classList.remove("show");
    }
  });
}
