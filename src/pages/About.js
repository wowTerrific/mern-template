import Site from "../_site_var"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import FlexContainer from "../components/FlexContainer";
import "./about.css";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About | { Site.name }</title>
				<meta name="description" content="This is a test About Description" />
			</Helmet>
			<main>
				<section className="hero">
					<Container>
						<h1>About Us</h1>
					</Container>
				</section>
				<section className="about-info">
					<Container>
						<FlexContainer flexID="about-info-flex">
							<div className="about-info-content">
								<h3>Why not Learn More About Us?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus sed. Scelerisque eu ultrices vitae auctor eu augue ut. Nunc id cursus metus aliquam eleifend mi in. Purus gravida quis blandit turpis. Pretium quam vulputate dignissim suspendisse. Vitae nunc sed velit dignissim sodales ut eu sem. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Et sollicitudin ac orci phasellus. Aliquam faucibus purus in massa tempor nec feugiat. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Sit amet facilisis magna etiam tempor. Massa placerat duis ultricies lacus sed turpis tincidunt. Felis donec et odio pellentesque diam. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Eu nisl nunc mi ipsum. Nisl suscipit adipiscing bibendum est ultricies integer. Vitae auctor eu augue ut lectus arcu bibendum at. Quam lacus suspendisse faucibus interdum.</p>

								<p>Quis varius quam quisque id diam vel quam elementum pulvinar. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Vel pretium lectus quam id leo in vitae turpis massa. Libero justo laoreet sit amet cursus sit amet dictum sit. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ac ut consequat semper viverra nam libero justo. Id volutpat lacus laoreet non curabitur gravida arcu ac. Mauris vitae ultricies leo integer malesuada nunc vel. Bibendum enim facilisis gravida neque convallis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Et netus et malesuada fames ac. Nisl pretium fusce id velit ut tortor pretium.</p>

								<h4>More Lorem Ipsum Coming Right Up!</h4>
								<p>Imperdiet nulla malesuada pellentesque elit eget gravida. Morbi tristique senectus et netus et malesuada. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Pellentesque nec nam aliquam sem et tortor consequat id porta. Id nibh tortor id aliquet lectus. Sed cras ornare arcu dui vivamus arcu felis bibendum. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. In fermentum et sollicitudin ac orci phasellus egestas tellus. Gravida quis blandit turpis cursus in hac. Blandit massa enim nec dui nunc mattis enim ut tellus. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Aenean euismod elementum nisi quis. Varius morbi enim nunc faucibus a.</p>

								<p>Imperdiet proin fermentum leo vel orci porta. Curabitur gravida arcu ac tortor dignissim convallis aenean. Varius duis at consectetur lorem donec massa sapien. Ut sem viverra aliquet eget sit amet tellus cras. Sit amet purus gravida quis blandit turpis cursus. Ultrices dui sapien eget mi proin sed libero enim sed. Diam vulputate ut pharetra sit amet aliquam id. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. In mollis nunc sed id. Neque convallis a cras semper auctor neque vitae tempus quam. Dolor purus non enim praesent elementum.</p>

								<p>Ipsum dolor sit amet consectetur adipiscing. A arcu cursus vitae congue mauris rhoncus aenean vel. Nunc vel risus commodo viverra. Potenti nullam ac tortor vitae purus faucibus. Vitae turpis massa sed elementum tempus. Tempor commodo ullamcorper a lacus vestibulum sed. Eu mi bibendum neque egestas congue quisque egestas. Mi sit amet mauris commodo. Tempor orci dapibus ultrices in iaculis nunc sed. Orci phasellus egestas tellus rutrum tellus. Nisi est sit amet facilisis magna. Ut etiam sit amet nisl. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Sollicitudin aliquam ultrices sagittis orci a. Lacus viverra vitae congue eu. In fermentum et sollicitudin ac orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Fusce id velit ut tortor pretium viverra. Viverra suspendisse potenti nullam ac tortor vitae purus.</p>
							</div>
							<div className="about-info-sidebar">
								<div className="about-card">
									<h4>For your Consideration</h4>
									<p>Here's a quick blurb on the side-bar</p>
									<ul>
										<li><Link to="/services">Check out our services</Link></li>
										<li><Link to="/contact">Get in touch</Link></li>
									</ul>
								</div>
								
								<div className="about-card">
									<img className="about-card-img" src="https://images.unsplash.com/photo-1612928643692-0f33b0448e14?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80" alt="some nice image 1" style={{width: "100%", height: "auto"}} loading="lazy" />
									<p className="caption">Photo Credit: <a href="https://unsplash.com/@tengyart" target="_blank">Tengyart</a></p>
								</div>
								
								<div className="about-card">
									<img className="about-card-img" src="https://images.unsplash.com/photo-1613057217754-9658775053aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" alt="some nice image 1" style={{width: "100%", height: "auto"}} loading="lazy" />
									<p className="caption">Photo Credit: <a href="https://unsplash.com/@tengyart" target="_blank">Tengyart</a></p>
								</div>
							</div>
						</FlexContainer>
					</Container>
				</section>
			</main>
		</>
	)
}

export default About 
