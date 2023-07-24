const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");

allImages.forEach(function (img) {
  // 이미지 클릭 이벤트시 그 이미지의 주소(src)를 빈 라이트 박스에 전달
  img.addEventListener("click", function () {
    showLightbox(img.querySelector("img").src);
    console.log("");
  });
});
// 이미지 주소를 받아서 라이트 박스에 표시한다. (평상시엔 안보임 show 클래스 추가하기)
function showLightbox(imgPath) {
  lightbox.querySelector("img").src = imgPath;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}
closeImgBtn.addEventListener("click", function () {
  // 종료 버튼 클릭시 라이트 박스 종료
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
});
