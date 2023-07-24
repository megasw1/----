const panels = document.querySelectorAll(".panel");

// for(let i=0; i<panels.length;i++){
// panels[i].addEventListener()
// }  이 과정을 밑의 foreach로 같은 역활의 반복문을 사용할 수 있다
panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    removeActiveClass();
    // 모든 패널에서 active 클래스 제거하기
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  // 패널에 있는 모든 액티브 클래스를 제거한다.
  panels.forEach(function (p) {
    p.classList.remove("active");
  });
}
