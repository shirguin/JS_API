/* Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.
Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

Контейнер для отображения текущего изображения.
Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
Навигационные точки (индикаторы) для быстрого переключения между изображениями.
Используйте HTML для создания элементов интерфейса.

Используйте JavaScript для обработки событий:

При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.
Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида. */

const sliderEl = document.querySelector(".slider");
const prevButtonEl = document.querySelector(".prev-button");
const nextButtonEl = document.querySelector(".next-button");
const dotButtonEls = document.querySelectorAll(".dot");
const slides = sliderEl.querySelectorAll("img");
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonEl.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
});

nextButtonEl.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
});

dotButtonEls.forEach((element, index) => {
  element.addEventListener("click", () => {
    slideIndex = index;
    updateSlider();
  });
});

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
      dotButtonEls[index].classList.add("active");
    } else {
      slide.style.display = "none";
      dotButtonEls[index].classList.remove("active");
    }
  });
}

//Инициализация слайдера
updateSlider();
