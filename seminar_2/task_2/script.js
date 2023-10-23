/* Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно должно содержать заголовок "Модальное окно" и кнопку для закрытия. Модальное окно должно плавно появляться и исчезать при открытии и закрытии. */
const openButtonEl = document.querySelector(".openModal");
const modalEl = document.querySelector(".modal");
const closeButtonEl = document.querySelector(".exitModal");

openButtonEl.addEventListener("click", () => {
  modalEl.style.display = "block";
});

closeButtonEl.addEventListener("click", () => {
  modalEl.style.display = "none";
});
