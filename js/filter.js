import { dataObjects } from './api.js';
import { processData } from './map.js'

const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const featuresList = document.querySelectorAll('.map__checkbox');
let data = [];

function filterObjects() {
  dataObjects.forEach((object) => {
    let rank = 0;

    if (object.offer.rooms == housingRooms.value) {
      rank++;
    }

    if (object.offer.guests == housingGuests.value) {
      rank++;
    }

    if (object.offer.type == housingType.value) {
      rank++;
    }

    if (isPriceInRange(object.offer.price, housingPrice.value)) {
      rank++;
    }

    for (let i = 0; i < featuresList.length; i++) {
      const featuresItem = featuresList[i];

      if (featuresItem.checked && object.offer.features && object.offer.features.includes(featuresItem.value)) {
        rank++;
      }
    }

    object.rank = rank;
  });

  let maxValue = 0;
  dataObjects.forEach((object) => {
    if (maxValue < object.rank) {
      maxValue = object.rank;
    }
  });

  data = dataObjects.filter(item => (item.rank >= maxValue)).sort((a, b) => (b.rank - a.rank));
  processData(data);
};

function isPriceInRange(price, range) {
  switch (range) {
    case "low":
      return price < 10000;
    case "middle":
      return price >= 10000 && price <= 50000;
    case "high":
      return price > 50000;
    default:
      return true;
  }
};

housingType.onchange = filterObjects;
housingPrice.onchange = filterObjects;
housingRooms.onchange = filterObjects;
housingGuests.onchange = filterObjects;
featuresList.forEach((feature) => feature.onchange = filterObjects);

export { data };

/*
1. Перебрать данные из сервера при помощи forEach;
2. Для каждого объекта провести сортировку:
  - Вначале указать нулевое значение весса объекта;
  - Добавлять единицу весса за каждое совпадающее значение(value) с выбранным;
  - Полученный весс добавить к объекту в виде ключ-значение, вернув новый массив объектов;
3. С помощью .filter .sort отсортировать объекты при помощи значения весса и опубликовать
   найбольшие из них.
4. Добавить каждому select обработчик событий input, чтобы сортировка проходила заново каждый раз
   при смене значений фильтра на странице.
*/


