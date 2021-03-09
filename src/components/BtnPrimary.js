import { Link } from "react-router-dom";

const BtnPrimary = props => {
	const toTop = () => window.scrollTo(0, 0);
	return (
		<Link to={props.to} onClick={toTop} style={{textDecoration: "none", display: "block", width: "100%"}}>
			<button className="btn-primary">{props.children}</button>
		</Link>
	)	
}

export default BtnPrimary