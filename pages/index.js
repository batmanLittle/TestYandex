let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mobile");
  let dots = document.getElementsByClassName("transformation__carousel-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// 2ая карусель

let cardIndex = 0;

function showSlide(n) {
  const windowWidth = window.innerWidth;
  const slides = document.querySelectorAll(".participants__card");
  const spans = document.querySelectorAll(".participants__carousel-span");

  // Скрываем все карточки
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Проверка границ
  if (windowWidth <= 850) {
    if (n >= slides.length) {
      cardIndex = 0;
    } else if (n < 0) {
      cardIndex = slides.length - 1;
    }
  } else {
    if (n >= slides.length - 2) {
      cardIndex = 0;
    } else if (n < 0) {
      cardIndex = slides.length - 3;
    }
  }

  // Показываем нужную карточку
  if (windowWidth <= 850) {
    slides[cardIndex].style.display = "flex";
  } else {
    for (let i = cardIndex; i < cardIndex + 3; i++) {
      slides[i].style.display = "flex";
    }
  }

  // Обновляем значение span
  for (let i = 0; i < spans.length; i++) {
    if (windowWidth <= 850) {
      spans[i].textContent = cardIndex + 1;
    } else {
      spans[i].textContent = cardIndex + 3;
    }
  }
}

function plusCards(n) {
  showSlide((cardIndex += n));
}

function autoCarousel() {
  plusCards(1);
  setTimeout(autoCarousel, 4000);
}

// Вызов функции для автоматической смены слайдов

window.addEventListener("resize", () => {
  showSlide(cardIndex);
});
showSlide();
autoCarousel();
