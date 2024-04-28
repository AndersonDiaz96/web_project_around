const popupProfile = document.querySelector("#popupaddprofile");
const profileButton = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const inputName = document.querySelector("#input-name");
const inputJob = document.querySelector("#input-about");
const formProfile = document.querySelector(".popup__container");
const formButton = document.querySelector(".popup__button");

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
