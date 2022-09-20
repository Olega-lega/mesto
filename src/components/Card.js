export class Card {
  constructor(
      {data, handleCardClick, currentUser, deleteButtonClick, handleToggleClick}, templateSelector) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likeCounter = data.likes;
    this._owner = data.owner._id;
    this._currentUser = currentUser;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._deleteButtonClick = deleteButtonClick;
    this._handleToggleClick = handleToggleClick
  }
  // метдот создания шаблона
  _getTemplate() {
    const elementTempalte = document
        .querySelector(this._templateSelector)
        .content.querySelector(".element__cards-item")
        .cloneNode(true);

    return elementTempalte;
  }

  toggleLike(count) {
    this._likeCounter = count;
    this._likesNumber(count);
    this._checkLike();
  }

  _checkLike() {
    if (this.isLiked()) {
      this._element.querySelector(".element__button").classList.add('element__button_active');
    } else {
      this._element.querySelector(".element__button").classList.remove('element__button_active');
    };
  }

  _likesNumber(count) {
    this._element.querySelector(".element__button_count").textContent = count.length;
  };

  isLiked() {
    return this._likeCounter.find(user => user._id === this._currentUser)
  }
  //если мой лайк
  _LikedByMe() {
    this._likeCounter.forEach((likeOwner) => {
      if (likeOwner._id === this._currentUser) {
        this._element
            .querySelector(".element__button")
            .classList.add("element__button_active");
      }
    });
  }

  // добавим данные в разметку
  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".element__cards-img");
    this._element.querySelector('.element__button_count').textContent = this._likeCounter.length

    this._element.querySelector(".element__cards-title").textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setEventListners();
    this._LikedByMe()

    if (this._owner === this._currentUser) {
      this._element.querySelector('.element__button-delete').classList.remove('element__button-delete_hide')
    }
    return this._element;
  }
  // добавим слушатель удаления карточки
  _setEventListners() {
    // метод удаления карточки
    this._element.querySelector(".element__button-delete").addEventListener('click', (e) => {
      this._deleteButtonClick();
    });
    //лайк карточки
    this._element.querySelector('.element__button').addEventListener('click', () => {
      this._handleToggleClick(this)
    })
    // открытие попапа картинки
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }
  deleteCard() {
    this._element.remove();
  }
}