'use strict'

import galleryItems from "./js/gallery-items.js";
import ref from "./js/ref.js";

const createMarkup = ({preview, original, description}) => 
`<li class="gallery__item">
<a
  class="gallery__link"
  href= ${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`;

const createGalery = (galleryItems) => galleryItems.map((item) => 
createMarkup(item)).join('');

ref.ulGallery.insertAdjacentHTML('beforeend', createGalery(galleryItems));

const showImg = (e) => {
  e.preventDefault();
    ref.lightBox.classList.add('is-open');
    ref.bigImg.src = e.target.dataset.source;
};

const closeImg = (e) => {
  ref.lightBox.classList.remove('is-open');
  ref.bigImg.src = '';
};

const controlGallery = (e) => {

  if(e.target.classList.contains("gallery__image")
  && !ref.lightBox.classList.contains('is-open')) {
    showImg(e)
  };

  if (ref.lightBox.classList.contains('is-open') 
  && e.target === ref.closeBtn
  || e.target.classList.contains("lightbox__content")
  || e.code === 'Escape') {
      closeImg(e);
  };
};


document.addEventListener('click', controlGallery);
document.addEventListener("keydown", controlGallery);