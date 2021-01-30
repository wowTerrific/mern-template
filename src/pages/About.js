import Site from "../_site_var"
import { Helmet } from "react-helmet";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About | { Site.name }</title>
				<meta name="description" content="This is a test About Description" />
			</Helmet>
			<main>
			    <h1>About</h1>
			</main>
		</>
	)
}

export default About 
