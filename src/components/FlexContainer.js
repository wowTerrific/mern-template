const FlexContainer = ( props ) => {
	return (
		<div className="flex-container" id={props.flexID}>
			{props.children}
		</div>
	)
}

export default FlexContainer