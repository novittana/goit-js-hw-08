import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryRef = document.querySelector('.gallery');

const makeGalleryItem = ({ preview, original, description } = {}) => {
  return `
  <li>
      <a class="gallery__item" href=${original}>
        <img
          class="gallery__image"
          src= ${preview}
          alt= ${description}
        />
      </a>
    </li>
      `;
};

const galleryCards = galleryItems.map(makeGalleryItem).join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryCards);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDeley: 250,
});