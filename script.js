var cs = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");


function setGradient() {
  body.style.background =
    "linear-gradient(to right," + c1.value + "," + c2.value + ")";
    cs.textContent = body.style.background;
}
c1.addEventListener("input", setGradient);
c2.addEventListener("input", setGradient);




function randomGradient(){
    body.style.background =
    "linear-gradient(to right," + random() + "," + random() + ")";
    cs.textContent = body.style.background;
}

random.addEventListener("click", randomGradient);
