// let inputVal = document.getElementById("validation-input");

// let totalLenght = inputVal.getAttribute("data-length");
// let intTotallenght = parseInt(totalLenght, 10);

// const validationInput = function() {
//     if (inputVal.value.length == intTotallenght) {
//         inputVal.classList.remove("invalid");
//         inputVal.classList.add("valid");
//     } else {
//         inputVal.classList.remove("valid");
//         inputVal.classList.add("invalid");
//     }
// };
// inputVal.addEventListener('focusout', validationInput);


let inputVal = document.getElementById("validation-input");
let totalLenght = +inputVal.getAttribute("data-length");


const validationInput = function() {
if (inputVal.value.length === totalLenght) {
updateClass ("valid","invalid")
} else {
updateClass ("invalid", "valid")
}
};

function updateClass (addClass, remClass) {
inputVal.classList.remove(remClass);
inputVal.classList.add(addClass);
}


inputVal.addEventListener('focusout', validationInput);