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
  imgOpen: ".popup__object-picture",
  imgTitle: ".popup__img-title",
  imgPopup: ".popup__object-picture",
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__subtitle",
  list: ".element__cards-list",
  elementTempalte: "#element-template",
  item: ".element__cards-item",
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
const imgOpen = popupImg.querySelector(selectors.imgOpen);
const imgPopupTitle = popupImg.querySelector(selectors.imgTitle);
const profileTitle = document.querySelector(selectors.profileTitle);
const profileSubtitle = document.querySelector(selectors.profileSubtitle);
const elementCardsList = document.querySelector(selectors.list);
const elementTempalte = document.querySelector(selectors.elementTempalte).content;
const elementCardsItem = elementTempalte.querySelector(selectors.item);

// oткрытиие попапа
function openPopup(popupElement) {
  popupElement.classList.add("popup_open");
  // слушатель добавления закрытия попав по нажатию 'Esc'
  document.addEventListener('keydown', closeOnEscListener);
}
// закрытие попапа
function closePopup(popupElement) {
  popupElement.classList.remove("popup_open");
    // слушатель удаления закрытия попав по нажатию 'Esc'
  document.removeEventListener('keydown', closeOnEscListener);
}
// функция закрытия попапов
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__button-close") || (evt.target === evt.currentTarget)) {
      closePopup(popup);
    }
  });
});
// фкнкция добавления закрытия попапов по нажатию 'Esc'
function closeOnEscListener(evt) {
  if (evt.key === "Escape") {
    popups.forEach((popup) => {
      closePopup(popup)
    })
  }
}
// слушатель кнопки редактировать
buttonEdit.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});
// слушатель сохранения формы
formEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(nameInput.value);
  console.log(jobInput.value);
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
});
// слушатель открытия кнопки добавления
buttonAdd.addEventListener("click", () => {
  openPopup(popupAdd);
});
// Создание шаблона
function creatCard(element) {
  const card = elementCardsItem.cloneNode(true);
  const name = card.querySelector(".element__cards-title");
  name.textContent = element.name;
  const img = card.querySelector(".element__cards-img");
  img.src = element.link;
  img.alt = element.name;
  // слушатель открытия попап с картинкой
  img.addEventListener("click", function () {
    imgOpen.src = element.link;
    imgOpen.alt = element.name;
    imgPopupTitle.textContent = element.name;
    openPopup(popupImg);
  });
  // слушатель кнопки лайк
  card.querySelector(".element__button").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__buton_active");
  });
  // слушатель кнопки удаления
  card.querySelector(".element__button-delete").addEventListener("click", (evt) => {
      evt.target.closest(".element__cards-item").remove();
    });
  return card;
}
// Создание карточек при открытии сайта с помощью массива
initialCards.forEach(function (element) {
  const cardDefault = creatCard(element);
  elementCardsList.append(cardDefault);
});
// слушатель добавление карточки
formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = creatCard({
    name: placeInput.value,
    link: imgInput.value,
  });
  elementCardsList.prepend(newCard);
  closePopup(popupAdd);
  formAdd.reset();
  formAdd.querySelector('.popup__button-add').setAttribute('disabled', true)
  formAdd.querySelector('.popup__button-add').classList.add('popup__button-save_disabled')
});