export class Popup {
  constructor(popupElement) {
    this._popup = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this)
  }
  open() {
   this._popup.classList.add("popup_open");
   document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  _handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close()
    }
  }
  _buttonClose = () => {
    this.close()
  }
  setEventListeners() {
    this._closeButton = this._popup.querySelector('.popup__button-close');
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
    this._closeButton.addEventListener('click',  this._buttonClose);
  }
  _removeEventListeners() {
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
    this._closeButton.removeEventListener('click', this._buttonClose);
  }
}