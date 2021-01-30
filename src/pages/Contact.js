import Site from "../_site_var"
import { Helmet } from "react-helmet";

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact | { Site.name }</title>
				<meta name="description" content="This is a test Contact Description" />
			</Helmet>
			<main>
			    <h1>Contact</h1>
			</main>
		</>
	)
}

export default Contact
