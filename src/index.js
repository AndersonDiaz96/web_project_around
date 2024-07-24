import "./pages/index.css";
import { Card } from "./scripts/Card.js";
import {
  profileButton,
  openCardBtn,
  popupClose,
  closeCard,
  closeImg,
  profileName,
  profileJob,
  inputName,
  inputJob,
  formProfile,
  formButton,
  formCreateBtn,
  template,
  cardArea,
  formCard,
  inputImage,
  inputTitle,
  elementImage,
  profileForm,
  profileForm2,
  profileForm3,
  avatarButton,
  buttonProfile,
  buttonAvatar,
  buttonDelete,
} from "./scripts/utils.js";

import FormValidator from "./scripts/FormValidator.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import Api from "./scripts/Api.js";
import PopupWithAvatar from "./scripts/PopupWithAvatar.js";
import PopupWithConfirmation from "./scripts/PopupWithConfirmation.js";

const popupWithImage = new PopupWithImage("#popupimageopen");

const userInfo = new UserInfo({
  name: "",
  about: "",
  userId: "",
});

const popupWithConfirmation = new PopupWithConfirmation(
  "#popupconfirmation",
  (cardId) => {
    api.deleteCard(cardId).then((result) => {
      buttonDelete.textContent = "Guardando...";
      popupWithConfirmation.close();
      const card = document.querySelector(`#id_${cardId}`);
      card.remove();
    });
  }
);

const popupAvatar = new PopupWithAvatar("#popupaddavatar", (input) => {
  api.editAvatar(input).then((result) => {
    buttonProfile.textContent = "Guardando...";
    userInfo.setUserInfo(result);
    buttonAvatar.close();
  });
});

const popupProfile = new PopupWithForm("#popupaddprofile", (inputs) => {
  api.editProfile(inputs).then((result) => {
    buttonProfile.textContent = "Guardando...";
    userInfo.setUserInfo(result);
    popupProfile.close();
  });
});

const popupProfileCard = new PopupWithForm("#popupaddimage", (inputs) => {
  api.addCard(inputs).then((result) => {
    formCreateBtn.textContent = "Guardando...";
    const newCard = new Card(
      result,
      popupWithImage.open,
      popupWithConfirmation.open
    ).generatorCard();
    cardArea.prepend(newCard);
    popupProfileCard.close();
  });
});

popupProfile.setEventListeners();
popupProfileCard.setEventListeners();
popupWithImage.setEventListeners();
popupAvatar.setEventListeners();
popupWithConfirmation.setEventListeners();

function handleOpenProfile(evt) {
  popupProfile.open();
  const info = userInfo.getUserInfo();
  inputName.value = info.name;
  inputJob.value = info.about;
}

function handleOpenAvatar(evt) {
  popupAvatar.open();
}

//trashButton.addEventListener("click", handleOpenConfirmation);
avatarButton.addEventListener("click", handleOpenAvatar);
profileButton.addEventListener("click", handleOpenProfile);

openCardBtn.addEventListener("click", function () {
  popupProfileCard.open();
});

const settings = {
  inputSelector: ".popup__imput",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__imput_type_error",
  errorClass: "popup__error-visible",
};

const validateFormProfile = new FormValidator(settings, profileForm);
validateFormProfile.enableValidation();

const validateFormCard = new FormValidator(settings, profileForm2);
validateFormCard.enableValidation();

const validateFormConfirmation = new FormValidator(settings, profileForm3);
validateFormConfirmation.enableValidation();

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "07e61eb5-a89f-450f-ab80-7e49415999f8",
    "Content-Type": "application/json",
  },
});

api.getInitialCards().then((result) => {
  const section = new Section(
    {
      items: result,
      renderer: (item) => {
        const card = new Card(
          item,
          popupWithImage.open,
          userInfo._userId,
          () => {
            return api.addLike(card._id);
          },
          () => {
            return api.removeLike(card._id);
          },
          () => {
            popupWithConfirmation.open(card._id);
          }
        );
        const cardElement = card.generatorCard();
        section.addItem(cardElement);
      },
    },
    cardArea
  );
  section.renderer();
});

api.getUserInfo().then((result) => {
  userInfo.setUserInfo(result);
});
