const popupElement = document.querySelector(".popup");
const popupOpen = document.querySelector(".profile__button-edit");
const popupClose = popupElement.querySelector(".popup__button-close");
let formElement = popupElement.querySelector(".popup__form");
let nameInput = formElement.querySelector("#name");
let jobInput = formElement.querySelector("#job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const openPopupElement = function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popupElement.classList.add("popup_open");
  console.log("open popup clicked");
};

const closePopupElement = function () {
  popupElement.classList.remove("popup_open");
  console.log("close popup clicked");
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  console.log(nameInput.value);
  console.log(jobInput.value);
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopupElement()
}

popupOpen.addEventListener("click", openPopupElement);
popupClose.addEventListener("click", closePopupElement);
formElement.addEventListener("submit", formSubmitHandler);
