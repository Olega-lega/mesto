const selectors = {
  popup: ".popup",
  popupEdit: ".popup_edit",
  buttonEdit: ".profile__button-edit",
  formEdit: ".popup__form_edit",
  nameInput: ".popup__input-name",
  jobInput: ".popup__input-activity",
  popupAdd: ".popup_add",
  formAdd: ".popup__form_add",
  buttonAdd: ".profile__button-add",
  placeInput: ".popup__input-place",
  imgInput: ".popup__input-img",
  popupImg: ".popup_img",
  imgPopup: ".popup__object-picture",
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__subtitle",
  list: ".element__cards-list",
};

const popups = document.querySelectorAll(selectors.popup);
const popupEdit = document.querySelector(selectors.popupEdit);
const buttonEdit = document.querySelector(selectors.buttonEdit);
const formEdit = popupEdit.querySelector(selectors.formEdit);
const nameInput = popupEdit.querySelector(selectors.nameInput);
const jobInput = popupEdit.querySelector(selectors.jobInput);
const popupAdd = document.querySelector(selectors.popupAdd);
const formAdd = popupAdd.querySelector(selectors.formAdd);
const buttonAdd = document.querySelector(selectors.buttonAdd);
const placeInput = popupAdd.querySelector(selectors.placeInput);
const imgInput = popupAdd.querySelector(selectors.imgInput);
const popupImg = document.querySelector(selectors.popupImg);
const profileTitle = document.querySelector(selectors.profileTitle);
const profileSubtitle = document.querySelector(selectors.profileSubtitle);
const elementCardsList = document.querySelector(selectors.list);
// Импорты классов
import {Card, initialCards} from "./Card.js";
import {FormValidator, configValidity} from "./FormValidator.js";
import {Section} from "./Section.js"
import {PopupWithImage} from "./PopupWithImage.js"
// создание экземпляров классов
// экземпляр Section
const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    cardList.setItem(creatCard(item))
  }
}, ".element__cards-list");
cardList.renderItems()
// создание экземпляра класса валидации
const formCardCheckValid = new FormValidator(configValidity, formEdit);
formCardCheckValid.enableValidation();
const formAddCheckValid = new FormValidator(configValidity, formAdd);
formAddCheckValid.enableValidation();
// создание экземлпяра класса попап картинки
const popUpWithImg = new PopupWithImage(popupImg)
popUpWithImg.setEventListeners()
// создание экземпляра класса попап формы

// слушатель кнопки редактировать
buttonEdit.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  formCardCheckValid.resetValidation();
  openPopup(popupEdit);
});
//функция создания карточки
function creatCard(item) {
  const card = new Card({data: item, handleCardClick: (name, link) => {
    popUpWithImg.open(name, link)
  }}, "#element-template");
  const cardElement = card.generateCard();
  return cardElement;
}

// слушатели
// слушатель добавления краточки
formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: imgInput.value,
  };
  const card = creatCard(newCard);
  elementCardsList.prepend(card);
  closePopup(popupAdd);
  formAdd.reset();
});
// слушатель открытия кнопки добавления
buttonAdd.addEventListener("click", () => {
  openPopup(popupAdd);
  formAdd.reset();
  formAddCheckValid.resetValidation();
});
// слушатель сохранения формы
formEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
});