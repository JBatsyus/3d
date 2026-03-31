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