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
  constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
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
  this._element.querySelector(".element__cards-title").textContent = this._name;
  this._element.querySelector(".element__cards-img").src = this._link;
  this._element.querySelector(".element__cards-img").alt = this._name;

  return this._element;
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, "#element-template");
  const cardElement = card.generateCard();

  document.querySelector(".element__cards-list").append(cardElement)
})