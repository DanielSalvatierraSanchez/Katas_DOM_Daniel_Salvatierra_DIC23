const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countryUl = document.createElement('ul');
document.body.appendChild(countryUl);
for (const country of countries) {
  const countryLi = document.createElement('li');
  countryLi.textContent = country
  countryUl.appendChild(countryLi);
} 


const removeClass = document.getElementsByClassName('fn-remove-me');
console.log(removeClass);
const removeClassP = document.querySelector('.fn-remove-me');
removeClassP.remove();


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carsUl = document.createElement('ul');
document.body.appendChild(carsUl);
const divUl = document.querySelector('[data-function="printHere"]');
for (const car of cars) {
  const carsLi = document.createElement('li');
  carsLi.textContent = car
  carsUl.appendChild(carsLi);
}
divUl.appendChild(carsUl);


const countriesTwo = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
// const sectionDivs = document.createElement('section');
// document.body.appendChild(sectionDivs);
for (const countryTwo of countriesTwo) {
  const divCountry = document.createElement('div');
  document.body.appendChild(divCountry);
  const h4Country = document.createElement('h4');
  h4Country.textContent = countryTwo.title;
  const imgCountry = document.createElement('img');
  imgCountry.textContent = countryTwo.imgUrl;
  // sectionDivs.appendChild(divCountry);
  divCountry.appendChild(h4Country);
  divCountry.appendChild(imgCountry);
  // document.body.appendChild(divCountry);
}


const deleteButton = document.createElement('button');
deleteButton.textContent = 'Last Element Erase';
function deleteLastDiv() {
  const finalDiv = document.querySelectorAll('div');
  finalDiv[finalDiv.length - 1].remove();
}
document.body.appendChild(deleteButton);
deleteButton.addEventListener('click', deleteLastDiv);


const allDivsRemove = document.querySelectorAll('div');
for (const div of allDivsRemove) {
  const buttonAllDivs = document.createElement('button');
  buttonAllDivs.textContent = 'Remove Div!'
  buttonAllDivs.addEventListener('click', (e) => e.target.parentElement.remove());
  div.appendChild(buttonAllDivs);
}
