import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../images/white-template-logo.png";
import social from "../images/social-link.png";

const Footer = () => {
	
	const toTop = () => window.scrollTo(0, 0);
	
	return (
		<footer>
			<Container>
				<Link to="/" onClick={toTop}>
					<img className="footer-logo" src={logo} alt="logo" style={{width: "100%", height: "auto", maxWidth: "200px" }} loading="lazy" />
				</Link>
				<div className="footer-social-links">
					<div className="social-link">
						<a href="#">
							<img src={social} alt="Social icon" style={socialIconStyle} />
						</a>
					</div>
					<div className="social-link">
						<a href="#">
							<img src={social} alt="Social icon" style={socialIconStyle} />
						</a>
					</div>
					<div className="social-link">
						<a href="#">
							<img src={social} alt="Social icon" style={socialIconStyle} />
						</a>
					</div>
				</div>
				<div className="footer-site-links">
					<div className="ftr-site-link-cont">
						<Link to="/sitemap" onClick={toTop}>Sitemap</Link>
					</div>
					<div className="ftr-site-link-cont">
						<Link to="/" onClick={toTop}>Home</Link>
					</div>
					<div className="ftr-site-link-cont">
						<Link to="/contact" onClick={toTop}>Contact Us</Link>
					</div>
				</div>
			</Container>
		</footer>
	)
}

const socialIconStyle = {
	width: "40px",
	height: "auto",
}

export default Footer
