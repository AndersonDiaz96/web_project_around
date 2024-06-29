import "./pages/index.css";
import { Card } from "./scripts/Card.js";
import {
  initialCards,
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
} from "./scripts/utils.js";

import FormValidator from "./scripts/FormValidator.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";

const popupWithImage = new PopupWithImage("#popupimageopen");

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, (link, name) => {
        popupWithImage.open(link, name);
      });
      const cardElement = card.generatorCard();
      section.addItem(cardElement);
    },
  },
  cardArea
);
console.log(section);
section.renderer();

const userInfo = new UserInfo({
  name: ".profile__name",
  about: ".profile__job",
});

console.log(userInfo);

const popupProfile = new PopupWithForm("#popupaddprofile", (inputs) => {
  console.log("modificamos perfil");
  userInfo.setUserInfo(inputs.name, inputs.aboutMe);
  popupProfile.close();
});

const popupProfileCard = new PopupWithForm("#popupaddimage", (inputs) => {
  console.log("creamos carta");
  console.log(inputs.title, inputs.url);
  const newCard = new Card(inputs.title, inputs.url).generatorCard();
  cardArea.prepend(newCard);
  popupProfileCard.close();
});

popupProfile.setEventListeners();
popupProfileCard.setEventListeners();
popupWithImage.setEventListeners();

function handleOpenProfile(evt) {
  popupProfile.open();
  const info = userInfo.getUserInfo();
  inputName.value = info.name;
  inputJob.value = info.about;
}

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
