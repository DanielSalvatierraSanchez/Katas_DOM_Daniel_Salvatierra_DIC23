const newDiv = document.createElement('div');
document.body.appendChild(newDiv);


const secondDiv = document.createElement('div');
document.body.appendChild(secondDiv);
const newP = document.createElement('p');
secondDiv.appendChild(newP);


const thirdDiv = document.createElement('div');
document.body.appendChild(thirdDiv);
for (let i = 1; i <= 6; i++) {
  const sixP = document.createElement('p');
  thirdDiv.appendChild(sixP);
};


const secondP = document.createElement('p');
secondP.textContent = 'Soy dinámico!';
/* const textSecondP = document.createTextNode('Soy dinámico!');
secondP.appendChild(textSecondP);
document.body.appendChild(secondP); */


// const searchH2 = document.getElementsByClassName('fn-insert-here');
// console.log(searchH2);
const findH2 = document.querySelector('h2.fn-insert-here');
console.log(findH2);
findH2.textContent = 'Wubba Lubba dub dub';
/* const textH2 = document.createTextNode('Wubba Lubba dub dub');
if (findH2) {
  findH2.appendChild(textH2);
} */


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const newUl = document.createElement('ul');
document.body.appendChild(newUl);
for (const app of apps) {
  const newLi = document.createElement('li');
  newLi.textContent = app;
  newUl.appendChild(newLi);
}
/*
apps.forEach(element => {
  const newLi = document.createElement('li');
  newLi.textContent = element
  newUL.appendChild(newLi)
});
*/


const removeClass = document.querySelectorAll('.fn-remove-me');
console.log(removeClass);
removeClass.forEach(element => {
  element.remove();
});


const otherP = document.createElement('p');
otherP.textContent = 'Voy en medio!';
const div = document.getElementsByTagName('div');
console.log(div);
const classDiv = document.querySelector('div.fn-insert-here');
console.log(classDiv);
classDiv.insertAdjacentElement('afterend', otherP);


const insideP = document.createElement('p');
insideP.textContent = 'Voy dentro!';
const divClass = document.querySelectorAll('div.fn-insert-here');
console.log(divClass);
divClass.forEach(divs => {
  divs.appendChild(insideP.cloneNode(true));
}
);
