const GalleryModal = (props) => {

	return (
		<div className="modal" onClick={props.onClick}>
			<div className="modal-overlay">
				<div className="modal-content">
					<img src={props.src} alt={props.alt} className="modal-image" />
				</div>
			</div>
		</div>
	)
}

export default GalleryModal;