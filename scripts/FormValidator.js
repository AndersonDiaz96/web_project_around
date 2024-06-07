class FormValidator {
  constructor(formElement, inputElement, settings) {
    this._formElement = formElement;
    this._inputElement = inputElement;
    this._settings = settings;
  }

  showInputError(errorMessage) {
    this._errorElement = this._formElement.querySelector(
      `.${this._inputElement.id}-error`
    );
    this._inputElement.classList.add(settings.inputErrorClass);
    this._errorElement.textContent = errorMessage;
  }

  hideInputError() {
    const hideError = () => {
      this._errorElement = this._formElement.querySelector(
        `.${inputElement.id}-error`
      );
      this._inputElement.classList.remove(settings.inputErrorClass);
      this._errorElement.textContent = "";
    };
    hideError();
  }

  checkInputValidity() {
    const checkValidity = () => {
      if (!this._inputElement.validity.valid) {
        showInputError(
          this._formElement,
          this._inputElement,
          this._inputElement.validationMessage,
          this._settings
        );
      } else {
        hideInputError();
      }
    };
  }

  hasInvalidInput() {
    const invalidInput = (inputList) => {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    };
  }

  toggleButtonState(buttonElement) {
    const ButtonState = () => {
      if (this.hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._settings.inactiveButtonClass);
      } else {
        buttonElement.classList.remove(this._settings.inactiveButtonClass);
      }
    };
  }
  setEventListeners() {
    const setEventListeners = (formElement, settings) => {
      const inputList = Array.from(
        formElement.querySelectorAll(settings.inputSelector)
      );
      const buttonElement = formElement.querySelector(
        settings.submitButtonSelector
      );

      this.toggleButtonState(inputList, buttonElement);

      inputList.forEach((inputElement) => {
        this._inputElement.addEventListener("input", function () {
          this.checkInputValidity(formElement, inputElement, settings);
          this.toggleButtonState(inputList, buttonElement, settings);
        });
      });
    };
  }

  test() {
    const enableValidation = (settings) => {
      const formList = Array.from(
        document.querySelectorAll(settings.formSelector)
      );
      formList.forEach((formElement) => {
        setEventListeners(formElement, settings);
      });
    };
  }

  test2() {
    enableValidation({
      formSelector: ".popup__container",
      inputSelector: ".popup__imput",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "popup__imput_type_error",
      errorClass: "popup__error-visible",
    });
  }
}

/*const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
};*/

/*const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
};*/

/*const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};*/

/*const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};*/

/*const toggleButtonState = (inputList, buttonElement, settings) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
};*/

/*const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};*/

/*const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};*/

/*enableValidation({
  formSelector: ".popup__container",
  inputSelector: ".popup__imput",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__imput_type_error",
  errorClass: "popup__error-visible",
});
*/
