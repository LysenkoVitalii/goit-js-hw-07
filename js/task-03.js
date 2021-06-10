const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesList = [...images].map(function (imageItem) {
    const liElement = document.createElement('li');
    liElement.classList.add('image-wrapper');
    const imgElement = document.createElement('img');
    imgElement.src = imageItem.url;
    imgElement.alt = imageItem.alt;
    liElement.appendChild(imgElement);
    return liElement.outerHTML;
}).join("");
document.querySelector('#gallery').insertAdjacentHTML("beforeend", imagesList);