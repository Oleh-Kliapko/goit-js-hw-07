import { galleryItems } from "./gallery-items.js";
import startLazyLoading from "./js-functions/lazy-load.js";
import markupGallery from "./js-functions/markup-gallery.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = markupGallery(galleryItems);

startLazyLoading();

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryContainer.addEventListener("click", getRightClick);

/** functions */

function getRightClick(evt) {
  evt.preventDefault();

  const targetClick = evt.target;

  if (!targetClick.classList.contains("gallery__image")) {
    return;
  }
}
