const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");

// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

function handleclick() {
  console.log("클릭");
}

function handleChange() {
  let c1 = color1.value;
  let c2 = color2.value;
  body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
}
