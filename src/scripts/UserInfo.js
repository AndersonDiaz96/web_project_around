export default class UserInfo {
  constructor({ name, about, userId }) {
    this._name = name;
    this._about = about;
    this._userId = userId;
    this.profileName = document.querySelector(".profile__name");
    this.profileJob = document.querySelector(".profile__job");
    this.avatar = document.querySelector(".profile__avatar");
  }
  getUserInfo() {
    return {
      name: this.profileName.textContent,
      about: this.profileJob.textContent,
    };
  }
  setUserInfo(data) {
    console.log("que es avatar?", this.avatar);
    console.log("trae a avatar data?", data);
    this._name = data.name;
    this._about = data.about;
    this._userId = data._id;
    this.avatar.src = data.avatar;
    this.profileName.textContent = data.name;
    this.profileJob.textContent = data.about;
  }
}
