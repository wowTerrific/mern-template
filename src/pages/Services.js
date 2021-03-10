import Site from "../_site_var";
import "./services.css";
import { Helmet } from "react-helmet";

import Container from "../components/Container";
import ServiceItem from "../components/ServiceItem";
import GalleryContainer from "../components/GalleryContainer";

const Services = () => {
	return (
		<>
			<Helmet>
				<title>Services | { Site.name }</title>
				<meta name="description" content="This is a test Services Description" />
			</Helmet>
			<main>
				<section className="hero">
					<Container>
						<h1>Services</h1>
					</Container>
				</section>
				<section className="service-cont">
					<Container>
						
						<h2 style={{color: "red", textAlign: "center"}}>**Put a couple slides here**</h2>
						<br />
						<br />
						
						
						<ServiceItem>
							<h3>Service 1</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed. Ornare arcu odio ut sem nulla pharetra diam sit amet. Maecenas sed enim ut sem viverra aliquet.</p>
						</ServiceItem>
						<ServiceItem imgSrc="https://images.unsplash.com/photo-1613507205442-98f7d767eecb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80">
							<h3>Service 2</h3>
							<p>Volutpat est velit egestas dui id ornare arcu odio ut. Ultrices sagittis orci a scelerisque. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Sagittis nisl rhoncus mattis rhoncus. Lobortis elementum nibh tellus molestie nunc non blandit massa. Adipiscing enim eu turpis egestas pretium aenean.</p>
						</ServiceItem>
						<ServiceItem imgSrc="https://images.unsplash.com/photo-1613507195922-d10b41fb05b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80">
							<h3>Service 3</h3>
							<p>Arcu dui vivamus arcu felis bibendum. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Tortor at risus viverra adipiscing at in tellus integer. Euismod nisi porta lorem mollis aliquam. Platea dictumst vestibulum rhoncus est.</p>
						</ServiceItem>
						<ServiceItem imgSrc="https://images.unsplash.com/photo-1613477757272-96c69d8a64de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80">
							<h3>Service 4</h3>
							<p>Pellentesque id nibh tortor id aliquet lectus proin. Amet nisl purus in mollis nunc sed id. Nunc sed id semper risus in hendrerit gravida. At consectetur lorem donec massa. Viverra orci sagittis eu volutpat.</p>
						</ServiceItem>
						
						
						<br />
						<br />
						<h2 style={{color: "red", textAlign: "center"}}>**Gallery to go here**</h2>
						<GalleryContainer>
							<p>test</p>
						</GalleryContainer>
					</Container>
				</section>
			</main>
		</>
	)
}

export default Services
