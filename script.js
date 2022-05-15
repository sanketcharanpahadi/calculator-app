// const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector(".buttons");
const expression = "";
let inputScreen = document.querySelector(".input-screen");
let outputScreen = document.querySelector(".output-screen");

calculator.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("operand")) {
    outputScreen.textContent += target.textContent;
  } else if (target.classList.contains("operator")) {
    outputScreen.textContent += target.textContent;
    inputScreen.textContent += outputScreen.textContent;
    outputScreen.textContent = "";
  } else if (target.classList.contains("result")) {
    if (outputScreen.textContent == "") {
      inputScreen.textContent += outputScreen.textContent;
      outputScreen.textContent = eval(inputScreen.textContent.slice(0, -1));
    } else {
      inputScreen.textContent += outputScreen.textContent;
      outputScreen.textContent = eval(inputScreen.textContent);
    }
  } else if (target.classList.contains("reset")) {
    inputScreen.textContent = "";
    outputScreen.textContent = "";
  } else if (target.classList.contains("delete")) {
    if (outputScreen.textContent.trim() == "") {
      inputScreen.textContent = inputScreen.textContent.slice(0, -1);
    }
    outputScreen.textContent = outputScreen.textContent.slice(0, -1);
  }
});
