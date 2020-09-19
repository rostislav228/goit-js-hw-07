// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const rest = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

rest.text.style.fontSize = `${rest.input.value}px`;

rest.input.addEventListener('input', onChangesFontSizeText);

function onChangesFontSizeText(event) {
  rest.text.style.fontSize = `${event.currentTarget.value}px`;
}
