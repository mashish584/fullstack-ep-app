import React, { useCallback, useEffect, useState } from "react";
import SlickSlider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderType from "react-slick";
import { SlickPaginationContainer, SlickPaging } from "../styles/slick.style";

const sliderConfig: Settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

type SliderProps = {
	variant: "fullScreen" | "contentSlide";
	settings?: Settings;
	children: React.ReactNode;
};

type Ref = SliderType;

const Slider = React.forwardRef<Ref, SliderProps>(({ children, settings, variant }, ref) => {
	const [sliderSettings, setSliderSettings] = useState(sliderConfig);

	const AppendDots = useCallback(
		(dots) => (
			<SlickPaginationContainer>
				<ul style={{ margin: "0px" }}>{dots}</ul>
			</SlickPaginationContainer>
		),
		[],
	);

	const CustomPaging = (index) => <SlickPaging />;

	useEffect(() => {
		if (settings) {
			setSliderSettings({ ...sliderSettings, ...settings });
		}

		if (variant === "fullScreen") {
			setSliderSettings((config) => ({
				...config,
				appendDots: AppendDots,
				customPaging: CustomPaging,
				autoplay: true,
				autoplaySpeed: 7000,
			}));
		} else {
			setSliderSettings((config) => ({
				...config,
				slidesToShow: 5,
				slidesToScroll: 3,
				infinite: false,
				variableWidth: true,
				dots: false,
			}));
		}
	}, []);

	return (
		<SlickSlider ref={ref} {...sliderSettings}>
			{children}
		</SlickSlider>
	);
});

export default Slider;
