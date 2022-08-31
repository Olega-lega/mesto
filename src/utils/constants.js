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