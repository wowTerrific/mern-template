import Iframe from "./Iframe";

const VideoIframe = ( props ) => {
	return (
		<div class="video" id={props.id}>
			<Iframe src={props.src} title={props.title} />
		</div>
	)
}

export default VideoIframe;