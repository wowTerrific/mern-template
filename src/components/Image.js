import PropTypes from "prop-types";

const Image = ( props ) => {

	return (
		<figure className={props.className} id={props.id}>
			<img alt={props.alt} src={props.src} loading="lazy" style={{width: "100%", height: "auto"}} />
				{props.children}
		</figure>
	)
}

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired
}

Image.defaultProps = {
	className: "",
	id: "",
	children: "",
}

export default Image;