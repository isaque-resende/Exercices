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
  if (input.value.length > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (input.value.length > 0 && KeyboardEvent.code === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

button.addEventListener("keydown", addListAfterKeypress);
