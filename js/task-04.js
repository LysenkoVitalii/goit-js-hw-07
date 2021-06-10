const counterWrapper = document.querySelector('#counter');
const valueDiv = document.querySelector('#value');

let counter = 0;    

const increment = function () {
    counter += 1;
    updateCounter();
}

const decrement = function () {
    counter -= 1;
    updateCounter();
}

function updateCounter() {
    valueDiv.textContent = counter;
}

counterWrapper.children[0].addEventListener('click', decrement);
counterWrapper.children[2].addEventListener('click', increment);