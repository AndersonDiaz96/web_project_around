import { Card } from "./Card.js";
import {
  initialCards,
  popupCard,
  popupImage,
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
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";

//INTENTO NUMERO 1
/*const testCard = new Card({
  name: ".elements__image",
  link: ".elements__image",
});

const popupWithImage = new PopupWithImage("#popupimageopen", (popup) => {
  testCard.handleEvents(popup.link, popup.name);
});*/

//INTENTO 2

/*const testCard = new Card("click", (item) => {
  const popupWithImage = new PopupWithImage();
  popupWithImage.open(item.name, item.link);
});*/

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link);
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
});

const popupProfileCard = new PopupWithForm("#popupaddimage", (inputs) => {
  console.log("creamos carta");
  const newCard = new Card(inputs.name, inputs.link).generatorCard();
  cardArea.prepend(newCard);
});

popupProfile.setEventListeners();
popupProfileCard.setEventListeners();

export function openImagePopup(link, name) {
  const imgPop = popupImage.querySelector(".popup__image");
  const imgTitle = popupImage.querySelector(".popup__image-title");
  imgPop.src = link;
  imgTitle.alt = name;
  imgTitle.textContent = name;
  popupImage.classList.add("popup__open");
}

function closeImagePopup() {
  popupImage.classList.remove("popup__open");
}
const imgClose = document.querySelector("#closeimage");
imgClose.addEventListener("click", closeImagePopup);

/*initialCards.forEach((element) => {
  const initialCard = new Card(element.name, element.link);
  const newCard = initialCard.generatorCard();
  cardArea.append(newCard);
});*/

/*formCreateBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const cardImageNew = inputTitle.value;
  const cardTitleNew = inputImage.value;
  const CreateCard = new Card(cardImageNew, cardTitleNew);
  const cardToAdd = CreateCard.generatorCard();
  cardArea.prepend(cardToAdd);
  popupCard.classList.remove("popup__open");
});*/

function handleOpenProfile(evt) {
  console.log("test popup", popupProfile);
  popupProfile.open();
  const info = userInfo.getUserInfo();
  inputName.value = info.name;
  inputJob.value = info.about;
}

function handleCloseProfile(evt) {
  console.log("funciona esto?", popupProfile.close);
  popupProfile.close();
}

profileButton.addEventListener("click", handleOpenProfile);
popupClose.addEventListener("click", handleCloseProfile);

/*formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupProfile.close();
});*/

openCardBtn.addEventListener("click", function () {
  popupProfileCard.open();
});

closeCard.addEventListener("click", function () {
  popupProfileCard.close();
});

/*const ClosePopupEsc = document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    popupImage.classList.remove("popup__open");
    popupCard.classList.remove("popup__open");
    popupProfile.classList.remove("popup__open");
  }
});*/

/*const ClosePopupImage = document.addEventListener("click", function (evt) {
  if (evt.target === popupImage) {
    popupImage.classList.remove("popup__open");
  }
});*/

/*const ClosePopupCard = document.addEventListener("click", function (evt) {
  if (evt.target === popupCard) {
    popupCard.classList.remove("popup__open");
  }
});
const ClosePopupProfile = document.addEventListener("click", function (evt) {
  if (evt.target === popupProfile) {
    popupProfile.classList.remove("popup__open");
  }
});*/

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
