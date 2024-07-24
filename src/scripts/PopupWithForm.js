import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__container");
    this._inputList = this._formElement.querySelectorAll(".popup__imput");
    this.buttonProfile = document.querySelector("#popup__button-profile");
    this.formCreateBtn = document.querySelector("#formCreateBtn");
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
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
    this._formElement.reset();
    this.buttonProfile.textContent = "Crear";
    this.formCreateBtn.textContent = "Crear";
  }
}
