import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImage = this._popup.querySelector(".popup__object-picture");
    this._popupTitle = this._popup.querySelector(".popup__img-title");
  }
  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupTitle.textContent = name;
    super.open();
  }
}