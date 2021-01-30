import Site from "../_site_var"
import { Helmet } from "react-helmet";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>{ Site.name }</title>
				<meta name="description" content="This is a test Homepage Description" />
			</Helmet>
			<main>
			    <h1>Home</h1>
			</main>
		</>
	)
}

export default Home
