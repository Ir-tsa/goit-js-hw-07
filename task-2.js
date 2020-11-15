// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

console.log(ingredients);


const createlistCard = ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  console.log(list);
  return list
};

const IngredientlistRef = document.querySelector('#ingredients')
  console.log(IngredientlistRef);

const Ingredientslist = ingredients.map(ingredient => createlistCard(ingredient));
  console.log(Ingredientslist);

     IngredientlistRef.append(...Ingredientslist)

     
  

