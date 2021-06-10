const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulBody = [...ingredients].map(function (ingredientName) {
    const liElement = document.createElement('li');
    liElement.textContent = ingredientName;
    return liElement.outerHTML;
}).join("");
document.querySelector('#ingredients').insertAdjacentHTML("beforeend", ulBody);

