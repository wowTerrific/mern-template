const FlexContainer = ( props ) => {
	
	return (
		<div className={(props.isSmall?"flex-row-s ":"flex-row-m ") + props.className} id={props.flexID}>
			{props.children}
		</div>
	)
}

FlexContainer.defaultProps = {
	isSmall: false,
	className: ""
}

export default FlexContainer