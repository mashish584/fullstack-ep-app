import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MediaThumbnail, ThumbnailContainer } from "../styles/thumbnail.style";

type MediaThumbnailTypes = {
	medias: Array<string>;
	onRemove: (index: number) => void;
};

const MediaThumbnails: React.FC<MediaThumbnailTypes> = ({ medias, onRemove }) => {
	return (
		<ThumbnailContainer>
			{medias.map((media, index) => {
				return (
					<MediaThumbnail key={`media_${index}`}>
						<button className="transparent__button trash" onClick={() => onRemove(index)}>
							<FontAwesomeIcon icon={"trash"} width={10} height={15} />
						</button>
						<Image src={media} width={"100%"} height={"100%"} />
					</MediaThumbnail>
				);
			})}
		</ThumbnailContainer>
	);
};

export default MediaThumbnails;
