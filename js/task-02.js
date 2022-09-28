const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

let el = [];

ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  el.push(li);
});

list.append(...el);

console.log(list);