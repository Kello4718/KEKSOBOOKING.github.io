import {toGetValueTypeOffer} from './utils.js';


// Функция, которая заполняет карточку данными с сервера

const toCreateCardWithData = (data) => {

  const cardContent = document.querySelector('#card').content.querySelector('.popup');
  const cloneCard = cardContent.cloneNode(true);
  const offerTitle = cloneCard.querySelector('.popup__title');
  const offerAddress = cloneCard.querySelector('.popup__text--address');
  const offerPrice = cloneCard.querySelector('.popup__text--price');
  const offerType = cloneCard.querySelector('.popup__type');
  const offerCapacity = cloneCard.querySelector('.popup__text--capacity');
  const offerCheckInOut = cloneCard.querySelector('.popup__text--time');
  const offerFeaturesList = cloneCard.querySelector('.popup__features');
  const offerDescription = cloneCard.querySelector('.popup__description');
  const offerPhotos = cloneCard.querySelector('.popup__photos');
  const authorAvatar = cloneCard.querySelector('.popup__avatar');

  // Аватарка

  authorAvatar.src = `${data.author.avatar}`;

  // Заголовок

  (!data.offer.title) ? offerTitle.remove() : offerTitle.textContent = data.offer.title;

  // Адрес

  (!data.offer.address) ? offerAddress.remove() : offerAddress.textContent = data.offer.address;

  // Цена

  (!data.offer.price) ? offerPrice.remove() : offerPrice.textContent = `${data.offer.price} ₽/ночь`;

  // Тип жилья

  (!data.offer.type) ? offerType.remove() : offerType.textContent = toGetValueTypeOffer(data.offer.type);

  // Вместимость

  (!data.offer.rooms && !data.offer.guests) ? offerCapacity.remove() : offerCapacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;

  // Въезд - выезд

  (!data.offer.checkin && !data.offer.checkout) ? offerCheckInOut.remove() : offerCheckInOut.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;

  // Описание

  (!data.offer.description) ? offerDescription.remove() : offerDescription.textContent = data.description;

  // Удобства

  if (!data.offer.features || data.offer.features.length === 0) {
    offerFeaturesList.remove();
  } else {
    const offerFeaturesItems = offerFeaturesList.querySelectorAll('.popup__feature');
    offerFeaturesList.innerHTML = '';
    const featuresAvailable = data.offer.features.map((item) => `popup__feature--${item}`);
    featuresAvailable.forEach((featureAvailable) => {
      offerFeaturesItems.forEach((feature) => {
        if (feature.classList.contains(featureAvailable)) {
          offerFeaturesList.appendChild(feature);
        }
      });
    });
  }
  // Фото

  if (!data.offer.photos || data.offer.photos.length === 0) {
    offerPhotos.remove();
  } else {
    offerPhotos.innerHTML = '';
    data.offer.photos.forEach((photo) => {
      offerPhotos.insertAdjacentHTML(
        'afterbegin',
        `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`,
      );
    });
  }
  return cloneCard;
};

export {toCreateCardWithData};
