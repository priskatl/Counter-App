const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const subtract = document.querySelector(".subtract");

// add.addEventListener("click", function () {
//   count.innerHTML++;
// });
// subtract.addEventListener("click", function () {
//   count.innerHTML--;
// });
// resetCount.addEventListener("click", function () {
//   count.innerHTML = 0;
// });

buttons.addEventListener("click", function (e) {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  } else if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  } else if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.borderColor = "lightgreen";
  } else if (count.innerHTML < 0) {
    count.style.borderColor = "red";
  } else {
    count.style.borderColor = "#fff";
  }
}
