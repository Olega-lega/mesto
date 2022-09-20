export class UserInfo {
  constructor ({nameSelector, subSelector, avatar}) {
    this._userName = nameSelector;
    this._aboutInfo = subSelector;
    this._avatar = avatar;
  }
  getUserInfo() {
    return {
    name: this._userName.textContent,
    about: this._aboutInfo.textContent
    }
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._aboutInfo.textContent = data.about;
    this._avatar.src = data.avatar
  }
  setUserAva(data) {
    this._avatar.src = data.avatar
  }
}