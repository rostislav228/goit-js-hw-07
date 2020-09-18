const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в
// список ul.ingredients.Для создания DOM - узлов используй
// document.createElement()

const listIngredientsEl = document.querySelector('#ingredients');

const createsIngredientsListItems = (array, list) => {
  const arrayIngredientsMarkup = array.map(element => {
    const ingredientMarkup = document.createElement('li');
    ingredientMarkup.textContent = element;
    return ingredientMarkup;
  });
  list.append(...arrayIngredientsMarkup);
};

createsIngredientsListItems(ingredients, listIngredientsEl);
