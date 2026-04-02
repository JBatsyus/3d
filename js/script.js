// Инициализация слайдеров для всех карточек
document.addEventListener('DOMContentLoaded', () => {
    const pricingSliders = document.querySelectorAll('.v3d-pricing-card__slider');

    pricingSliders.forEach((sliderEl) => {
        new Swiper(sliderEl, {
            loop: true,
            speed: 500,
            navigation: {
                nextEl: '.v3d-pricing-card__slider-next',
                prevEl: '.v3d-pricing-card__slider-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    });
});

const examplesSlider = new Swiper('.v3d-examples__slider', {
    slidesPerView: 1.2,
    spaceBetween: 0,
    loop: true,
    grabCursor: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: '.v3d-examples__slider-next',
        prevEl: '.v3d-examples__slider-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1240: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});