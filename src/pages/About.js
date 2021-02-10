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
				<section className="hero">
					<Container>
						<h1>About Us</h1>
					</Container>
				</section>
			</main>
		</>
	)
}

export default About 
