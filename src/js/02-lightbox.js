import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML(
  "beforeend",
  makeGalleryMarkup(galleryItems)
);

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: 250,
});

const galleryContainerClick = galleryContainer.addEventListener(
  "click",
  getRightClick
);

function getRightClick(evt) {
  evt.preventDefault();

  const targetClick = evt.target;

  if (!targetClick.classList.contains("gallery__image")) {
    return;
  }
}
