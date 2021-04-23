import Image from "./Image";
import GalleryModal from "./GalleryModal";
import { useState } from "react";

const GalleryImage = ( props ) => {
	
	const [ showModal, setShowModal ] = useState(false);

	return (
		<>
			<div className="gallery-image-container" onClick={() => setShowModal(true)}>
				<Image src={props.src} alt={props.alt} className="gallery-image" />
			</div>
			
			{ showModal && 	<GalleryModal onClick={() => setShowModal(false)} src={props.src} alt={props.alt} /> }
			
		</>
	)
}
export default GalleryImage;
