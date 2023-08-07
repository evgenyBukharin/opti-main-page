import Swiper, { Navigation, Autoplay } from "swiper";
Swiper.use([Navigation, Autoplay]);

const swiperEl = document.querySelector(".hero__slider");
const heroSlider = new Swiper(swiperEl, {
	slidesPerView: 1,
	speed: 700,
	spaceBetween: 30,
	grabCursor: true,
	navigation: {
		prevEl: ".hero__button-prev",
		nextEl: ".hero__button-next",
	},
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
	},
});
