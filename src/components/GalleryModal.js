import Image from "./Image";

const GalleryModal = (props) => {

	return (
		<div className="modal" onClick={props.onClick}>
			<div className="modal-overlay">
				<div className="modal-content">
					<Image src={props.src} alt={props.alt} className="modal-img" />
				</div>
			</div>
		</div>
	)
}

export default GalleryModal;
