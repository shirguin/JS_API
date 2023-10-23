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

const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = slider.querySelectorAll("img");
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Инициализация слайдера
updateSlider();
