const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]

class Card {
  constructor(data, templateSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._handleCardClick =  handleCardClick;
  }
  // метдот создания шаблона
  _getTemplate() {
    const elementTempalte = document
    .querySelector(this._templateSelector)
    .content
    .querySelector(".element__cards-item")
    .cloneNode(true);

    return elementTempalte
  }
// добавим данные в разметку
  generateCard() {
  this._element = this._getTemplate();
  this._image = this._element.querySelector(".element__cards-img")
  this._setEventListners()

  this._element.querySelector(".element__cards-title").textContent = this._name;
  this._image.src = this._link;
  this._image.alt = this._name;

  return this._element;
  }
// добавим слушатель удаления карточки
  _setEventListners() {
    this._element.querySelector(".element__button-delete").addEventListener('click', () => {
      this._deleteCard();
    })
    this._element.querySelector(".element__button").addEventListener("click", (evt) => {
      this._likeCard(evt)
    })
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link)
    })
  }
  // метод удаления карточки
  _deleteCard = () => {
    this._element.remove()
  }
  // метод кнопки лайк
  _likeCard = (evt) => {
      evt.target.classList.toggle("element__buton_active")
  }
}