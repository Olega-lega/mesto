const selectors = {
  popup: '.popup',
  containerEdit: '#popup__container-edit',
  buttonEdit: '.profile__button-edit',
  buttonCloseEdit: '#close-edit',
  formEdit: '#form-edit',
  nameInput: '#name',
  jobInput: '#job',
  containerAdd: '#popup__container-add',
  buttonAdd: '.profile__button-add',
  buttonCloseAdd: '#close-add',
  formAdd: '#form-add',
  placeInput: '#place-name',
  imgInput: '#img',
  profileTitle: '.profile__title',
  profileSubtitle: '.profile__subtitle',
  list: '.element__cards-list',
  elementTempalte: '#element-template',
  item: '.element__cards-item'
}

const popup = document.querySelector(selectors.popup);
const containerEdit = popup.querySelector(selectors.containerEdit)
const buttonEdit = document.querySelector(selectors.buttonEdit);
const buttonCloseEdit = popup.querySelector(selectors. buttonCloseEdit);
const formEdit = popup.querySelector(selectors.formEdit);
const nameInput = formEdit.querySelector(selectors. nameInput);
const jobInput = formEdit.querySelector(selectors.jobInput);
const containerAdd = popup.querySelector(selectors.containerAdd)
const buttonAdd = document.querySelector(selectors.buttonAdd);
const buttonCloseAdd = popup.querySelector(selectors. buttonCloseAdd);
const formAdd = popup.querySelector(selectors.formAdd);
const placeInput = document.querySelector(selectors.placeInput);
const imgInput = document.querySelector(selectors.imgInput);
const profileTitle = document.querySelector(selectors.profileTitle);
const profileSubtitle = document.querySelector(selectors.profileSubtitle);
const elementCardsList = document.querySelector(selectors.list);
const elementTempalte = document.querySelector(selectors.elementTempalte).content;
const elementCardsItem = elementTempalte.querySelector(selectors.item);

// oткрытиие попапа
function openPopup () {
  popup.classList.add('popup_open');
  console.log('open popup clicked');
}
// закрытие попапа
function closePopup () {
  popup.classList.remove('popup_open');
  console.log('close popup clicked');
}
// слушатель кнопки редактировать
buttonEdit.addEventListener('click', () => {
  openPopup();
  openFormEdit();
});
// попап редактирования формы
function openFormEdit() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  containerEdit.classList.add('popup_active');
}
// функция закртия формы редактирования профиля
function closeFormEdit() {
  containerEdit.classList.remove('popup_active');
}
// слушатель закрытия формы редактирования профиля
buttonCloseEdit.addEventListener('click', () => {
  closePopup();
  closeFormEdit();
});
// слушатель сохранения данных
formEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(nameInput.value);
  console.log(jobInput.value);
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup()
  closeFormEdit()
});
// функция добавления карточек
function openFormAdd() {
  placeInput.value = '';
  imgInput.value = '';
  containerAdd.classList.add('popup_active');
}
// фкнция закрытия формы добавления
function closeFormAdd() {
  containerAdd.classList.remove('popup_active');
}
// слушатель открытия кнопки добавления
buttonAdd.addEventListener('click', () => {
  openPopup();
  openFormAdd();
})
// слушатель кнопки закрытия формы добавления
buttonCloseAdd.addEventListener('click', () => {
  closePopup();
  closeFormAdd();
})
//Создание шаблона
function creatCard(element) {
  const card = elementCardsItem.cloneNode(true);
  const cardName = card.querySelector('.element__cards-title');
  cardName.textContent = element.name;
  const cardImg = card.querySelector('.element__cards-img');
  cardImg.src = element.link;
  cardImg.alt = element.name;
  
   elementCardsList.append(card);
  }
  // Создание карточек при открытии сайта с помощью массива
  function creatInitialCards() {
    initialCards.forEach(creatCard)
  }
  // вызов функции
  creatInitialCards()
  // слушатель добавление карточки
  formAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newCard = {
      name: placeInput.value,
      link: imgInput.value
    }
   
    creatCard(newCard)
    closePopup ()
    closeFormAdd()
  })
// слушатель кнопки лайк
  elementCardsList.addEventListener('click', evt => {
    if (evt.target.classList.contains('element__button')) {
    evt.target.classList.toggle('element__buton_active')
    }
})
// слушатель кнопки удаления
elementCardsList.addEventListener('click', evt => {
 if (evt.target.classList.contains('element__button-delete')) {
   evt.target.closest('.element__cards-item').remove()
 }
})