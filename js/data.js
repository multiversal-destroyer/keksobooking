import { getRandomFloat } from './util.js';

const type = ['palace','flat','house','hotel','bungalow'];
const time = ['12:00','13:00','14:00'];
const features = ['wifi','dishwasher','parking','washer','elevator','conditioner'];
const title = ['title1','title2','title3'];
const description = ['description1', 'description2', 'description3'];
const getAvatar = () => {
  let number = getRandomFloat(1, 10, 0);
  return `img/avatars/user${number < 10 ? '0' + number : number}.png`;
};
const getAddress = () => {
  return {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };
};
const getPhotos = () => {
  let result = [];
  let number = getRandomFloat(1, 3, 0);
  for (let i = 1; i <= number; i++) {
    result.push(`http://o0.github.io/assets/images/tokyo/hotel${getRandomFloat(1, 3, 0)}.jpg`);
  }
  result = [...new Set(result)];

  return result;
};
const getFeatures = () => {
  let result = [];
  let number = getRandomFloat(1, features.length-1, 0);
  for (let i = 1; i <= number; i++) {
    result.push(`${features[getRandomFloat(0, features.length-1, 0)]}`);
  }
  result = [...new Set(result)];

  return result;
};

const createObject = () => {
  return {
    author: {
      avatar: getAvatar(),
    },

    offer: {
      title: title[getRandomFloat(0, 2, 0)],
      price: getRandomFloat(10, 500, 0),
      type: type[getRandomFloat(0, 4, 0)],
      rooms: getRandomFloat(5, 10, 0),
      guests: getRandomFloat(10, 15, 0),
      checkin: time[getRandomFloat(0, 2, 0)],
      checkout: time[getRandomFloat(0, 2, 0)],
      features: getFeatures(),
      description: description[getRandomFloat(0, 2, 0)],
      photos: getPhotos(),
    },

    location: getAddress(),
  };
};

const similarObject = new Array(10).fill(null).map(() => createObject());

export { similarObject, getFeatures, getAvatar };







