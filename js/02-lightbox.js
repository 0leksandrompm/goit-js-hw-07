import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".js-lightbox")
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems))

// console.log(container);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class= "gallery__item ">
            <a class="gallery__link js-gallery__link" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
            </a>
        </li>
    ` ).join('')
  }

// 12

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData:"alt",
  captionDelay: 250
});