import PropTypes from "prop-types";

const Iframe = ( props ) => {
	return (
		<iframe src={props.src} width={props.width} height={props.height} frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title={props.title} loading="lazy"></iframe>
	)
}

Iframe.defaultProps = {
	width: "100%",
	height: "450"
}

Iframe.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default Iframe