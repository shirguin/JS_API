/* Вам необходимо создать навигационное меню для веб-сайта, в котором меняется активный пункт при клике без фактического перехода на другие страницы. Меню должно обладать следующими характеристиками:
Подсветка активного пункта: При клике на пункт меню он должен становиться активным, и для активного пункта должен применяться определенный стиль (например, изменение цвета фона). Если выбрать другой пункт, предыдущий должен перестать быть активным.
Эффекты наведения: При наведении курсора на пункты меню должны применяться эффекты (например, изменение цвета текста или фона) для подсказки пользователю, что пункт меню является интерактивным. */

const menuItemEls = document.querySelectorAll(".menu__item");

menuItemEls.forEach((element) => {
  element.addEventListener("click", (e) => {
    const newActivEl = e.target;
    const activEl = document.querySelector(".active");
    activEl.classList.remove("active");
    newActivEl.classList.add("active");
  });
});