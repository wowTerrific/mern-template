import Site from "../_site_var"
import { Helmet } from "react-helmet";
import { Link} from "react-router-dom";
import FlexContainer from "../components/FlexContainer";
import Container from "../components/Container";
import "./noroute.css";

const NoRoute = () => {

	const toTop = () => window.scrollTo(0, 0);

	return (
		<>
			<Helmet>
				<title>404 | { Site.name }</title>
				<meta name="description" content="This is a test 404 Description" />
			</Helmet>
			<main>
				<div className="hero">
					<h1 className="txt-center">That's a 404, dawg</h1>
				</div>
				<Container>
					<div className="fof-message txt-center">
						<h2>Looks like this page doesn't exist.</h2>
						<p>Try one of these pages:</p>
						<br />
						<hr />
						<FlexContainer isSmall={true}>
							<div className="flex-s-25">
								<Link to="/" onClick={toTop}>
									<button className="btn-primary">Home</button>
								</Link>
							</div>
							<div className="flex-s-25">
								<Link to="/services" onClick={toTop}>
									<button className="btn-primary">Services</button>
								</Link>
							</div>
							<div className="flex-s-25">
								<Link to="/about" onClick={toTop}>
									<button className="btn-primary">About</button>
								</Link>
							</div>
							<div className="flex-s-25">
								<Link to="/contact" onClick={toTop}>
									<button className="btn-primary">Contact</button>
								</Link>
							</div>
						</FlexContainer>
						<hr />
					</div>
				</Container>
		    </main>
		</>
	)
}

export default NoRoute
