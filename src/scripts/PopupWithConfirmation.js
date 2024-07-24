import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDeleteConfirmation) {
    super(popupSelector);
    this._handleDeleteConfirmation = handleDeleteConfirmation;
    this._formElement = this._popupElement.querySelector(
      "#popup-confirmation__form"
    );
    this.open = this.open.bind(this);
    this.cardId = "";
    this.buttonDelete = document.querySelector("#popup__confirm-button");
  }

  setEventListeners() {
    console.log("entro o no?");
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      console.log("entro o no test 2?");
      evt.preventDefault();
      this._handleDeleteConfirmation(this.cardId);
    });
  }

  open(cardId) {
    this.cardId = cardId;
    super.open();
  }

  close() {
    super.close();
    this.buttonDelete.textContent = "Sí";
  }
}
