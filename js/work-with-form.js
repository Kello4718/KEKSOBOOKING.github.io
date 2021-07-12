import {fieldsetMapFilters, inputTitleForm, selectCheckOutForm, selectCheckInForm, selectCapacityForm, selectRoomsForm, inputPriceForm, selectTypeForm, TYPE_AND_PRICE, adForm, mapFilters, fieldsetsAdForm, selectsMapFilters, inputAddressForm, LAT_TOKYO, LNG_TOKYO, resetButtonForm, TIME_THIRTEEN, TIME_THOURTEEN, TIME_TWELVE, usersAvatar, adFormPhoto} from './const-and-variables.js';
import {toGenerateMarkers, toGiveLocationMainMarker} from './map.js';
import {toSetDisabledValue} from './utils.js';

// Функция делающая форму активной

const toActivateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  for (const fieldsetAdForm of fieldsetsAdForm) {
    fieldsetAdForm.removeAttribute('disabled');
  }
  fieldsetMapFilters.removeAttribute('disabled');
  for (const selectMapFilters of selectsMapFilters) {
    selectMapFilters.removeAttribute('disabled');
  }
};

// Функция делающая карту неактивной

const toDisableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  for (const fieldsetAdForm of fieldsetsAdForm) {
    fieldsetAdForm.setAttribute('disabled', 'true');
  }
  fieldsetMapFilters.setAttribute('disabled', 'true');
  for (const selectMapFilters of selectsMapFilters) {
    selectMapFilters.setAttribute('disabled', 'true');
  }
};

// Функция для синхронизации типа жилья и соотвествующей цены к нему

const toSetPriceForType = () => {
  const minPrice = TYPE_AND_PRICE[selectTypeForm.value];
  inputPriceForm.min = minPrice;
  inputPriceForm.placeholder = minPrice;
};

// Функция, которая синхронизирует количество комнат с количеством гостей

const toGiveRoomsForGuests = () => {
  switch (selectRoomsForm.value) {
    case '1' :
      toSetDisabledValue(selectCapacityForm, ['0', '2', '3']);
      selectCapacityForm[0].selected = true;
      break;
    case '2' :
      toSetDisabledValue(selectCapacityForm, ['0', '3']);
      selectCapacityForm[1].selected = true;
      break;
    case '3' :
      toSetDisabledValue(selectCapacityForm, ['0']);
      selectCapacityForm[2].selected = true;
      break;
    case '100' :
      toSetDisabledValue(selectCapacityForm, ['1', '2', '3']);
      selectCapacityForm[3].selected = true;
      break;
  }
};

// Функция для синхронизации времени въезда и выезда

const toSelectCheckOut = () => {
  switch (selectCheckInForm.value) {
    case TIME_TWELVE : return selectCheckOutForm[0].selected = true;
    case TIME_THIRTEEN : return selectCheckOutForm[1].selected = true;
    case TIME_THOURTEEN : return selectCheckOutForm[2].selected = true;
  }
};

// Функция для синхронизации времени выезда и въезда

const toSelectCheckIn = () => {
  switch (selectCheckOutForm.value) {
    case TIME_TWELVE : return selectCheckInForm[0].selected = true;
    case TIME_THIRTEEN : return selectCheckInForm[1].selected = true;
    case TIME_THOURTEEN : return selectCheckInForm[2].selected = true;
  }
};

// Функция, которая проверяет валидность формы

const toCheckValidForm = () => {
  inputTitleForm.addEventListener('input', () => inputTitleForm.reportValidity());
  inputPriceForm.addEventListener('input', () => inputPriceForm.reportValidity());
  selectTypeForm.addEventListener('change', toSetPriceForType);
  selectRoomsForm.addEventListener('change', toGiveRoomsForGuests);
  selectCheckInForm.addEventListener('change', toSelectCheckOut);
  selectCheckOutForm.addEventListener('change', toSelectCheckIn);
};

// Функция, которая добавляет необходимые атрибуты полю ввода адреса

const toSetDefaultPropertyAddress = () => {
  inputAddressForm.value = `${LAT_TOKYO}, ${LNG_TOKYO}`;
  inputAddressForm.readOnly = true;
};

toSetDefaultPropertyAddress();

// Функция сброса

const toReset = () => {
  adForm.reset();
  mapFilters.reset();
  usersAvatar.src = 'img/muffin-grey.svg';
  adFormPhoto.src = '';
  adFormPhoto.alt = '';
  toGiveLocationMainMarker();
  toSetDefaultPropertyAddress();
  toGenerateMarkers();
};

// Обработчик событий на кнопку сброса

const toResetByClickForButton = () => {
  resetButtonForm.addEventListener('click', (evt) => {
    evt.preventDefault();
    toReset();
  });
};

toResetByClickForButton();

export {toCheckValidForm, toReset, toDisableForm, toActivateForm, toResetByClickForButton, toSetDefaultPropertyAddress};
