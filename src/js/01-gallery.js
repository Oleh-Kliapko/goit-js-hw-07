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
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

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

  onModalOriginalPicture(targetClick);
}

function onModalOriginalPicture(targetClick) {
  const linkContainer = document.querySelectorAll(".gallery__image");
  const urlOriginalSizePicture = targetClick.dataset.source;

  const instance = basicLightbox.create(`
      <div class="modal">
      <img src="${urlOriginalSizePicture}" alt="Big Pictures"/>
      </div>
  `);

  instance.show();

  const visible = basicLightbox.visible();

  if (visible) {
    galleryContainer.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        instance.close();
      }
    });
  }
}
