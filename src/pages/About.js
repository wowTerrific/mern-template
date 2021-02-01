import Site from "../_site_var"
import { Helmet } from "react-helmet";
import Container from "../components/Container";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About | { Site.name }</title>
				<meta name="description" content="This is a test About Description" />
			</Helmet>
			<main>
				<Container>
					<h1>About</h1>
				</Container>
			</main>
		</>
	)
}

export default About 
