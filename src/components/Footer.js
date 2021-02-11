import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../images/white-template-logo.png";

const Footer = () => {
	
	return (
		<footer>
			<Container>
				<Link to="/">
					<img className="footer-logo" src={logo} alt="logo" style={{width: "100%", height: "auto", maxWidth: "200px" }} loading="lazy" />
				</Link>
				<p>Put social-media Icons here</p>
				<p>sitemap & other navigation links</p>
			</Container>
		</footer>
	)
}

export default Footer
