const input = document.querySelector('#input');
const checkBtn = document.querySelector('#check');
const result = document.querySelector('#result');

checkBtn.addEventListener('click', () => {
  if (input.value === '') {
    return alert('Please enter a number');
  } else if (input.value < 0) {
    return alert('Please enter a positive number');
  }

  input.value % 2 === 0
    ? (result.innerHTML = 'This number ' + input.value + ' is Even Number')
    : input.value % 2 === 1
    ? (result.innerHTML = 'This number ' + input.value + ' is Odd Number')
    : '';
});
