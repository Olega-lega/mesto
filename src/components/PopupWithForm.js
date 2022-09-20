import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
  constructor ({popupElement, handleFormSubmit}) {
    super(popupElement)
    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSubmit = this._form.querySelector('.popup__button-save')
  }
  _getInputValues(){
    this._inputList = this._form.querySelectorAll('.popup__input');

    // создаём пустой объект
    this._formValues = {};
  
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  }
  _submitForm = (e) => {
    e.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }
  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm);
  }
  _removeEventListeners() {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._submitForm);
  }
  close() {
    super.close();
    this._form.reset();
  }
}