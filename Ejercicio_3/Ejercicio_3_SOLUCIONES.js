//! 1.1 
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul")

for (const country of countries) {
    const li = document.createElement("li");
    li.textContent = country;
    ul.appendChild(li);
}

document.body.appendChild(ul);

//! 1.2
const eliminar = document.querySelector(".fn-remove-me");
eliminar.remove();

//! 1.3 
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCars = document.createElement("ul")

for (const car of cars) {
    const li = document.createElement("li");
    li.textContent = car;
    li.setAttribute("data-function", "printHere");
    ulCars.appendChild(li);
}

document.body.appendChild(ulCars);


//! 1.4 
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries2) {
    const div = document.createElement("div");
    const title = document.createElement("h4");
    const img = document.createElement("img");

    title.textContent = country.title;
    img.src = country.imgUrl;

    div.appendChild(title);
    div.appendChild(img);
    document.body.appendChild(div);
}

//! 1.5 
const buttonDeleteLast = document.createElement("button");
buttonDeleteLast.textContent = "Eliminar el último";

function eliminarFN () {
    const allDivsToRemove = document.querySelectorAll("div");
    allDivsToRemove[allDivsToRemove.length - 1].remove();
}

buttonDeleteLast.addEventListener("click", eliminarFN);
document.body.appendChild(buttonDeleteLast);

//! 1.6 
const allDivsToRemove2 = document.querySelectorAll("div");

for (const div of allDivsToRemove2) {
    const button = document.createElement("button");
    button.textContent = "Elimíname!"
    button.addEventListener("click", (e) => e.target.parentElement.remove())
    div.appendChild(button);
}