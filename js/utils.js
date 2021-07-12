import {errorPopupContent, successPopupContent} from './const-and-variables.js';

// Функция, отвечающая за перевод значение типа жилья на русский язык

const toGetValueTypeOffer = (type) => {
  if (type === 'flat') {
    return 'Квартира';}
  else if (type === 'bungalo') {
    return 'Бунгало';}
  else if (type === 'palace') {
    return 'Дворец';}
  else {
    return 'Дом';}
};

// Функция, отвечающая за синхронизацию комнат и гостей

const toSetDisabledValue = (element, value) => {
  for (let item = 0; item < element.length; item++) {
    element[item].disabled = value.indexOf(element[item].value) > -1;
  }
};

// Функция, отвечающая за диапозон цены

const isInRange = (value, rangeArray) => value >= rangeArray[0] && value < rangeArray[1];

// Дебаунс

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  let callCounter = 0;
  let resetCallCounterId;

  return () => {
    clearTimeout(timeoutId);
    clearTimeout(resetCallCounterId);
    resetCallCounterId = setTimeout(() => callCounter = 0, timeoutDelay);
    if (callCounter === 0) {
      callback();
      callCounter++;
    } else {
      timeoutId = setTimeout(callback, timeoutDelay);
    }
  };
};

// Функция, удаляющая попап кликом в случаи успеха, а также удаляет обработчик

const toRemoveSuccessPopupByClick = () => {
  successPopupContent.remove();
  document.removeEventListener('click', toRemoveSuccessPopupByClick);
};

// Функция, удаляющая попап клавишей в случаи успеха, а также удаляет обработчик

const toRemoveSuccessPopupByKey = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    successPopupContent.remove();
    document.removeEventListener('keydown', toRemoveSuccessPopupByKey);
  }
};

// Функция, удаляющая попап кликом в случаи ошибки, а также удаляет обработчик

const toRemoveErrorPopupByClick = () => {
  errorPopupContent.remove();
  document.removeEventListener('click', toRemoveErrorPopupByClick);
};

// Функция, удаляющая попап кликом по кнопке в случаи ошибки, а также удаляет обработчик

const toRemoveErrorPopupButtonByClick = () => {
  errorPopupContent.remove();
  document.removeEventListener('click', toRemoveErrorPopupButtonByClick);
};

// Функция, удаляющая попап клавишей в случаи ошибки, а также удаляет обработчик

const toRemoveErrorPopupByKey = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    errorPopupContent.remove();
    document.removeEventListener('keydown', toRemoveErrorPopupByKey);
  }
};

export {toRemoveErrorPopupButtonByClick, toRemoveErrorPopupByKey, toRemoveErrorPopupByClick, isInRange, debounce, toGetValueTypeOffer, toSetDisabledValue, toRemoveSuccessPopupByClick, toRemoveSuccessPopupByKey};
