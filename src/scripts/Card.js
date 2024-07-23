import { template } from "./utils.js";

export class Card {
  constructor(cardData, handleClick, userId, handleAddLike, handleRemoveLike) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._card = this.getTemplate();
    this._handleClick = handleClick;
    this._likes = cardData.likes;
    this.userId = userId;
    this.owner = cardData.owner;
    this.handleAddLike = handleAddLike;
    this.handleRemoveLike = handleRemoveLike;
    this._id = cardData._id;
  }

  getTemplate() {
    return template.cloneNode(true).content.querySelector(".elements__card");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".elements__image");
    this._cardTitle = this._card.querySelector(".elements__title");
    this._btnDelete = this._card.querySelector(".elements__trash");

    if (this.owner._id !== this.userId) {
      this._btnDelete.remove();
    }
    this._btnLike = this._card.querySelector(".elements__heart");
    this.likesCounter = this._card.querySelector(".elements__likes");
    if (this._likes.some((like) => like._id === this.userId)) {
      this._btnLike.classList.toggle("elements__heart-active");
    }

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this.likesCounter.textContent = this._likes.length;
  }

  generatorCard() {
    this.getTemplate();
    this.setProperties();
    this.handleEvents();
    return this._card;
  }

  handlelike() {
    const hasUserLiked = this._likes.some((like) => like._id === this.userId);
    console.log("que es esto?", hasUserLiked);
    if (hasUserLiked) {
      this.handleRemoveLike(this._id).then((response) => {
        this._likes = response.likes;
        this.likesCounter.textContent = response.likes.length;
        console.log("prueba 1");
      });
      this._btnLike.classList.toggle("elements__heart-active");
    } else {
      this.handleAddLike(this._id).then((response) => {
        this._likes = response.likes;
        this.likesCounter.textContent = response.likes.length;
        console.log("prueba 2");
        this._btnLike.classList.toggle("elements__heart-active");
      });
    }
  }

  handleDelete() {
    this._card.remove();
  }

  handleEvents() {
    this._btnLike.addEventListener("click", () => {
      this.handlelike();
    });

    /*this._btnDelete.addEventListener("click", () => {
      this.handleDelete();
    });*/

    this._cardImage.addEventListener("click", () => {
      this._handleClick(this._link, this._name);
    });
  }
}
