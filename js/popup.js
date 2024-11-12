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

  if (object.offer.features && object.offer.features.length > 0) {
    let featureElements = object.offer.features;
    popupElement.querySelector('.popup__features').innerHTML = '';
    featureElements.forEach((features) => {
      const newFeatures = document.createElement('li');
      newFeatures.classList.add('popup__feature', `popup__feature--${features}`);
      popupElement.querySelector('.popup__features').appendChild(newFeatures);
    });
  }else {
    popupElement.querySelector('.popup__features').remove();
  }

  if (object.offer.description && object.offer.description.length > 0) {
    popupElement.querySelector('.popup__description').textContent = object.offer.description;

  }else {
    popupElement.querySelector('.popup__description').remove();
  }

  if (object.offer.photos && object.offer.photos.length > 0) {
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
  }else {
    popupElement.querySelector('.popup__photos').remove();
  }

  popupElement.querySelector('.popup__avatar').src = object.author.avatar;

  return popupElement;
};
