import React, { useCallback, useEffect, useState, useRef } from "react";
import SlickSlider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlickPaginationContainer, SlickPaging } from "../styles/slick.style";
import { fullSCreenSlider, responsiveContentSlider } from "../utils/slick-config";

type SliderProps = {
	variant: "fullScreen" | "contentSlide";
	settings?: Settings;
	children: React.ReactNode;
	hidePagination?: boolean;
	customConfig?: Settings;
};

type Ref = SlickSlider;

const Slider = React.forwardRef<Ref, SliderProps>(({ children, settings, variant, ...props }, ref) => {
	const [renderSlider, setRenderSlider] = useState(false);
	const sliderSettings = useRef<Settings | null>();

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
		if (variant === "fullScreen") {
			sliderSettings.current = {
				...fullSCreenSlider,
				appendDots: AppendDots,
				customPaging: CustomPaging,
				...props.customConfig,
			};

			if (props.hidePagination) {
				sliderSettings.current.dots = false;
			}
		} else {
			sliderSettings.current = {
				...responsiveContentSlider,
				...props.customConfig,
			};
		}

		setRenderSlider(true);
	}, []);

	return (
		renderSlider && (
			<SlickSlider ref={ref} {...sliderSettings.current}>
				{children}
			</SlickSlider>
		)
	);
});

export default Slider;
