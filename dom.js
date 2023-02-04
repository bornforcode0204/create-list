// document.querySelector("h1").style.backgroundColor = "#000";
// document.querySelector("h1").style.color = "orange";
// var btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("mouseleave", function () {
//   alert("Clicked!!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
