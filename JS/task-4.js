// Счетчик состоит из спана и кнопок, которые
// должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и
// обновление интерфейса

const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

rest.incrementButton.addEventListener('click', onIncrementClick);

rest.decrementButton.addEventListener('click', onDecrementClick);

function onIncrementClick() {
  counterValue += 1;
  rest.value.textContent = counterValue;
}

function onDecrementClick() {
  counterValue -= 1;
  rest.value.textContent = counterValue;
}
