const selectors = {
  popupEdit: ".popup_edit",
  buttonEdit: ".profile__button-edit",
  formEdit: ".popup__form_edit",
  nameInput: ".popup__input-name",
  jobInput: ".popup__input-activity",
  popupAdd: ".popup_add",
  formAdd: ".popup__form_add",
  buttonAdd: ".profile__button-add",
  popupImg: ".popup_img",
  imgPopup: ".popup__object-picture",
  profileTitle: ".profile__title",
  prifileSubtitle: ".profile__subtitle",
  popupDelete: ".popup_delete",
  popupAvatar: ".popup_avatar",
  formAva: ".popup__form_avatar",
  profileAvatar: ".profile__image",
  profileButton: ".profile__pencel"
};

export const popupEdit = document.querySelector(selectors.popupEdit);
export const buttonEdit = document.querySelector(selectors.buttonEdit);
export const formEdit = popupEdit.querySelector(selectors.formEdit);
export const nameInput = popupEdit.querySelector(selectors.nameInput);
export const jobInput = popupEdit.querySelector(selectors.jobInput);
export const popupAdd = document.querySelector(selectors.popupAdd);
export const formAdd = popupAdd.querySelector(selectors.formAdd);
export const buttonAdd = document.querySelector(selectors.buttonAdd);
export const popupImg = document.querySelector(selectors.popupImg);
export const profileTitle = document.querySelector(selectors.profileTitle);
export const prifileSubtitle = document.querySelector(selectors.prifileSubtitle);
export const popupDelete = document.querySelector(selectors.popupDelete);
export const popupAvatar = document.querySelector(selectors.popupAvatar)
export const formAva = document.querySelector(selectors.formAva);
export const profileAvatar = document.querySelector(selectors.profileAvatar)
export const profileButton = document.querySelector(selectors.profileButton)

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const configValidity = {
  form: ".popup__form",
  input: ".popup__input",
  inputError: "popup__input_type_error",
  button: ".popup__button-save",
  buttonDisabled: "popup__button-save_disabled",
};

export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-50',
  token: '7f9ed849-91dd-461f-a1ba-4d8a8f634854'
}