export default class Popup {
  constructor(popupSelector) {
    console.log(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup__open");
  }
  close() {
    this._popupElement.classList.remove("popup__open");
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this.popupCloseButton = this._popupElement.querySelector(".popup__close");
    this.popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this.popupCloseClickOut = document
      .querySelector(".popup__overlay")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
