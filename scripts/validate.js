const configValidity = {
  form: '.popup__form',
  input: '.popup__input',
  inputError: 'popup__input_type_error',
  button: '.popup__button-save',
  buttonDisabled: 'popup__button-save_disabled',
}

//включаем валидацию для форм
function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.form));
  forms.forEach((form) => {
    form.addEventListener('input', (evt) => handleFormInput(evt, config));
  })
}

function handleFormInput(evt, config) {
  const input = evt.target;
  const form = evt.currentTarget;

  showFieldError(input, form);
  setError(form, config);
  setSubmitButtonState(form, config);
}
//создадим функцию сообщений валидации
function showFieldError(input, form) {
  const span = form.querySelector(`.${input.id}-error`);
  span.textContent = input.validationMessage;
}

function setError(form, config) {
  const inputs = form.querySelectorAll(config.input);
  inputs.forEach((input) => {
    // проверяем поля ввода на валидность
      const inputIsValid = input.checkValidity()
      if (inputIsValid) {
          input.classList.remove(config.inputError);
      } else {
          input.classList.add(config.inputError);
      }
  })
}
//сделаем переключатель для кнопки
function setSubmitButtonState (form, config) {
  const button = form.querySelector(config.button);
  // проверяем форму на валидность
  const isValid = form.checkValidity();
    if (isValid) {
        button.removeAttribute('disabled');
        button.classList.remove(config.buttonDisabled);
    }
    if (!isValid) {
        button.setAttribute('disabled', true);
        button.classList.add(config.buttonDisabled);
    }
}

enableValidation(configValidity)