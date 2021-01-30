import Site from "../_site_var"
import { Helmet } from "react-helmet";

const Services = () => {
	return (
		<>
			<Helmet>
				<title>Services | { Site.name }</title>
				<meta name="description" content="This is a test Services Description" />
			</Helmet>
			<main>
			    <h1>Services</h1>
			</main>
		</>
	)
}

export default Services
