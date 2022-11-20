import { galleryItems } from "./gallery-items.js";
import onOpenBigImages from "./01-js-functions/open-big-image.js";
import markupGallery from "./01-js-functions/markup-gallery.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", markupGallery(galleryItems));

if ("loading" in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";
  document.body.appendChild(script);
}

galleryContainer.addEventListener("click", getRightClick);

function getRightClick(evt) {
  evt.preventDefault();

  const targetClick = evt.target;
  if (!targetClick.classList.contains("gallery__image")) {
    return;
  }

  onOpenBigImages(targetClick, galleryContainer);
}
