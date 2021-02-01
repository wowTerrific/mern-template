import Site from "../_site_var"
import { Helmet } from "react-helmet";
import "./noroute.css";

const NoRoute = () => {

	return (
		<>
			<Helmet>
				<title>404 | { Site.name }</title>
				<meta name="description" content="This is a test 404 Description" />
			</Helmet>
			<main>
				<div className="noroute-cont">
					<h1>That's a 404, dawg</h1>
				</div>
		    </main>
		</>
	)
}

export default NoRoute
