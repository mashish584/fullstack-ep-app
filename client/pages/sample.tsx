import EventDarkCard from "../components/Event/EventDarkCard";
import Slider from "../components/Slider";

const sample = () => {
	return (
		<div>
			<Slider variant="contentSlide">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((slide, index) => (
					<div key={index}>
						<EventDarkCard width="355px" height="496px" />
					</div>
				))}
			</Slider>
			;
		</div>
	);
};

export default sample;
