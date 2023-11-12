import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

// If createGalleryMarkup is used in other modules, export it
export function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
      `
    )
    .join('');
}

// Use the exported function here or in other modules
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
