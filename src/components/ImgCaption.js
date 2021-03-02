const ImgCaption = props => {
	return (
		<figcaption className={props.className}>{props.children}</figcaption>
	)
}

ImgCaption.defaultProps = {
	className: ""
}

export default ImgCaption;