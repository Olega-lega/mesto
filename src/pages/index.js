import './index.css'
// Импорты классов
import { Api } from "../components/Api.js"
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupDelete } from "../components/PopupDelete.js";
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
  configValidity,
  popupDelete,
  apiConfig,
  popupAvatar,
  formAva,
  profileAvatar,
  profileButton
} from "../utils/constants.js";

// создание экземпляров классов
// создание экземпляра класса валидации
const formCardCheckValid = new FormValidator(configValidity, formEdit);
formCardCheckValid.enableValidation();

const formAddCheckValid = new FormValidator(configValidity, formAdd);
formAddCheckValid.enableValidation();

const formAvaCheckValid = new FormValidator(configValidity, formAva);
formAvaCheckValid.enableValidation();
// экземпляр Section
const cardList = new Section ({
  renderer: (item) => {
    cardList.setItem(creatCard(item))
  }
}, ".element__cards-list");
// создание Api
const {baseUrl, token} = apiConfig
const api = new Api(
    baseUrl,
    token
)

let userId;

Promise.all([api.getInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
      userId = userData._id
      cardList.renderItems(cards)
      user.setUserInfo(userData)
      user.setUserAva(userData)
    })
    .catch((err) => {
      console.log(`возникла ошибка: ${err.status}`)
    })


// создание экземлпяра класса попап картинки
const popUpWithImg = new PopupWithImage(popupImg)
popUpWithImg.setEventListeners()
// попап подтверждения удаления
const popupDel = new PopupDelete(popupDelete)
popupDel.setEventListeners()
// создание экземпляра класса попап формы
const popupAddForm = new PopupWithForm({
  popupElement: popupAdd,
  handleFormSubmit: (data) => {
    popupAddForm.loading(true)
    api.addNewCard(data)
        .then(data => {
          cardList.reverseSetItem(creatCard(data))
          popupAddForm.close()
          // popupAddForm.removeEventListeners()
        })
        .catch((err) => {
          console.log(`возникла ошибка: ${err.status}`)
        })
        .finally(() => {
          popupAddForm.loading(false)
        })
  }
})
popupAddForm.setEventListeners()

// создание экземпляра класса пользователя
const user = new UserInfo({
  nameSelector: profileTitle,
  subSelector: prifileSubtitle,
  avatar: profileAvatar
})

// создание экземпляра класса попап редактирования
const popupEditProfile = new PopupWithForm ({
  popupElement: popupEdit,
  handleFormSubmit: (data) => {
    popupEditProfile.loading(true)
    api.setInfo(data)
        .then((data) => {
          user.setUserInfo(data);
          popupEditProfile.close();
          // popupEditProfile.removeEventListeners();
        })
        .catch((err) => {
          console.log(`возникла ошибка: ${err.status}`)
        })
        .finally(() => {
          popupEditProfile.loading(false)
        })
  }
})
popupEditProfile.setEventListeners()
//форма смены аватара
const popupAva = new PopupWithForm({
  popupElement: popupAvatar,
  handleFormSubmit: (data) => {
    popupAva.loading(true)
    api.setAva(data)
        .then(res => {
          user.setUserAva(res)
          popupAva.close()
        })
        .catch((err) => {
          console.log(`возникла ошибка: ${err.status}`)
        })
        .finally(() => {
          popupAva.loading(false)
        })
  }
})
popupAva.setEventListeners()
//функция создания карточки
const creatCard = (item) => {
  const card = new Card({
    data: item,
    handleCardClick: (name, link) => {
      popUpWithImg.open(name, link)
    },
    currentUser: userId,
    deleteButtonClick: () => {
      popupDel.open()
      popupDel.submitDelete(() => {
        api.deleteCard(item._id)
            .then(() => {
              card.deleteCard()
              popupDel.close()
            })
            .catch((err) => {
              console.log(`возникла ошибка: ${err.status}`)
            })
      })
    },
    handleToggleClick: () => {
      if (card.isLiked()) {
        api.removeLike(card._data)
            .then((res) => {
              card.toggleLike(res.likes);
            })
            .catch((err) => {
              console.log(`возникла ошибка: ${err}`)
            })
      } else {
        api.setlike(card._data)
            .then((res) => {
              card.toggleLike(res.likes);
            })
            .catch((err) => {
              console.log(`возникла ошибка: ${err}`)
            })
      }
    }
  }, "#element-template");
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
  const {name, about} = user.getUserInfo()
  nameInput.value = name;
  jobInput.value = about;
  formCardCheckValid.resetValidation();
  popupEditProfile.open()
});
// // слушатель кнопки редактирования аватара
profileButton.addEventListener('click', () => {
  formAvaCheckValid.resetValidation()
  popupAva.open()
})
