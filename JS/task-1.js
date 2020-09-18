//  Посчитает и выведет в консоль количество категорий
// в ul#categories, то есть элементов li.item.Получится
// 'В списке 3 категории.'.

//  Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст
//  заголовка элемента(тега h2) и количество элементов
// в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listCategoriesEl = document.querySelector('#categories');

const countsCategoriesList = element =>
  `В списке ${element.children.length} категории.`;

countsCategoriesList(listCategoriesEl);

console.log(countsCategoriesList(listCategoriesEl));

const CategoriesEl = [...listCategoriesEl.querySelectorAll('.item')];

const displaysCategoryText = array =>
  array
    .map(
      element =>
        `Категория: ${
          element.querySelector('h2').textContent
        }\nКоличество элементов: ${
          element.querySelector('ul').children.length
        }`,
    )
    .join('\n');

displaysCategoryText(CategoriesEl);
console.log(displaysCategoryText(CategoriesEl));
