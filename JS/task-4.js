// Счетчик состоит из спана и кнопок, которые
// должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и
// обновление интерфейса

const rest = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

console.log(rest.decrementButton);
console.log(rest.incrementButton);
console.log(rest.value);

let counterValue = 0;

const increment = rest.incrementButton.addEventListener(
  'click',
  onIncrementClick,
);

const decrement = rest.decrementButton.addEventListener(
  'click',
  onDecrementClick,
);

function onIncrementClick() {
  counterValue += 1;
  rest.value.textContent = counterValue;
}

function onDecrementClick() {
  counterValue -= 1;
  rest.value.textContent = counterValue;
}
