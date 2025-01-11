// JavaScript для зміни зображень
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showSlide(index) {
        // Скидаємо активність для всіх слайдів
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Перехід до наступного слайду
        showSlide(currentIndex);
    }

    // Зміна слайдів кожні 3 секунди
    setInterval(nextSlide, 3000);

    // Показуємо перший слайд
    showSlide(currentIndex);
});



// Додаємо функціонал для кнопки "Read more"
document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.querySelector(".read-more-btn");
  const moreText = document.querySelector(".more-text");

  readMoreBtn.addEventListener("click", () => {
    const isExpanded = moreText.style.display === "block";

    // Показуємо або ховаємо текст
    moreText.style.display = isExpanded ? "none" : "block";

    // Змінюємо текст і іконку кнопки
    readMoreBtn.innerHTML = isExpanded
      ? '<i class="fas fa-chevron-down"></i> Read more'
      : '<i class="fas fa-chevron-up"></i> Read less';
  });
});
