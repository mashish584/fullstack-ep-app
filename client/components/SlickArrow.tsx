import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SlickArrowProps = {
	onNext: () => void;
	onPrev: () => void;
};

const SlickArrow: React.FC<SlickArrowProps> = ({ onNext, onPrev }) => {
	return (
		<div className="slick__arrow_container">
			<button className="transparent__button" onClick={onPrev}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<button className="transparent__button" onClick={onNext}>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		</div>
	);
};

export default SlickArrow;
