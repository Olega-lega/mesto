export const configValidity = {
  form: '.popup__form',
  input: '.popup__input',
  inputError: 'popup__input_type_error',
  button: '.popup__button-save',
  buttonDisabled: 'popup__button-save_disabled',
}

export class Validate {
  constructor(validationData, formSelector){
  this._formSelector = formSelector;
  this._validationData = validationData;
  this._inputList = Array.from(
  this._formSelector.querySelectorAll(this._validationData.input))
  this._button = this._formSelector.querySelector(this._validationData.button);
  }
  //включаем валидацию для форм
  _showFieldError(input) {
    const span = this._formSelector.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
}

_hideInputError(input) {
    const span = this._formSelector.querySelector(`.${input.id}-error`);
    span.textContent = '';
}

_setError(input) {
// проверяем поля ввода на валидность
  if (input.validity.valid) {
    input.classList.remove(this._validationData.inputError);
     } else {
      input.classList.add(this._validationData.inputError);
     }
}

_isValid(input) {
    if (!input.validity.valid) {
        this._showFieldError(input);
    } else {
        this._hideInputError(input);
    }
}

_hasInvalidInput() {
  return this._inputList.some((inputElement) => {
    return !inputElement.checkValidity();
  });
}


_setSubmitButtonState() {
  if (this._hasInvalidInput()) {
    this._button.setAttribute('disabled', true);
    this._button.classList.add(this._validationData.buttonDisabled);
  } else {
    this._button.removeAttribute('disabled');
    this._button.classList.remove(this._validationData.buttonDisabled);
  }
}

_handleFormInput() { 
  this._setSubmitButtonState();
  // this._setError()

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._isValid(inputElement);
      this._setError(inputElement);
      this._setSubmitButtonState();
      });
    });
}
//включаем валидацию для форм
enableValidation() { 
  this._handleFormInput();
}
}