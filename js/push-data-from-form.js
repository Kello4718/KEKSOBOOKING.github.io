import {URL_PUSH, adForm, body, successPopupContent, errorPopupContent, errorButton} from './const-and-variables.js';
import {toRemoveErrorPopupButtonByClick, toRemoveErrorPopupByClick, toRemoveErrorPopupByKey, toRemoveSuccessPopupByClick, toRemoveSuccessPopupByKey} from './utils.js';
import {toReset} from './work-with-form.js';

// Функция, отвечающая за появление попапа в случае успешной отпраке формы

const toShowSuccessPopup = () => {
  body.append(successPopupContent);
  document.addEventListener('click', toRemoveSuccessPopupByClick);
  document.addEventListener('keydown', toRemoveSuccessPopupByKey);
};

// Функция, отвечающая за появление попапа в случае неуспешной отпраке формы

const toShowErrorPopup = () => {
  body.append(errorPopupContent);
  document.addEventListener('click', toRemoveErrorPopupByClick);
  errorButton.addEventListener('click', toRemoveErrorPopupButtonByClick);
  document.addEventListener('keydown', toRemoveErrorPopupByKey);
};

// Функция, отвечающая за отправку данных серверу

const toPushData = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    fetch(URL_PUSH,
      {
        method: 'POST',
        body: new FormData(evt.target),
      },
    ).then((response) => {
      if (response.ok) {
        toShowSuccessPopup();
        toReset();
      } else {
        toShowErrorPopup();
      }})
      .catch((error) =>{
        toShowErrorPopup(error);
      });
  });
};

export {toPushData, toShowSuccessPopup, toShowErrorPopup};
