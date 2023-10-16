/* Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и текста. Вам необходимо использовать Bootstrap для стилизации элементов.
Используйте Bootstrap, чтобы стилизовать элементы:
Заголовок статьи (<h2>)
Текст статьи (<p>)
Кнопки "Добавить статью", "Удалить" и "Редактировать".
Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте JSON-данные для определения заголовков и текстов статей.
Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
* Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая статья должна быть удалена из списка.
* Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать" пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте всплывающее окно или prompt для ввода новых данных.
* Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное хранилище браузера, чтобы они сохранялись после перезагрузки страницы. */

const articlesData = [
  {
    title: "Заголовок статьи 1",
    content: "Содержание статьи 1",
  },
  {
    title: "Заголовок статьи 2",
    content: "Содержание статьи 2",
  },
];
const contentEl = document.querySelector(".content");
const addButtonEl = document.querySelector(".addArticle");

//Начальный вывод статей
articlesData.forEach((article) => {
  const newDivEl = document.createElement("div");
  newDivEl.className = "article";
  let html = `
    <h2>${article.title}</h2>
    <p>${article.content}</p>
    <div class="buttons">
      <button class="btn editArticle">Редактировать</button>
      <button class="btn deleteArticle">Удалить</button>
    </div>`;
  newDivEl.innerHTML = html;
  contentEl.append(newDivEl);
});

//добавление новой статьи
addButtonEl.addEventListener("click", () => {
  const newDivEl = document.createElement("div");
  newDivEl.className = "article";
  let html = `
    <h2>Новая статья</h2>
    <p>Введите содержание статьи...</p>
    <div class="buttons">
      <button class="btn editArticle">Редактировать</button>
      <button class="btn deleteArticle">Удалить</button>
    </div>`;
  newDivEl.innerHTML = html;
  contentEl.append(newDivEl);

  const deleteButton = newDivEl.querySelector(".deleteArticle");

  deleteButton.addEventListener("click", (e) => {
    e.target.closest(".article").remove();
  });
});

//удаление статьи
const deleteButtonEls = document.querySelectorAll(".deleteArticle");

deleteButtonEls.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.closest(".article").remove();
  });
});
