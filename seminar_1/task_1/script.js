/* Определение текущего размера окна браузера:
Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.
Подтверждение закрытия страницы:
Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.
Управление историей переходов:
Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории. */

window.addEventListener("resize", () => {
  let width = window.outerWidth;
  let height = window.outerHeight;
  console.log(`Ширина окна: ${width} Высота окна: ${height}`);
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Вы уверены?";
});
