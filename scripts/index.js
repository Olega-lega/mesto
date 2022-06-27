const popupElement = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__button-popup-creat');
const popupClose = popupElement.querySelector('.popup__button-close');

const openPopupElement = function() {
  popupElement.classList.add('popup_open');
  console.log('open popup clicked');
}

const closePopupElement = function() {
  popupElement.classList.remove('popup_open');
  console.log('close popup clicked');
}

popupOpen.addEventListener ('click', openPopupElement);

popupClose.addEventListener ('click', closePopupElement);