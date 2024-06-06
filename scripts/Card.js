import { template } from "./utils";

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
  }

  generatorCard() {
    this.setProperties();
    return this._card;
  }

  handlelike() {
    this._btnLike.classList.toggle("elements__heart-active");
  }

  handleDislike() {
    this._btnLike.classList.remove("elements__heart-active");
  }

  handleDelete() {
    this._card.remove();
  }
}

/*initialCards.forEach((element) => {
  const initialCard = new Card(element.name, element.link);
});*/
