import { getFeatures, getAvatar } from './data.js';

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

export const createPopupContent = (object) => {
  const popupElement = popupTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = object.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = `${object.location.lat}, ${object.location.lng}`;
  const priceElement = popupElement.querySelector('.popup__text--price');
  priceElement.textContent = object.offer.price;
  priceElement.insertAdjacentHTML('beforeend', '<span> ₽/ночь</span>');
  popupElement.querySelector('.popup__type').textContent = object.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнат для ${object.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;
  popupElement.querySelector('.popup__features').innerHTML = '';
  getFeatures().forEach((features) => {
    const newFeatures = document.createElement('li');
    newFeatures.classList.add('popup__feature', `popup__feature--${features}`);
    popupElement.querySelector('.popup__features').appendChild(newFeatures);
  });
  popupElement.querySelector('.popup__description').textContent = object.offer.description;
  popupElement.querySelector('.popup__photos').innerHTML = '';
  object.offer.photos.forEach(photo => {
    const imgElement = document.createElement('img');
    imgElement.src = photo;
    imgElement.classList.add('popup__photo');
    imgElement.width = 45;
    imgElement.height = 40;
    imgElement.alt = 'Фотография жилья';
    popupElement.querySelector('.popup__photos').appendChild(imgElement);
  });
  popupElement.querySelector('.popup__avatar').src = getAvatar();

  return popupElement;
};
