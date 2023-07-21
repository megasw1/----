//alert(1);
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

console.log(randomNumber1);
console.log(randomNumber2);

if (randomNumber1 > randomNumber2) {
  h1.innerText = "player1 win🚩";
} else if (randomNumber2 > randomNumber1) {
  h1.innerText = "player2 win🚩";
} else {
  h1.innerText = "draw";
}
