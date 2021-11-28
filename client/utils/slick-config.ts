import { Settings } from "react-slick";

export const fullSCreenSlider: Settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 7000,
	nextArrow: null,
	prevArrow: null,
};

export const responsiveContentSlider: Settings = {
	slidesToShow: 5,
	slidesToScroll: 2,
	infinite: false,
	variableWidth: true,
	dots: false,
	speed: 400,
	responsive: [
		{
			breakpoint: 1700,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 1250,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
