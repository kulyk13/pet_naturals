//Timer
let endDate = + new Date() + 7200100;

let timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;
    if (t >= 0) {
        let hrs = Math.floor((t % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("timerHours").innerHTML = ("0" + hrs).slice(-2);
        document.getElementById("timerMinutes").innerHTML = ("0" + mins).slice(-2);
        document.getElementById("timerSeconds").innerHTML = ("0" + secs).slice(-2);  
    } else {
        document.getElementById("timer").innerHTML = "Times Up!"
    }
}, 1000)

//Slider
const aboutSlider = new Swiper('.about-slider', {
    spaceBetween: 25,
    breakpoints: {
        320: {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        },
        576: {
            slidesPerView: 2,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },
})

//Current date
currentDate.textContent = new Date().toLocaleDateString();