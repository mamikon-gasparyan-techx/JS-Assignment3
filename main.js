import { increment, reset } from "./counter.js";

const button1 = document.querySelector("#increment_b");
const button2 = document.querySelector("#reset_b");
const buttonform = document.querySelector("#submit");

button1.addEventListener("click", () => {
  document.querySelector("#display").innerText = increment();
});

button2.addEventListener("click", () => {
  document.querySelector("#display").innerText = reset();
});

buttonform.addEventListener("click", () => {
  let lenchar = document.querySelector("#txt").value.length;
  if (lenchar < 3) {
    document.querySelector("#invalid").style.color = "red";
    document.querySelector("#invalid").innerText = "Invalid input";
    throw new Error("Invalid input");
  } else {
    document.querySelector("#txt").value = "";
    document.querySelector("#invalid").innerText = "";
  }
});
