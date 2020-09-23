// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  input: document.querySelector('#controls > input'),
  box: document.querySelector('#boxes'),
};

rest.render.addEventListener('click', onCreateMarkup);
rest.destroy.addEventListener('click', onDestroyMarkup);

function onCreateMarkup() {
  if (
    Number.parseInt(rest.input.value) < 0 ||
    Number.parseInt(rest.input.value) > 100
  ) {
    console.log(`неверное введенное число`);
    return;
  }
  const newArray = new Array(Number.parseInt(rest.input.value)).fill('a');
  let sizeDiv = 30;

  const addMurkup = newArray.map(() => {
    function randomNumber() {
      return Math.floor(Math.random() * (255 - 0 + 1) + 0);
    }
    const div = document.createElement('div');

    div.style.width = `${sizeDiv}px`;
    div.style.height = `${sizeDiv}px`;
    div.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    sizeDiv += 10;

    return div;
  });

  rest.box.append(...addMurkup);
}

function onDestroyMarkup() {
  rest.box.textContent = '';
}
