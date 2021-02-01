import Site from "../_site_var"
import { Helmet } from "react-helmet";
import Container from "../components/Container";

import "./home.css";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>{ Site.name }</title>
				<meta name="description" content="This is a test Homepage Description" />
			</Helmet>
			<main>
				<section className="hero">
					<Container>
						<h1>Home</h1>
					</Container>
				</section>
			</main>
		</>
	)
}

export default Home
