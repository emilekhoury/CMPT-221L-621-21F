document.querySelector("h1").innerHTML = "Hi";
document.getElementById("description").innerHTML = "Emile";
document.getElementById("bossy").innerHTML = "Please do this for me";
document.querySelector("title").innerHTML = "Text has changed"

var lis = document.querySelectorAll("li");
var body = document.querySelector("body");

lis[0].style.color = "Blue";
lis[1].style.backgroundColor = "Pink";
body.style.backgroundColor = "Gray"
lis[3].style.textTransform = "uppercase";
lis[4].classList.add("title");