import Site from "../_site_var"
import { Helmet } from "react-helmet";

const NoRoute = () => {

	return (
		<>
			<Helmet>
				<title>404 | { Site.name }</title>
				<meta name="description" content="This is a test 404 Description" />
			</Helmet>
			<main>
		        <h1>That's a 404, dawg</h1>
		    </main>
		</>
	)
}

export default NoRoute
