let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

const inputHandler = function () {
    if (input.value === '') {
        nameOutput.innerHTML = 'незнакомец';
    } else {
        nameOutput.innerHTML = input.value;
    }
};
input.addEventListener('input', inputHandler);