export default function onOpenBigImages(targetClick, galleryContainer) {
  const instance = basicLightbox.create(
    ` <div class="modal"> <img src="${targetClick.dataset.source}" alt="${targetClick.alt}"/> </div> `,
    {
      onShow: (instance) => {
        galleryContainer.addEventListener("keydown", onEscapeButton);
      },

      onClose: (instance) => {
        galleryContainer.removeEventListener("keydown", onEscapeButton);
      },
    }
  );

  instance.show();

  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
