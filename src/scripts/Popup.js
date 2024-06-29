export default class Popup {
  constructor(popupSelector) {
    console.log(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup__open");
  }

  close() {
    console.log(this.close);
    this._popupElement.classList.remove("popup__open");
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setProperties() {
    this.popupCloseButton = this._popupElement.querySelector(".popup__close");
  }

  handleEvents() {
    this.popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this.popupCloseClickOut.addEventListener("click", () => {
      this.close();
    });
  }

  setEventListeners() {
    this.setProperties();
    this.popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("keydown", this._handleEscClose);

    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}
