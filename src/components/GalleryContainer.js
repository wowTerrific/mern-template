import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";

const GalleryContainer = (props) => {

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="gallery-container">
			{props.children}
			<GalleryModal />
		</div>
	)
}

export default GalleryContainer;