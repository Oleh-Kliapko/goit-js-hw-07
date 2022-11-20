import { galleryItems } from "./gallery-items.js";
import OpenBasicLightBox from "./js-functions/open-basiclightbox.js";
import markupGallery from "./js-functions/markup-gallery.js";
import startLazyLoading from "./js-functions/lazy-load.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", markupGallery(galleryItems));

startLazyLoading();

galleryContainer.addEventListener("click", getRightClick);

/** functions */

function getRightClick(evt) {
  evt.preventDefault();

  const targetClick = evt.target;
  if (!targetClick.classList.contains("gallery__image")) {
    return;
  }

  OpenBasicLightBox(targetClick, galleryContainer);
}
