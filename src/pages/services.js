import Site from "../_site_var"
import { Helmet } from "react-helmet";

const Services = () => {
	return (
		<>
			<Helmet>
				<title>Services | { Site.name }</title>
				<meta name="description" content="This is a test Services Description" />
			</Helmet>
			
			<h1>Services</h1>
		</>
	)
}

export default Services
