import Image from "./Image";

const GalleryImage = ( props ) => {
	return (
		<div className="gallery-image-container" onClick={props.onClick}>
			<Image src={props.src} alt={props.alt} className="gallery-image" />
		</div>
	)
}
export default GalleryImage;