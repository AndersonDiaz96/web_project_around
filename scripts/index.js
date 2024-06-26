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

const userInfo = new UserInfo({
  nameSelector: profileName,
  jobSelector: profileJob,
});

/*function setUserInfo() {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = job;
}*/

const popupProfile = new PopupWithForm("#popupaddprofile", (inputs) => {
  console.log("modificamos perfil");
  profileName.textContent = inputs.name;
  profileJob.textContent = inputs.job;
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

initialCards.forEach((element) => {
  const initialCard = new Card(element.name, element.link);
  const newCard = initialCard.generatorCard();
  cardArea.append(newCard);
});

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
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function handleCloseProfile(evt) {
  console.log("funciona esto?", popupProfile.close);
  popupProfile.close();
}

profileButton.addEventListener("click", handleOpenProfile);
popupClose.addEventListener("click", handleCloseProfile);

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupProfile.close();
});

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
