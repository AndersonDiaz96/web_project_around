import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.image = document.querySelector(".popup__image");
    this.title = document.querySelector(".popup__image-title");
    this.open = this.open.bind(this);
  }

  open(image, title) {
    super.open();
    this.image.src = image;
    this.title.textContent = title;
  }

  close() {
    super.close();
  }
}
