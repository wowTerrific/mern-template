import logo from "../images/template-logo.png";
import Container from "./Container";

const Header = ( props ) => {

	return (
		<header>
			<Container>
				<img className="logo" src={logo} alt="logo" />
				{props.children}
			</Container>
		</header>
	)
}

export default Header
