const popupProfile = document.querySelector("#popupaddprofile");
const popupCard = document.querySelector("#popupaddimage");
const popupImage = document.querySelector("#popupimageopen");
const profileButton = document.querySelector(".profile__edit-button");
const OpenCardBtn = document.querySelector(".profile__add-button");
const popupClose = document.querySelector(".popup__close");
const CloseCard = document.querySelector("#closecard");
const CloseImg = document.querySelector(".closeimage");
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

function cardGenerator(name, link) {
  const card = template
    .cloneNode(true)
    .content.querySelector(".elements__card");
  const cardImage = card.querySelector(".elements__image");
  const cardTitle = card.querySelector(".elements__title");
  const btnDelete = card.querySelector(".elements__trash");
  const btnLike = card.querySelector(".elements__heart");
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("elements__heart-active");
  });

  btnDelete.addEventListener("click", function () {
    card.remove();
  });

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  inputImage.src = link;
  inputTitle.textContent = name;

  return card;
}

initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
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

OpenCardBtn.addEventListener("click", function () {
  popupCard.classList.add("popup__open");
});

CloseCard.addEventListener("click", function () {
  popupCard.classList.remove("popup__open");
});

formCreateBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const titleNewCard = inputTitle.value;
  const imageNewCard = inputImage.value;
  const cardToAdd = cardGenerator(titleNewCard, imageNewCard);
  cardArea.prepend(cardToAdd);
  popupCard.classList.remove("popup__open");
});

/*function cardClone(subtitle, linkImg) {
  const imgPop = document.querySelector(".popup__image");
  const imgTitle = document.querySelector(".popup__image-title");
  imgPop.src =*/
