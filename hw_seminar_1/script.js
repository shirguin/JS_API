/* Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.
Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

При разработке используйте Bootstrap для стилизации элементов. */

const lessons = [
  {
    title: "Фитнес",
    time: "17.00",
    max_number: 15,
    number_sportsmans: 10,
  },
  {
    title: "Волейбол",
    time: "18.00",
    max_number: 12,
    number_sportsmans: 11,
  },
  {
    title: "Аэробика",
    time: "19.00",
    max_number: 30,
    number_sportsmans: 0,
  },
  {
    title: "Большой тенис",
    time: "20.00",
    max_number: 2,
    number_sportsmans: 2,
  },
];

const contentEl = document.querySelector(".content");

//Выводим контент на страницу
lessons.forEach((lisson) => {
  const newDivEl = document.createElement("div");
  newDivEl.className = "item";
  let html = `
    <h1 class="lisson__title">${lisson.title}</h1>
    <span>Начало в </span>
    <span class="time data">${lisson.time}</span>
    <span>Участников: </span>
    <span class="max_number data">${lisson.max_number}</span>
    <span>Записано участников: </span>
    <span class="number_sportsman data">${lisson.number_sportsmans}</span>
    <button class="btn addLesson">Записаться</button>
    <button class="btn delLesson" disabled>Отменить запись</button>
    `;
  newDivEl.innerHTML = html;
  contentEl.append(newDivEl);
});

const addButtonEls = document.querySelectorAll(".addLesson");
const delButtonEls = document.querySelectorAll(".delLesson");

//Запись на занятие
addButtonEls.forEach((button) => {
  button.addEventListener("click", (e) => {
    const addBtnEl = e.target;
    const parentEl = addBtnEl.closest(".item");
    const delBtnEl = parentEl.querySelector(".delLesson");

    let counter_sportsmansEl = parentEl.querySelector(".number_sportsman");
    let counter_sportsmans = +counter_sportsmansEl.textContent;

    let max_num = +parentEl.querySelector(".max_number").textContent;

    //Проверка на отсутствие свободных мест
    if (counter_sportsmans === max_num) {
      const errorEl = document.createElement("p");
      errorEl.className = "error";
      errorEl.textContent = "Свободных мест нет.";
      parentEl.append(errorEl);
      addBtnEl.disabled = true;
    }

    if (counter_sportsmans < max_num) {
      counter_sportsmans++;
      counter_sportsmansEl.textContent = counter_sportsmans;
      addBtnEl.disabled = true;
      delBtnEl.disabled = false;
    }
  });
});

//Отмена записи на занятие
delButtonEls.forEach((button) => {
  button.addEventListener("click", (e) => {
    const delBtnEl = e.target;
    const parentEl = delBtnEl.closest(".item");
    const addBtnEl = parentEl.querySelector(".addLesson");

    let counter_sportsmansEl = parentEl.querySelector(".number_sportsman");
    let counter_sportsmans = +counter_sportsmansEl.textContent;

    counter_sportsmans--;
    counter_sportsmansEl.textContent = counter_sportsmans;
    delBtnEl.disabled = true;
    addBtnEl.disabled = false;
  });
});
