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
				<Container>
					<h1>Services</h1>
				</Container>
			</main>
		</>
	)
}

export default Services
