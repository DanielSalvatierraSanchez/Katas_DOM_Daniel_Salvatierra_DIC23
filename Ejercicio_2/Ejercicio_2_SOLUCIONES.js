//! 1.1
const divVacio = document.createElement("div");

document.body.appendChild(divVacio);

//! 1.2
const divp = document.createElement("div");
const p = document.createElement("p")

divp.appendChild(p);
document.body.appendChild(divp);

//! 1.3
const divLoopP = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const p = document.createElement("p")
    divLoopP.appendChild(p);
}

document.body.appendChild(divLoopP);

//! 1.4
const dinamico = document.createElement("p");

dinamico.textContent = "Soy dinámico!"

//! 1.5
const h2 = document.querySelector(".fn-insert-here");

h2.textContent = 'Wubba Lubba dub dub';

//! 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
}

document.body.appendChild(ul)

//! 1.7
const eliminables = document.querySelectorAll(".fn-remove-me");

for (const eliminable of eliminables) {
    eliminable.remove();
}

//! 1.8
const allDiv = document.querySelectorAll("div");

const pMid = document.createElement("p");

pMid.textContent = "Voy en medio!";

document.body.insertBefore(pMid, allDiv[1]);

//! 1.9
const insertDiv = document.querySelectorAll("div.fn-insert-here");

for (const div of insertDiv) {
    const p = document.createElement("p");
    p.textContent = "Voy dentro!";
    div.appendChild(p);
}