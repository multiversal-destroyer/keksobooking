import { createPopupContent } from './popup.js';
import { similarObject } from './data.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const inputAddress = document.querySelector('#address');

inputAddress.value = "35.68172, 139.75392";
inputAddress.setAttribute('readonly', '');
[...document.getElementsByTagName('fieldset')].forEach(i => i.setAttribute('disabled', 'disabled'));
[...document.getElementsByTagName('select')].forEach(i => i.setAttribute('disabled', 'disabled'));
adForm.classList.add('ad-form--disabled');
mapFilters.classList.add('map__filters--disabled');

const map = L.map('map-canvas')
  .on('load', () => {
    [...document.getElementsByTagName('fieldset')].forEach(i => i.removeAttribute('disabled'));
    [...document.getElementsByTagName('select')].forEach(i => i.removeAttribute('disabled'));
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
  })

  .setView({
    lat: 35.681729,
    lng: 139.753927,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const basicPinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: 35.681729,
    lng: 139.753927,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  inputAddress.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

similarObject.forEach((object) => {
  const { lat, lng } = object.location;

  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(createPopupContent(object));
});
