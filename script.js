const swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

const swiper1 = new Swiper(".mySwiper-1", swiperConfig);

swiperConfig.slidesPerView = 3;
swiperConfig.spaceBetween = 20;
swiperConfig.breakpoints = {
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    950: {
        slidesPerView: 3,
    },
};

const swiper2 = new Swiper(".mySwiper-2", swiperConfig);

const tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(tabInput) {
    tabInput.addEventListener("change", function() {
        const id = tabInput.value;
        const thisSwiper = document.getElementById("swiper" + id);
        if (thisSwiper && thisSwiper.swiper) {
            thisSwiper.swiper.update();
        }
    });
});
