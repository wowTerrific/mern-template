const ServiceItem = (props) => {
	return (
		<div className="service-item">
			<img className="service-item-img" src={props.imgSrc} alt={props.imgAlt} />
			<div className="service-item-txt">
				{props.children}
			</div>
		</div>
	)
}
ServiceItem.defaultProps = {
	imgSrc: "https://images.unsplash.com/photo-1613255800940-40cf781dcea3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
	imgAlt: "Image goes here"
}

export default ServiceItem
