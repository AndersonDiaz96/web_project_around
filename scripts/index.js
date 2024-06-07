//import Card from "./Card";

const popupProfile = document.querySelector("#popupaddprofile");
const popupCard = document.querySelector("#popupaddimage");
const popupImage = document.querySelector("#popupimageopen");
const profileButton = document.querySelector(".profile__edit-button");
const openCardBtn = document.querySelector(".profile__add-button");
const popupClose = document.querySelector(".popup__close");
const closeCard = document.querySelector("#closecard");
const closeImg = document.querySelector(".closeimage");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const inputName = document.querySelector("#input-name");
const inputJob = document.querySelector("#input-about");
const formProfile = document.querySelector(".popup__container");
const formButton = document.querySelector(".popup__button");
const formCreateBtn = document.querySelector("#formCreateBtn");
const template = document.querySelector(".elements__template");
const cardArea = document.querySelector(".elements");
const formCard = document.querySelector(".cardsave");
const inputImage = document.querySelector("#input-image");
const inputTitle = document.querySelector("#input-title");
const elementImage = document.querySelector(".elements__image");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
/*import {
  initialCards,
  popupProfile,
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
} from "./utils"; */
//prueba
class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
  }

  getTemplate() {
    return template.cloneNode(true).content.querySelector(".elements__card");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".elements__image");
    this._cardTitle = this._card.querySelector(".elements__title");
    this._btnDelete = this._card.querySelector(".elements__trash");
    this._btnLike = this._card.querySelector(".elements__heart");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
  }

  generatorCard() {
    this.getTemplate();
    this.setProperties();
    this.handleEvents();
    return this._card;
  }

  handlelike() {
    this._btnLike.classList.toggle("elements__heart-active");
  }

  handleDelete() {
    this._card.remove();
  }

  handleEvents() {
    this._btnLike.addEventListener("click", () => {
      this.handlelike();
    });

    this._btnDelete.addEventListener("click", () => {
      this.handleDelete();
    });

    this._cardImage.addEventListener("click", () => {
      openImagePopup(this._link, this._name);
    });
  }

  /*handleOpenPopup() {
    this._imgPop = document.querySelector(".popup__image");
    this._imgTitle = document.querySelector(".popup__image-title");
    this._imgPop.src = this._link;
    this._imgPop.alt = this._name;
    this._imgTitle.textContent = this._name;
    popupImage.classList.add("popup__open");
  }
  handleClosePopup() {
    this._imgClose = document.querySelector("#closeimage");
    this._imgClose.addEventListener("click", () => {
      popupImage.classList.remove("popup__open");
    });
  }*/
}

function openImagePopup(link, name) {
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

formCreateBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const cardImageNew = inputTitle.value;
  const cardTitleNew = inputImage.value;
  const CreateCard = new Card(cardImageNew, cardTitleNew);
  const cardToAdd = CreateCard.generatorCard();
  cardArea.prepend(cardToAdd);
  popupCard.classList.remove("popup__open");
});

function HandleOpenProfile(evt) {
  popupProfile.classList.add("popup__open");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function HandleCloseProfile(evt) {
  popupProfile.classList.remove("popup__open");
}
profileButton.addEventListener("click", HandleOpenProfile);
popupClose.addEventListener("click", HandleCloseProfile);

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  HandleCloseProfile();
});

openCardBtn.addEventListener("click", function () {
  popupCard.classList.add("popup__open");
});

closeCard.addEventListener("click", function () {
  popupCard.classList.remove("popup__open");
});

const ClosePopupEsc = document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    popupImage.classList.remove("popup__open");
    popupCard.classList.remove("popup__open");
    popupProfile.classList.remove("popup__open");
  }
});

const ClosePopupImage = document.addEventListener("click", function (evt) {
  if (evt.target === popupImage) {
    popupImage.classList.remove("popup__open");
  }
});

const ClosePopupCard = document.addEventListener("click", function (evt) {
  if (evt.target === popupCard) {
    popupCard.classList.remove("popup__open");
  }
});
const ClosePopupProfile = document.addEventListener("click", function (evt) {
  if (evt.target === popupProfile) {
    popupProfile.classList.remove("popup__open");
  }
});
