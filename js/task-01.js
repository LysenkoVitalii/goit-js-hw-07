const categoryItems = document.querySelectorAll('ul#categories > .item');
console.log(`В списке ${categoryItems.length} категории.`)
Array.prototype.forEach.call(categoryItems, (el) => {
    const title = el.querySelector('h2').innerHTML;
    const itemsLength = el.querySelectorAll('li').length;
    console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});
