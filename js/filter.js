import {CACHED_DATA, inputsMapFilters, PRICE_CATEGORIES, selectsMapFilters, TOTAL_OFFERS} from './const-and-variables.js';
import {toRenderOffersFromCache} from './map.js';
import {debounce, isInRange} from './utils.js';

// Функция, отвечающая за фильтрацию объявлений

const toFilterData = () => {

  // Функция, которая собирает массив из выбранных значений удобств

  const toGetInputsValues = () => {
    const featuresArray = [];
    inputsMapFilters.forEach((filter) => {
      const value = filter.getAttribute('value');
      if (filter.checked) {
        featuresArray.push(value);
      }
    });
    return featuresArray;
  };

  // Функция, которая собирает массив из выбранных значений различных типов

  const toGetSelectsValues = () => {
    const selectsValues = {};
    selectsMapFilters.forEach((select) => {
      const name = select.getAttribute('name');
      const value = select.value;
      if (value !== 'any') {
        selectsValues[name] = value;
      }
    });
    return selectsValues;
  };

  // Вызов этих функций

  const featuresList = toGetInputsValues();
  const optionsList = toGetSelectsValues();

  // Фильтруем предложения

  const filteredDataArray = CACHED_DATA.filter((item) => {
    if (featuresList.length > 0 && (!item.offer.features || item.offer.features.length === 0)) {
      return false;
    }
    for (const feature of featuresList) {
      if (!item.offer.features.includes(feature)) {
        return false;
      }
    }
    if (optionsList['housing-type'] && optionsList['housing-type'] !== item.offer.type) {
      return false;
    }
    if (optionsList['housing-rooms'] && +optionsList['housing-rooms'] !== +item.offer.rooms) {
      return false;
    }
    if (optionsList['housing-guests'] && +optionsList['housing-guests'] !== +item.offer.guests) {
      return false;
    }
    return !(optionsList['housing-price'] && !isInRange(+item.offer.price, PRICE_CATEGORIES[optionsList['housing-price']]));
  });

  // Сортируем

  const sortedDataArray = filteredDataArray.sort((left, right) => {
    if (left.offer.features && right.offer.features) {
      return left.offer.features.length - right.offer.features.length;
    }
    return 0;
  });

  return sortedDataArray.slice(0, TOTAL_OFFERS);
};

// Функция, которая добавляет обработчики событий на поля фильтраций

const toSetFilterChangeHandler = () => {
  inputsMapFilters.forEach((input) => {
    input.addEventListener('change', debounce(() => toRenderOffersFromCache(TOTAL_OFFERS)));
  });

  selectsMapFilters.forEach((select) => {
    select.addEventListener('change', debounce(() => toRenderOffersFromCache(TOTAL_OFFERS)));
  });
};

export {toFilterData, toSetFilterChangeHandler};
