//! 1.1
const btn = document.createElement("button");
btn.id = "btnToClick";

btn.addEventListener("click", (e) => console.log(e));
document.body.appendChild(btn);

//! 1.2
const input = document.querySelector(".focus");
input.addEventListener("focus", (e) => console.log(e.target.value))

//! 1.3
const input2 = document.querySelector(".value");
input2.addEventListener("input", (e) => console.log(e.target.value))