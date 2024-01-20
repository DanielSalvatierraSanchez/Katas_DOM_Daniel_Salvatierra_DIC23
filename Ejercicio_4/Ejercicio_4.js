const button = document.createElement('button');
button.textContent = 'Click and look at Console'
button.id = 'btnToClick';
button.addEventListener('click', (e) => console.log(e, button));
document.body.appendChild(button);


const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (e) => console.log(e, focusInput));


const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (e) => console.log(e, valueInput));
