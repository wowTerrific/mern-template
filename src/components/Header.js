import logo from "../images/template-logo.png";
import Container from "./Container";
import { Link } from "react-router-dom";
import Image from "./Image";

const Header = ( props ) => {

	const toTop = () => window.scrollTo(0, 0);

	return (
		<header>
			<Container>
				<Link to="/" onClick={toTop}>
					<Image src={logo} alt="Your Logo" className="logo" />
					
				</Link>
				{props.children}
			</Container>
		</header>
	)
}

export default Header
