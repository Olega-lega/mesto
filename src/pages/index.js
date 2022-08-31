import './index.css'
// Импорты классов
import { Card, initialCards } from "../components/Card.js";
import { FormValidator, configValidity } from "../components/FormValidator.js";
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
cardList.renderItems()

// создание экземлпяра класса попап картинки
const popUpWithImg = new PopupWithImage(popupImg)
popUpWithImg.setEventListeners()

// создание экземпляра класса попап формы
const popupAddForm = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (data) => {
    cardList.setItem(creatCard({
      name: data.text,
      link: data.source,
      alt: data.text
    }
)
    )
    popupAddForm.close()
  }
})
  popupAddForm.setEventListeners()
  // создание экземпляра класса пользователя
  const user = new UserInfo({
    nameSelector: ".profile__title",
    subSelector:".profile__subtitle"
  })

  // создание экземпляра класса попап редактирования
  const popupEddForm = new PopupWithForm ({
    popupSelector: popupEdit,
    handleFormSubmit: (data) => {
      user.setUserInfo(
        data.name,
         data.activity)
      popupEddForm.close()
    }
  })
  popupEddForm.setEventListeners()
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
  popupEddForm.open()
});

