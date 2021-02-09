import Site from "../_site_var"
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import FlexContainer from "../components/FlexContainer";
import TypeWriter from "../components/TypeWriter";
import "../components/typewriter.css";

import duk from "../images/duk-min.png";
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
						<FlexContainer flexID="hero-flex">
							<img src={duk} alt="duck" style={{width: "67%", height: "auto", maxWidth: "700px" }} className="float" />
							<div className="hero-content">
								<h1>Home</h1>
								<TypeWriter write={[
									"First Sentence", 
									"Second Sentence", 
									"Last One"
								]} />
							</div>
						</FlexContainer>
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
