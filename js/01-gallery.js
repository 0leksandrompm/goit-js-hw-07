import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const container = document.querySelector(".js-gallery")

// console.log(container);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class= "gallery__item ">
            <a class="gallery__link js-gallery__link" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}" />
            </a>
        </li>
    ` ).join('')
  }


function handlerGalleryClick(evt) { 

      evt.preventDefault();

    const currentGallery=evt.target.closest('.gallery__image');

    const source=currentGallery.dataset.source;

    const instance = basicLightbox.create(`
    <img src='${source}'></img>
`)

instance.show()

}




container.insertAdjacentHTML('beforeend', createMarkup(galleryItems))


container.addEventListener('click', handlerGalleryClick)

window.onclose = handlerGalleryClick