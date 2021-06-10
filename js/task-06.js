let inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

const validationInput = function() {
    if (inputVal.value.length == intTotallenght) {
        inputVal.classList.remove("invalid");
        inputVal.classList.add("valid");
    } else {
        inputVal.classList.remove("valid");
        inputVal.classList.add("invalid");
    }
};
inputVal.addEventListener('focusout', validationInput);