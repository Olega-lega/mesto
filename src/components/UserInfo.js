export class UserInfo {
  constructor ({nameSelector, subSelector, avatar}) {
    this._userName = nameSelector;
    this._aboutInfo = subSelector;
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo() {
    return {
    name: this._userName.textContent,
    activity: this._aboutInfo.textContent
    }
  }
  setUserInfo(name, activity) {
    this._userName.textContent = name;
    this._aboutInfo.textContent = activity;
  }
  setUserAva(data) {
    this._avatar.src = data.avatar
  }
}