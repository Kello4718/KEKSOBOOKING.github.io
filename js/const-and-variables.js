// Константы

const LAT_TOKYO = 35.68951;
const LNG_TOKYO = 139.69171;
const MAP_SCALE = 10;
const MAIN_ICON_ANCHOR_X = 26;
const MAIN_ICON_ANCHOR_Y = 52;
const MAIN_ICON_SIZE_X = 52;
const MAIN_ICON_SIZE_Y = 52;
const NORMAL_ICON_ANCHOR_X = 20;
const NORMAL_ICON_ANCHOR_Y = 40;
const NORMAL_ICON_SIZE_X = 40;
const NORMAL_ICON_SIZE_Y = 40;
const TOTAL_OFFERS = 10;
const URL_PULL = 'https://23.javascript.pages.academy/keksobooking/data';
const URL_PUSH = 'https://23.javascript.pages.academy/keksobooking';
const DEFAULT_VALUE = 'any';
const TIME_TWELVE = '12:00';
const TIME_THIRTEEN = '13:00';
const TIME_THOURTEEN = '14:00';
const CACHED_DATA = [];
const TYPE_AND_PRICE = {
  'bungalo': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const PRICE_CATEGORIES = {
  low: [0, 10000],
  middle: [10000, 50000],
  high: [50000, Infinity],
};
const FILE_TYPES = ['jpeg', 'jpg', 'png', 'webp', 'svg'];

// Переменные

const errorMessageBlock = document.createElement('div');

const normalMarkerIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [NORMAL_ICON_SIZE_X, NORMAL_ICON_SIZE_Y],
  iconAnchor: [NORMAL_ICON_ANCHOR_X, NORMAL_ICON_ANCHOR_Y],
});

const mainMarkerIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [MAIN_ICON_SIZE_X, MAIN_ICON_SIZE_Y],
  iconAnchor: [MAIN_ICON_ANCHOR_X, MAIN_ICON_ANCHOR_Y],
});

// Переменные отвечающие за поиск элемента

const body = document.querySelector('body');
const map = body.querySelector('.map');
const mapCanvas = map.querySelector('.map__canvas');
const mapFilters = map.querySelector('.map__filters');
const fieldsetMapFilters = mapFilters.querySelector('fieldset');
const selectsMapFilters = mapFilters.querySelectorAll('select');
const inputsMapFilters = mapFilters.querySelectorAll('input');
const adForm = body.querySelector('.ad-form');
const usersAvatar = adForm.querySelector('.ad-form-header__img');
const inputFileUsersAvatar = adForm.querySelector('.ad-form-header__input');
const fieldsetsAdForm = adForm.querySelectorAll('fieldset');
const inputAddressForm = adForm.querySelector('#address');
const inputTitleForm = adForm.querySelector('#title');
const inputPriceForm = adForm.querySelector('#price');
const selectTypeForm = adForm.querySelector('#type');
const selectRoomsForm = adForm.querySelector('#room_number');
const selectCapacityForm = adForm.querySelector('#capacity');
const selectCheckInForm = adForm.querySelector('#timein');
const selectCheckOutForm = adForm.querySelector('#timeout');
const inputFilePhotosOffer = adForm.querySelector('#images');
const adFormPhoto = adForm.querySelector('.ad-form__img');
const resetButtonForm = adForm.querySelector('.ad-form__reset');
const successPopup = body.querySelector('#success').content.querySelector('.success');
const successPopupContent = successPopup.cloneNode(true);
const errorPopup = body.querySelector('#error').content.querySelector('.error');
const errorPopupContent = errorPopup.cloneNode(true);
const errorButton = errorPopup.querySelector('.error__button');

export {inputFilePhotosOffer, adFormPhoto, FILE_TYPES, usersAvatar, inputFileUsersAvatar, TIME_THIRTEEN, TIME_TWELVE, TIME_THOURTEEN, errorButton, errorPopupContent, successPopupContent, PRICE_CATEGORIES, DEFAULT_VALUE, inputsMapFilters, mainMarkerIcon, normalMarkerIcon, CACHED_DATA, errorMessageBlock, TYPE_AND_PRICE, LNG_TOKYO, LAT_TOKYO, MAP_SCALE, MAIN_ICON_SIZE_Y, MAIN_ICON_SIZE_X, MAIN_ICON_ANCHOR_Y, MAIN_ICON_ANCHOR_X, NORMAL_ICON_ANCHOR_X, NORMAL_ICON_ANCHOR_Y, NORMAL_ICON_SIZE_X, NORMAL_ICON_SIZE_Y, TOTAL_OFFERS, URL_PULL, URL_PUSH, body, map, mapCanvas, mapFilters, adForm, inputAddressForm, resetButtonForm, successPopup, errorPopup, fieldsetsAdForm, selectsMapFilters, inputTitleForm, inputPriceForm, selectTypeForm, selectRoomsForm, selectCapacityForm, selectCheckInForm, selectCheckOutForm, fieldsetMapFilters};
