const select = document.getElementById('type');
const checkin = document.getElementById('timein');
const checkout = document.getElementById('timeout');
const inputPrice = document.getElementById('price');

function findOption() {
  if (select.value === 'bungalow') {
    inputPrice.min = "0";
    inputPrice.placeholder = "0";
  } else if (select.value === 'flat') {
    inputPrice.min = "1000";
    inputPrice.placeholder = "1000";
  } else if (select.value === 'hotel') {
    inputPrice.min = "3000";
    inputPrice.placeholder = "3000";
  } else if (select.value === 'house') {
    inputPrice.min = "5000";
    inputPrice.placeholder = "5000";
  } else if (select.value === 'palace') {
    inputPrice.min = "10000";
    inputPrice.placeholder = "10000";
  }
  if (inputPrice.value && Number(inputPrice.value) < inputPrice.min) {
    inputPrice.value = inputPrice.min;
  }
}
checkin.addEventListener('change', () => checkout.value = checkin.value);
checkout.addEventListener('change', () => checkin.value = checkout.value);

select.onchange = findOption;

