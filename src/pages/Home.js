import Site from "../_site_var"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


import Container from "../components/Container";
import FlexContainer from "../components/FlexContainer";
import TypeWriter from "../components/TypeWriter";
import "../components/typewriter.css";
import Image from "../components/Image";


import duk from "../images/duk-min.png";
import "./home.css";

import interesting from "../images/example-img.svg";
import star1 from "../images/star1.svg";
import star2 from "../images/star2.svg";

import BtnPrimary from "../components/BtnPrimary";

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
						<FlexContainer className="flex-align-items-center flex-content-center" flexID="hero-flex">
							<div className="flex-m-50">
								<Image className="float" src={duk} alt="duck" />
							</div>
							<div className="hero-content flex-m-50">
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
						<FlexContainer className="flex-align-items-center" flexID="intro-flex">
							<div className="flex-m-67">
								<h2>Intro Section</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<Image src={interesting} alt="erm interesting..." className="flex-m-33 intro-img p-all"/>
						</FlexContainer>
					</Container>
				</section>
				<section className="spread">
					<Container>
						<h3 className="txt-center">Do Things Here</h3>
						<FlexContainer isSmall={true} flexID="flex-spread">
							<div className="card flex-s-33">
								<Image src={star1} alt="star" />
								<h4>Title</h4>
								<p>Short description goes here</p>
								<BtnPrimary to="/contact">Click</BtnPrimary>
							</div>
							<div className="card flex-s-33">
								<Image src={star1} alt="star" />
								<h4>Title</h4>
								<p>This is another card description</p>
								<BtnPrimary to="/contact">Click</BtnPrimary>
							</div>
							<div className="card flex-s-33">
								<Image src={star1} alt="star" />
								<h4>Title</h4>
								<p>The third description here.</p>
								<BtnPrimary to="/contact">Click</BtnPrimary>
							</div>
						</FlexContainer>
					</Container>
				</section>
				<section className="info">
					<Container>
						<FlexContainer isSmall={true} className="flex-align-items-center flex-content-center" flexID="intro-flex">
							<Image src={interesting} alt="erm interesting..." className="flex-m-33 intro-img p-all"/>
							<div className="intro-content flex-s-67">
								<h2>More Info Section</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</FlexContainer>
					</Container>
				</section>
				<section className="cta">
					<Container>
						<h3 className="txt-center">Do More Things Here</h3>
						<FlexContainer flexID="cta-flex">
							<div className="move-down flex-m-33">
								<div className="card">
									<Image src={star2} alt="star" />
									<h4>Title</h4>
									<p>Short description goes here</p>
									<BtnPrimary to="/contact">Click</BtnPrimary>
								</div>
								<div className="card">
									<Image src={star2} alt="star" />
									<h4>Title</h4>
									<p>Short description goes here</p>
									<BtnPrimary to="/contact">Click</BtnPrimary>
								</div>
							</div>
							<div className="flex-m-33">
								<div className="card">
									<Image src={star2} alt="star" />
									<h4>Title</h4>
									<p>This is another card description</p>
									<BtnPrimary to="/contact">Click</BtnPrimary>
								</div>
								<div className="card">
									<Image src={star2} alt="star" />
									<h4>Title</h4>
									<p>The third description here.</p>
									<BtnPrimary to="/contact">Click</BtnPrimary>
								</div>
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
