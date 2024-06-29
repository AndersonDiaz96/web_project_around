export default class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this._settings = settings;
    //console.log("constructor");
  }

  showInputError(errorMessage, inputElement) {
    // console.log("showInputError");
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    this._errorElement.textContent = errorMessage;
  }

  hideInputError(inputElement) {
    // console.log("hideInputError");
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    this._errorElement.textContent = "";
  }

  checkInputValidity(inputElement) {
    // console.log("checkInputValidity");
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement.validationMessage, inputElement);
    } else {
      this.hideInputError(inputElement);
    }
  }

  hasInvalidInput(_inputList) {
    // console.log("hasInvalidInput");
    return _inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState(_inputList, _buttonElement) {
    //console.log("toggleButtonState");
    if (this.hasInvalidInput(_inputList)) {
      _buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      _buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  setEventListeners() {
    //console.log("this.formElement", this._formElement);

    let _inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );

    let _buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
    //console.log("_buttonElement", _buttonElement);

    this.toggleButtonState(_inputList, _buttonElement);

    _inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(_inputList, _buttonElement);
      });
    });
  }

  enableValidation = () => {
    this.setEventListeners();
    // console.log("enableValidation");
  };
}
