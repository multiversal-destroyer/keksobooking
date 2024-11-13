let dataObjects;

await fetch('https://23.javascript.htmlacademy.pro/keksobooking/data')
  .then((response) => response.json())
  .then((objects) => {
    dataObjects = objects;
  })
  .catch((error) => {
    console.error('Ошибка при загрузке данных:', error);
  });

export { dataObjects };
