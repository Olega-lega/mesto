export class UserInfo {
  constructor ({nameSelector, subSelector}) {
    this._userName = document.querySelector(nameSelector);
    this._aboutInfo = document.querySelector(subSelector);
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
}