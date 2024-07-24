import Popup from "./Popup.js";

export default class PopupWithAvatar extends Popup {
  constructor(popupSelector, handleFormAvatar) {
    super(popupSelector);
    this._handleFormAvatar = handleFormAvatar;
    this._formAvatar = this._popupElement.querySelector("#popup-avatar__form");
    this._inputList = this._formAvatar.querySelectorAll("#input-avatar");
    this.buttonAvatar = document.querySelector("#popup__avatar-charge");
  }

  setEventListeners() {
    super.setEventListeners();
    this._formAvatar.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormAvatar(this.getInputValues());
    });
  }

  getInputValues() {
    this.formValues = {};
    this._inputList.forEach((input) => {
      console.log("getInputValues", this.formValues);
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  close() {
    console.log(this._inputList);
    super.close();
    this._formAvatar.reset();
    this.buttonAvatar.textContent = "Guardar";
  }
}
