import Site from "../_site_var"
import { Helmet } from "react-helmet";
import Container from "../components/Container";

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
			</main>
		</>
	)
}

export default Services
