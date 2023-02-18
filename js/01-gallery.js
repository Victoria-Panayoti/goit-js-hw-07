import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');

const imagesElements = galleryItems.map((item) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
      </a>
    </div>`
})
    .join('');

imagesContainer.insertAdjacentHTML('beforeend', imagesElements);

imagesContainer.addEventListener('click', onImagesElementClick);

function onImagesElementClick(event) {
    event.preventDefault();
    const isImageEl = event.target.nodeName;
    if (isImageEl !== 'IMG') {
        return;
    }
    const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source} "width="800" height="600" >
`);
    lightbox.show();
    imagesContainer.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            lightbox.close();
        }
    })
}
