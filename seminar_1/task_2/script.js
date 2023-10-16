/* Вы должны создать веб-страницу, которая позволяет пользователю динамически управлять элементами на странице. Ниже приведены основные требования и функциональность:
На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и "Клонировать элемент".
При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее).
При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется.
При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на страницу.
Все элементы имеют класс .box и стилизованы с помощью CSS .
Элементы могут быть добавлены, удалены и клонированы в любом порядке и в любом количестве. */

const addButton = document.querySelector(".addBtn");
const deleteButton = document.querySelector(".delBtn");
const cloneButton = document.querySelector(".clonBtn");
const content = document.querySelector(".content");
let counter = 1;

addButton.addEventListener("click", () => {
  let newBox = document.createElement("div");
  newBox.className = "box";
  newBox.textContent = counter;
  counter++;
  content.append(newBox);
});

deleteButton.addEventListener("click", () => {
  let element = content.lastChild;
  if (!element.classList.contains("clone")) {
    counter--;
  }
  element.remove();
});

cloneButton.addEventListener("click", () => {
  let element = content.lastChild;
  let newElement = element.cloneNode(true);
  newElement.classList.add("clone");
  content.append(newElement);
});
