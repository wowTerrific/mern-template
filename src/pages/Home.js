import Site from "../_site_var"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import FlexContainer from "../components/FlexContainer";
import TypeWriter from "../components/TypeWriter";
import "../components/typewriter.css";

import duk from "../images/duk-min.png";
import "./home.css";

import interesting from "../images/example-img.svg";
import star from "../images/star1.svg";


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
								<h1>My Site</h1>
								<TypeWriter write={[
									"First Sentence", 
									"Second Sentence", 
									"Last One"
								]} />
								<hr />
								<Link to="/contact">
									<button className="btn-hero">Call to Action</button>
								</Link>
							</div>
						</FlexContainer>
					</Container>
				</section>
				<section className="intro">
					<Container>
						<FlexContainer flexID="intro-flex">
							<div className="intro-content">
								<h2>Intro Section</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<div className="intro-img">
								<img src={interesting} alt="erm interesting..." style={{width: "100%", height: "auto"}} />
							</div>
						</FlexContainer>
					</Container>
				</section>
				<section className="spread">
					<Container>
						<FlexContainer flexID="flex-spread">
							<div className="card">
								<img src={star} alt="star" style={{width: "100%", height: "auto"}} />
								<h4>Title</h4>
								<p>Short description goes here</p>
								<button className="btn-primary">Click</button>
							</div>
							<div className="card">
								<img src={star} alt="star" style={{width: "100%", height: "auto"}} />
								<h4>Title</h4>
								<p>This is another card description</p>
								<button className="btn-primary">Click</button>
							</div>
							<div className="card">
								<img src={star} alt="star" style={{width: "100%", height: "auto"}} />
								<h4>Title</h4>
								<p>The third description here.</p>
								<button className="btn-primary">Click</button>
							</div>
						</FlexContainer>
					</Container>
				</section>
				<section className="info">
					<Container>
						<FlexContainer flexID="intro-flex">
							<div className="intro-img">
								<img src={interesting} alt="erm interesting..." style={{width: "100%", height: "auto"}} />
							</div>
							<div className="intro-content">
								<h2>More Info Section</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</FlexContainer>
					</Container>
				</section>
				<section className="cta">
					<Container>
						<h3>Call to action(s)</h3>
						<FlexContainer flexID="flex-spread">
							<div className="card">
								<img src={star} alt="star" style={{width: "100%", height: "auto"}} />
								<h4>Title</h4>
								<p>Short description goes here</p>
								<button className="btn-primary">Click</button>
							</div>
							<div className="card">
								<img src={star} alt="star" style={{width: "100%", height: "auto"}} />
								<h4>Title</h4>
								<p>This is another card description</p>
								<button className="btn-primary">Click</button>
							</div>
							<div className="card">
								<img src={star} alt="star" style={{width: "100%", height: "auto"}} />
								<h4>Title</h4>
								<p>The third description here.</p>
								<button className="btn-primary">Click</button>
							</div>
						</FlexContainer>
					</Container>
				</section>
				<section className="seo">
					<Container>
						<h3>SEO Section</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus turpis massa. Pharetra massa massa ultricies mi quis hendrerit. Volutpat sed cras ornare arcu dui. Integer malesuada nunc vel risus commodo. Facilisis leo vel fringilla est. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Quam elementum pulvinar etiam non. Pellentesque massa placerat duis ultricies lacus sed. Cras semper auctor neque vitae tempus quam pellentesque. Ornare arcu odio ut sem nulla.</p>

						<p>Nec feugiat nisl pretium fusce. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Netus et malesuada fames ac turpis. Scelerisque felis imperdiet proin fermentum leo vel orci. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Leo a diam sollicitudin tempor id eu nisl nunc. Accumsan tortor posuere ac ut consequat. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Facilisis mauris sit amet massa vitae. A arcu cursus vitae congue mauris. Id nibh tortor id aliquet. Vestibulum sed arcu non odio euismod lacinia. Volutpat lacus laoreet non curabitur gravida arcu ac. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Mollis nunc sed id semper risus in hendrerit gravida. Pulvinar proin gravida hendrerit lectus. Bibendum enim facilisis gravida neque convallis a cras semper. Amet risus nullam eget felis eget. Vitae elementum curabitur vitae nunc sed velit.</p>

						<p>Egestas purus viverra accumsan in nisl. Platea dictumst quisque sagittis purus. Sit amet massa vitae tortor condimentum lacinia quis. Lobortis scelerisque fermentum dui faucibus. Varius morbi enim nunc faucibus. Urna condimentum mattis pellentesque id nibh tortor. Sagittis eu volutpat odio facilisis mauris. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Placerat vestibulum lectus mauris ultrices eros in. Est ultricies integer quis auctor elit. Sit amet nisl suscipit adipiscing bibendum est. Consectetur adipiscing elit pellentesque habitant morbi. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Sit amet dictum sit amet justo. Rhoncus mattis rhoncus urna neque. Non blandit massa enim nec dui nunc mattis. Aliquet nibh praesent tristique magna sit amet purus gravida quis.</p>
					</Container>
				</section>
			</main>
		</>
	)
}

export default Home
