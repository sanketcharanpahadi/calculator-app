const calculator = document.querySelector(".buttons");
const expression = "";
let inputScreen = document.querySelector(".input-screen");
let outputScreen = document.querySelector(".output-screen");
const themes = document.querySelectorAll(".active-theme");
const themeColor = document.querySelector(".theme-color");

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
      inputScreen.textContent = "";
    } else {
      inputScreen.textContent += outputScreen.textContent;
      outputScreen.textContent = eval(inputScreen.textContent);
      inputScreen.textContent = "";
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

themeColor.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("active-theme")) {
    const classes = e.target.classList[1];
    if (classes[classes.length - 1] == 2) {
      theme2();
    } else if (classes[classes.length - 1] == 3) {
      theme3();
    } else {
      theme1();
    }

    [...themes].forEach((theme) => {
      if (theme.classList.contains(classes)) theme.classList.add("active");
      else theme.classList.remove("active");
    });
  }
});

function theme1() {
  let root = document.styleSheets[0].cssRules[2].style;
  root.setProperty("--color-bg-main", "hsl(222, 26%, 31%)");
  root.setProperty("--color-bg-keypad", "hsl(223, 31%, 20%)");
  root.setProperty("--color-bg-screen", "hsl(224, 36%, 15%)");
  root.setProperty("--color-bg1-key", "hsl(225, 21%, 49%)");
  root.setProperty("--color-sh1-key", " hsl(224, 28%, 35%)");
  root.setProperty("--color-bg2-key", "hsl(6, 63%, 50%)");
  root.setProperty("--color-sh2-key", "hsl(6, 70%, 34%)");
  root.setProperty("--color-bg3-key", " hsl(30, 25%, 89%)");
  root.setProperty("--color-sh3-key", "hsl(28, 16%, 65%))");
  root.setProperty("--color-text-blue", " hsl(221, 14%, 31%)");
  root.setProperty("--color-text-white", " #fff");
}

function theme2() {
  let root = document.styleSheets[0].cssRules[2].style;
  root.setProperty("--color-bg-main", "hsl(0, 0%, 90%)");
  root.setProperty("--color-bg-keypad", "hsl(0, 5%, 81%)");
  root.setProperty("--color-bg-screen", "hsl(0, 0%, 93%)");
  root.setProperty("--color-bg1-key", "hsl(185, 42%, 37%)");
  root.setProperty("--color-sh1-key", "hsl(185, 58%, 25%)");
  root.setProperty(" --color-bg2-key", "hsl(25, 98%, 40%)");
  root.setProperty("--color-sh2-key", "hsl(25, 99%, 27%)");
  root.setProperty("--color-bg3-key", "hsl(45, 7%, 89%)");
  root.setProperty("--color-sh3-key", "hsl(35, 11%, 61%)");
  root.setProperty("--color-text-blue", "hsl(60, 10%, 19%)");
  root.setProperty("--color-text-white", "hsl(0, 0, 100%)");
}

// theme2();
function theme3() {
  let root = document.styleSheets[0].cssRules[2].style;
  root.setProperty("--color-bg-main", "hsl(268, 75%, 9%)");
  root.setProperty("--color-bg-keypad", "hsl(268, 71%, 12%)");
  root.setProperty("--color-bg-screen", "hsl(281, 89%, 26%)");
  root.setProperty("--color-bg1-key", "hsl(285, 91%, 52%)");
  root.setProperty("--color-sh1-key", "hsl(176, 100%, 44%)");
  root.setProperty("--color-bg2-key", "hsl(177, 92%, 70%)");
  root.setProperty("--color-sh2-key", "hsl(25, 99%, 27%)");
  root.setProperty("--color-bg3-key", "hsl(268, 47%, 21%)");
  root.setProperty("--color-sh3-key", "hsl(290, 70%, 36%)");
  root.setProperty("--color-text-blue", "hsl(52, 100%, 62%)");
  root.setProperty("--color-text-white", "hsl(52, 100%, 62%)");
}

// theme3();
