const ServiceItem = (props) => {
	return (
		<div className="service-item">
			<div className="service-item-img-cont">
				<img className="service-item-img" src={props.imgSrc} alt={props.imgAlt} />
				<p className="caption">{props.imgCaption}</p>
			</div>
			<div className="service-item-txt">
				{props.children}
			</div>
		</div>
	)
}
ServiceItem.defaultProps = {
	imgSrc: "https://images.unsplash.com/photo-1613507359027-e4909514abf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80",
	imgAlt: "Image goes here",
	imgCaption: "Photo Credit: Tangyart"
}

export default ServiceItem
