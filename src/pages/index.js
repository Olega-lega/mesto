import './index.css'
// Импорты классов
import {Api} from "../components/Api.js"
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { 
  popupEdit,
  buttonEdit,
  formEdit,
  nameInput,
  jobInput,
  popupAdd,
  formAdd,
  buttonAdd,
  popupImg,
  profileTitle,
  prifileSubtitle,
  initialCards,
  configValidity
} from "../utils/constants.js";

// создание экземпляров классов
// создание экземпляра класса валидации
const formCardCheckValid = new FormValidator(configValidity, formEdit);
formCardCheckValid.enableValidation();
const formAddCheckValid = new FormValidator(configValidity, formAdd);
formAddCheckValid.enableValidation();

// экземпляр Section
const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    cardList.setItem(creatCard(item))
  }
}, ".element__cards-list");

 // Api
 const api = new Api({
  url:'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: "7f9ed849-91dd-461f-a1ba-4d8a8f634854",
    'content-type': "application/json",
  }
})

Promise.all([api.getInfo(), api.getInitialCards()])
.then(([userData, cards]) => {
  userId = userData._id
  cardList.renderItems(cards)
  user.setUserInfo(userData.name, userData.activity)
})
.catch((err) => {
  console.log(`возникла ошибка: ${err.status}`)
})

let userId = null
// создание экземлпяра класса попап картинки
const popUpWithImg = new PopupWithImage(popupImg)
popUpWithImg.setEventListeners()

// создание экземпляра класса попап формы
const popupAddForm = new PopupWithForm({
  popupElement: popupAdd,
  handleFormSubmit: (data) => {
    cardList.setItem(creatCard({
      name: data.text,
      link: data.source,
      alt: data.text
    }
)
    )
    popupAddForm.close()
    popupAddForm.removeEventListeners()
  }
})
  popupAddForm.setEventListeners()
 
  // создание экземпляра класса пользователя
  const user = new UserInfo({
    nameSelector: profileTitle,
    subSelector: prifileSubtitle
  })

  // создание экземпляра класса попап редактирования
  const popupEditProfile = new PopupWithForm ({
    popupElement: popupEdit,
    handleFormSubmit: (data) => {
      user.setUserInfo(
        data.name,
         data.activity);
      popupEditProfile.close();
      popupEditProfile.removeEventListeners();
    }
  })
  popupEditProfile.setEventListeners()
//функция создания карточки
function creatCard(item) {
  const card = new Card({data: item, handleCardClick: (name, link) => {
    popUpWithImg.open(name, link)
  }}, "#element-template");
  const cardElement = card.generateCard();
  return cardElement;
}

// добавление слушателей
// слушатель кнопки добавления
buttonAdd.addEventListener("click", () => {
  formAddCheckValid.resetValidation();
  popupAddForm.open();
});

// слушатель кнопки редактировать
buttonEdit.addEventListener("click", () => {
  const {name, activity} = user.getUserInfo()
  nameInput.value = name;
  jobInput.value = activity;
  formCardCheckValid.resetValidation();
  popupEditProfile.open()
});

