//import { template } from "./utils";
export class Card {
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
}
