import { increment, reset } from "./counter.js";

const button1 = document.querySelector("#increment_b");
const button2 = document.querySelector("#reset_b");
const buttonform = document.querySelector("#submit");
const number = document.querySelector("#display");
const text = document.querySelector("#txt");
const invalid = document.querySelector("#invalid");

button1.addEventListener("click", () => {
  number.innerText = increment();
});

button2.addEventListener("click", () => {
  number.innerText = reset();
});

buttonform.addEventListener("click", () => {
  try {
    let lenchar = text.value.length;

    if (lenchar < 3) {
      invalid.style.color = "red";
      invalid.innerText = "Invalid input";
      throw new Error("Invalid input");
    }

    text.value = "";
    invalid.innerText = "";
    
  } catch (err) {
    console.log(err.message);
  }
});
