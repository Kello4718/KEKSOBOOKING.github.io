import {inputAddressForm, LAT_TOKYO, LNG_TOKYO, MAP_SCALE, normalMarkerIcon, mainMarkerIcon, TOTAL_OFFERS, CACHED_DATA} from './const-and-variables.js';
import {toCreateCardWithData} from './create-card-with-data.js';
import {toFilterData} from './filter.js';
import {toPullData} from './pull-data-from-server.js';
import {toActivateForm} from './work-with-form.js';

// Добавляю карту
const map = L.map('map-canvas')
  .on('load', () => {
    toActivateForm();
  }).setView({
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Добавляю главной метке координаты и иконку

const mainMarker = L.marker(
  {
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

// Добавляю главную метку на карту

mainMarker.addTo(map);

// Передаю координаты главной метки при ее перемещении

mainMarker.on('moveend', (evt) => {
  inputAddressForm.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lat.toFixed(5)}`;
});

// Функция, отвечающая за возврат главной метки и карты на изначальное место

const toGiveLocationMainMarker = () => {
  mainMarker.setLatLng({
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  });
  map.setView({
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  }, MAP_SCALE);
};

// Объединяю в группу

const markersLayer = L.layerGroup().addTo(map);

// Функция, генерирующая обычные метки с данными от сервера

const toGenerateMarkers = () => {
  const arrayFromServer = toPullData();
  arrayFromServer
    .then((dataArray) => dataArray.slice(0, TOTAL_OFFERS))
    .then((dataArray) => {
      dataArray.forEach((dataItem) => {
        const normalMarker = L.marker(dataItem.location, {
          icon: normalMarkerIcon,
        });
        normalMarker.addTo(markersLayer).bindPopup(toCreateCardWithData(dataItem));
      });
    });
};

const toRenderOffersFromCache = () => {
  markersLayer.clearLayers();
  const arrayFromServer = toFilterData(CACHED_DATA, TOTAL_OFFERS);
  arrayFromServer.forEach((dataItem) => {
    const normalMarker = L.marker(dataItem.location, {
      icon: normalMarkerIcon,
    });
    normalMarker.addTo(markersLayer).bindPopup(toCreateCardWithData(dataItem));
  });
};


export {markersLayer, toGenerateMarkers, map, mainMarker, toGiveLocationMainMarker, toRenderOffersFromCache};
