const typeSelect = document.querySelector('#type');
const checkin = document.querySelector('#timein');
const checkout = document.querySelector('#timeout');
const priceInput = document.querySelector('#price');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');

priceInput.addEventListener('input', () => {
  let value = parseFloat(priceInput.value);
  let minValue = priceInput.min;

  if (value > 1000000) {
    priceInput.value = 1000000;
  } else if (value < minValue) {
    priceInput.value = minValue;
  }
});

function findOption() {
  const roomCount = roomNumberSelect.value;
  for (let i = 0; i < capacitySelect.options.length; i++) {
    const capacityOption = capacitySelect.options[i];
    const guestCount = capacityOption.value;
    if (guestCount > roomCount) {
      capacityOption.disabled = true;
    } else {
      capacityOption.disabled = false;
    }
  }
  if (capacitySelect.value > roomCount) {
    capacitySelect.setCustomValidity('Выберите допустимое количество гостей.');
  } else {
    capacitySelect.setCustomValidity('');
  }
  capacitySelect.reportValidity();
}

capacitySelect.onchange = findOption;
roomNumberSelect.onchange = findOption;

typeSelect.addEventListener('change', () => {
  if (typeSelect.value === 'bungalow') {
    priceInput.min = "0";
    priceInput.placeholder = "0";
  } else if (typeSelect.value === 'flat') {
    priceInput.min = "1000";
    priceInput.placeholder = "1000";
  } else if (typeSelect.value === 'hotel') {
    priceInput.min = "3000";
    priceInput.placeholder = "3000";
  } else if (typeSelect.value === 'house') {
    priceInput.min = "5000";
    priceInput.placeholder = "5000";
  } else if (typeSelect.value === 'palace') {
    priceInput.min = "10000";
    priceInput.placeholder = "10000";
  }
  if (priceInput.value && Number(priceInput.value) < priceInput.min) {
    priceInput.value = priceInput.min;
  }
});

checkin.addEventListener('change', () => checkout.value = checkin.value);
checkout.addEventListener('change', () => checkin.value = checkout.value);

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const titleInput = document.querySelector('#title');

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Введите ещё ${MIN_TITLE_LENGTH - valueLength} симв.`)
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите ${valueLength - MAX_TITLE_LENGTH} симв.`)
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});
