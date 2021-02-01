import Site from "../_site_var"
import { Helmet } from "react-helmet";
import Container from "../components/Container";

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact | { Site.name }</title>
				<meta name="description" content="This is a test Contact Description" />
			</Helmet>
			<main>
				<Container>
					<h1>Contact</h1>
				</Container>
			</main>
		</>
	)
}

export default Contact
