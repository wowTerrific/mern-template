import PropTypes from "prop-types";

const Video = ( props ) => {
	return (
		<div class="video" id={props.id}>
			<video width="100%" height="auto" allowfullscreen="" controls="" poster={props.poster}>
			<source src={props.src} type="video/mp4" /></video>
		</div>
	)
}

Video.propTypes = {
	src: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired
}

export default Video;