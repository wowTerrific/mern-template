import Site from "../_site_var"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Container from "../components/Container";

import "./sitemap.css";

const Sitemap = () => {

	const toTop = () => window.scrollTo(0, 0);

	return (
		<>
			<Helmet>
				<title>Sitemap | { Site.name }</title>
				<meta name="description" content="This is a test 404 Description" />
			</Helmet>
			<main>
			<section className="hero">
					<Container>
						<h1>Sitemap</h1>
					</Container>
				</section>
				<section className="sitemap">
					<Container>
						<div className="sitemap-list">
							<h3>Main Pages</h3>
							<ul>
								<li><Link to="/" onClick={toTop}>Home</Link></li>
								<li><Link to="/services" onClick={toTop}>Services</Link></li>
								<li><Link to="/about" onClick={toTop}>About</Link></li>
								<li><Link to="/contact" onClick={toTop}>Contact</Link></li>
							</ul>
						</div>
					</Container>
				</section>
		    </main>
		</>
	)
}

export default Sitemap
