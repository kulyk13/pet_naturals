//Slider
const aboutSlider = new Swiper('.about-slider', {
    loop: true,
    breakpoints: {
        320: {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        }
    },
})

//Current date
currentDate.textContent = new Date().toLocaleDateString();