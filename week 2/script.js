let display = document.getElementById("display");
function appendToDisplay(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}
function clearDisplay() {
  display.innerText = "0";
}
function backspace() {
  let current = display.innerText;
  if (current.length > 1) {
    display.innerText = current.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}
function calculate() {
  try {
    let result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

