import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');
const imagesElements = galleryItems.map((item) => {
    return `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    `
}).join('');

imagesContainer.insertAdjacentHTML('beforeend', imagesElements);
 
  const lightbox = new SimpleLightbox(`.gallery a`, {
        loop: true,
        captionsData: `alt`,
        captionPosition: 'bottom',
        captionDelay: 250,
        showCounter: false,
    });
