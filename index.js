document.addEventListener('DOMContentLoaded', () => {
  let howBtns = document.querySelectorAll('.services-stages__tabs_item');
  let howContent = document.querySelectorAll('.services-stages__tabs_content');
  const reviews = document.querySelectorAll('.services-reviews__swiper-img');
  const reviewsContent = document.querySelectorAll('.services-reviews__inner');
  if (howBtns) {
    howBtns.forEach(element => {
      element.addEventListener('click', e => {
        const path = e.currentTarget.dataset.path;
        howBtns.forEach(btn => {
          btn.classList.remove('services-stages__active');
        });
        e.currentTarget.classList.add('services-stages__active');
        howContent.forEach(element => {
          element.classList.remove('services-stages__content_active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('services-stages__content_active');
      });
    });
  }

  if (document.querySelector('.sales__swiper')) {
    const swiper = new Swiper(".sales__swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".sales__swiper-next",
        prevEl: ".sales__swiper-prev",
      },
    });
  }

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  if (document.querySelector('.services-reviews__swiper')) {
    const swiper = new Swiper(".services-reviews__swiper", {
      slidesPerView: 6,
      spaceBetween: 32,
      navigation: {
        nextEl: ".services-reviews__btn-next",
        prevEl: ".services-reviews__btn-prev",
      },
    });
  }

  if (reviews) {
    reviews.forEach(element => {
      element.addEventListener('click', e => {
        const path = e.currentTarget.dataset.path;
        reviews.forEach(btn => {
          btn.classList.remove('services-reviews__active');
        });
        e.currentTarget.classList.add('services-reviews__active');
        reviewsContent.forEach(element => {
          element.classList.remove('services-reviews__inner_active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('services-reviews__inner_active');
      });
    });
  }
});