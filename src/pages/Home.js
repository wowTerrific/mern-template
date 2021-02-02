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
						<p>***Floating Image w/ drop shadow</p>
						<h1>Home</h1>
						<p>***Typing Animation Component Goes Here</p>
					</Container>
				</section>
				<section className="intro">
					<Container>
						<h2>Intro Section</h2>
						<p>Add large fancy graphic</p>
					</Container>
				</section>
				<section className="spread">
					<Container>
						<h3>Flex-Box Spread Section</h3>
					</Container>
				</section>
				<section className="info">
					<Container>
						<h3>Slightly more detail about services/offers</h3>
					</Container>
				</section>
				<section className="cta">
					<Container>
						<h3>Call to action(s)</h3>
					</Container>
				</section>
				<section className="seo">
					<Container>
						<h3>Even more detailed information w/ SEO saturation</h3>
						<p>						###################################################################################################################################################################################################################################################################################################################################
						</p>
					</Container>
				</section>
			</main>
		</>
	)
}

export default Home
