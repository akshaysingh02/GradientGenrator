var cs = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ran = document.querySelector("button");


function setGradient() {
  body.style.background =
    "linear-gradient(to right," + c1.value + "," + c2.value + ")";
  ran.style.background =
    "linear-gradient(to top," + c2.value + "," + c1.value + ")";
  cs.textContent = body.style.background;
}
c1.addEventListener("input", setGradient);
c2.addEventListener("input", setGradient);

function randomhex() {
  var rgb1 ='#' + (Math.random().toString(16) + "000000").substring(2,8);
  var rgb2 = '#' + (Math.random().toString(16) + "000000").substring(2,8);

  body.style.background = "linear-gradient(to right," + rgb1 + "," + rgb2 + ")";
  ran.style.background = "linear-gradient(to top," + rgb2 + "," + rgb1 + ")";
  cs.textContent = body.style.background;
  c1.value = rgb1;
  c2.value = rgb2;
}

ran.addEventListener("click", randomhex);
