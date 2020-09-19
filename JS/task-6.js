// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const rest = {
  input: document.querySelector('#validation-input'),
};

rest.input.addEventListener('change', onInputCheck);

function onInputCheck(event) {
  const value = event.currentTarget.value;

  if (value.length === 6) {
    if (rest.input.classList.contains('invalid')) {
      rest.input.classList.remove('invalid');
    }
    rest.input.classList.add('valid');
  } else {
    if (rest.input.classList.contains('valid')) {
      rest.input.classList.remove('valid');
    }
    rest.input.classList.add('invalid');
  }
}
