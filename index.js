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

  if (document.querySelector('.services-prices__list')) {
    $('.services-prices__content').hide();
    $(document).on('click', '.services-prices__btn', function () {
      $(this).next().slideToggle();
      $(this).parent().siblings('.services-prices__item').find('.services-prices__content').slideUp();
      $(this).find('.services-prices__close').toggleClass('services-prices__close_active');
      $(this).parent().siblings('.services-prices__item').find('.services-prices__close').removeClass('services-prices__close_active');
      return false;
    });
  }

  if(document.querySelector('.servicesSwiperMain')) {
    const swiper1 = new Swiper(".servicesSwiper", {
      direction: "vertical",
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    const swiper2 = new Swiper(".servicesSwiperMain", {
      navigation: {
        nextEl: ".servicesSwiperMain-next",
        prevEl: ".servicesSwiperMain-prev",
      },
      thumbs: {
        swiper: swiper1,
      },
    });
  }

  if(document.querySelector('.services-lisences__swiper')) {
    const swiperLisence = new Swiper(".services-lisences__swiper", {
      spaceBetween: 33,
      slidesPerView: 6,
      navigation: {
        nextEl: ".services-lisences__next",
        prevEl: ".services-lisences__prev",
      },
    });
  }
});