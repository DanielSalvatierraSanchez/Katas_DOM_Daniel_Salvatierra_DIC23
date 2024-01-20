const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const placesUl = document.createElement('ul');
const div = document.querySelector('[data-function="printHere"]');
for (const place of places) {
  const placeLi = document.createElement('li');
  placeLi.textContent = place;
  placesUl.appendChild(placeLi);
}
div.appendChild(placesUl);
